import fs from 'fs';
import path from 'path';

interface Lucky {
  color: string;
  number: number;
  item: string;
}

interface PiscesFortune {
  energy: string;
  advice: string;
  caution: string;
  relationship: string;
  career: string;
  lucky: Lucky;
}

interface ZodiacData {
  date: string;
  fortunes: {
    pisces: PiscesFortune;
    [key: string]: PiscesFortune;
  };
}

export function formatPost(dateStr: string, fortune: PiscesFortune): string {
  const [, month, day] = dateStr.split('-').map(Number);
  const header = `♓ 물고기자리 오늘의 운세 (${month}월 ${day}일)`;
  const { energy, advice, caution, relationship, career, lucky } = fortune;

  return [
    header,
    '',
    `✨ 에너지: ${energy}`,
    `💡 조언: ${advice}`,
    `⚠️ 주의: ${caution}`,
    `💕 관계: ${relationship}`,
    `💼 직장: ${career}`,
    `🍀 럭키: ${lucky.color} · ${lucky.number} · ${lucky.item}`,
  ].join('\n');
}

function truncateToLimit(text: string, limit = 500): string {
  if (text.length <= limit) return text;
  const lines = text.split('\n');
  let result = '';
  for (const line of lines) {
    const next = result ? `${result}\n${line}` : line;
    if (next.length > limit) break;
    result = next;
  }
  return result;
}

async function postToThreads(text: string): Promise<void> {
  text = truncateToLimit(text);
  const userId = process.env.THREADS_USER_ID;
  const token = process.env.THREADS_ACCESS_TOKEN;

  if (!userId || !token) {
    throw new Error('THREADS_USER_ID 또는 THREADS_ACCESS_TOKEN 환경변수가 없습니다.');
  }

  const base = `https://graph.threads.net/v1.0/${userId}`;

  // 1단계: 컨테이너 생성
  const createRes = await fetch(`${base}/threads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ media_type: 'TEXT', text }),
  });

  if (!createRes.ok) {
    const body = await createRes.text();
    throw new Error(`컨테이너 생성 실패 (${createRes.status}): ${body}`);
  }

  const { id: creationId } = (await createRes.json()) as { id: string };

  // 2단계: 게시
  const publishRes = await fetch(`${base}/threads_publish`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ creation_id: creationId }),
  });

  if (!publishRes.ok) {
    const body = await publishRes.text();
    throw new Error(`게시 실패 (${publishRes.status}): ${body}`);
  }

  const result = (await publishRes.json()) as { id: string };
  console.log(`포스팅 완료: https://www.threads.net/t/${result.id}`);
}

function toLocalDateString(date: Date): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul' }).format(date);
}

async function main(): Promise<void> {
  const dateStr = toLocalDateString(new Date());
  const filePath = path.join(process.cwd(), 'data', `${dateStr}-zodiac.json`);

  if (!fs.existsSync(filePath)) {
    console.error(`운세 파일이 없습니다: ${filePath}`);
    process.exit(1);
  }

  const raw = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(raw) as ZodiacData;
  const fortune = data.fortunes.pisces;

  const text = formatPost(dateStr, fortune);
  console.log('--- 포스팅 내용 ---');
  console.log(text);
  console.log('-------------------');

  await postToThreads(text);
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
