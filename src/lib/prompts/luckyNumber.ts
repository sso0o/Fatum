export function getLuckyNumber(date: string, sign: string): number {
  const seed = [...(date + sign)].reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return seed % 100;
}
