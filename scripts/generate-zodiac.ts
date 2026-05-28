import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';
import { ZODIAC_SYSTEM_PROMPT, buildZodiacUserMessage } from '../src/lib/prompts/zodiac';

// Jan 6, 2000 UTC — verified new moon
const REFERENCE_NEW_MOON = Date.UTC(2000, 0, 6);
const LUNAR_CYCLE = 29.53059;

function toLocalDateString(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function getMoonPhase(date: Date): string {
  const utcMs = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  const daysSince = (utcMs - REFERENCE_NEW_MOON) / 86_400_000;
  const phase = ((daysSince % LUNAR_CYCLE) + LUNAR_CYCLE) % LUNAR_CYCLE;

  if (phase < 1.85) return '삭(신월)';
  if (phase < 7.38) return '초승달';
  if (phase < 9.22) return '상현달';
  if (phase < 14.77) return '상현 후';
  if (phase < 16.61) return '망(보름달)';
  if (phase < 22.15) return '하현 전';
  if (phase < 23.99) return '하현달';
  return '그믐달';
}

function getSunSign(date: Date): string {
  const m = date.getMonth() + 1;
  const d = date.getDate();

  if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) return '양자리 (Aries)';
  if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) return '황소자리 (Taurus)';
  if ((m === 5 && d >= 21) || (m === 6 && d <= 21)) return '쌍둥이자리 (Gemini)';
  if ((m === 6 && d >= 22) || (m === 7 && d <= 22)) return '게자리 (Cancer)';
  if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) return '사자자리 (Leo)';
  if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) return '처녀자리 (Virgo)';
  if ((m === 9 && d >= 23) || (m === 10 && d <= 22)) return '천칭자리 (Libra)';
  if ((m === 10 && d >= 23) || (m === 11 && d <= 21)) return '전갈자리 (Scorpio)';
  if ((m === 11 && d >= 22) || (m === 12 && d <= 21)) return '사수자리 (Sagittarius)';
  if ((m === 12 && d >= 22) || (m === 1 && d <= 19)) return '염소자리 (Capricorn)';
  if ((m === 1 && d >= 20) || (m === 2 && d <= 18)) return '물병자리 (Aquarius)';
  return '물고기자리 (Pisces)';
}

async function main() {
  const client = new Anthropic();
  const date = new Date();
  const dateStr = toLocalDateString(date);
  const moonPhase = getMoonPhase(date);
  const sunSign = getSunSign(date);

  console.log(`Generating: ${dateStr} (달: ${moonPhase}, 태양궁: ${sunSign})`);

  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 8000,
    system: ZODIAC_SYSTEM_PROMPT,
    messages: [{ role: 'user', content: buildZodiacUserMessage(dateStr, moonPhase, sunSign) }],
  });

  const text = response.content[0].type === 'text' ? response.content[0].text : '';

  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    console.error('JSON 파싱 실패:');
    console.error(text);
    process.exit(1);
  }

  const outputDir = path.join(process.cwd(), 'data');
  fs.mkdirSync(outputDir, { recursive: true });
  const outputPath = path.join(outputDir, `${dateStr}-zodiac.json`);
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`Saved: ${outputPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
