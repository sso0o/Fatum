export function getLuckyNumber(date: string, sign: string): number {
  const str = date + '|' + sign;
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = (Math.imul(h, 16777619) >>> 0);
  }
  return h % 100;
}
