import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';
import { getDayContext } from '../src/features/horoscope/chinese-zodiac/lib/getDayContext';
import { CHINESE_ZODIAC_SYSTEM_PROMPT, buildUserMessage } from '../src/lib/prompts/chineseZodiac';

async function main() {
  const client = new Anthropic();
  const context = getDayContext(new Date());

  console.log(`Generating: ${context.date} (${context.cheongan}${context.jiji}일, ${context.ohaeng} ${context.eumoyang})`);
  if (context.julgki) console.log(`절기: ${context.julgki}`);

  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 8000,
    system: CHINESE_ZODIAC_SYSTEM_PROMPT,
    messages: [{ role: 'user', content: buildUserMessage(context) }],
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
  const outputPath = path.join(outputDir, `${context.date}-chinese-zodiac.json`);
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`Saved: ${outputPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
