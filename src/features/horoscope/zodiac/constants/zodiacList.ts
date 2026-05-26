import type { ZodiacMeta } from '../types';

export const ZODIAC_LIST: readonly ZodiacMeta[] = [
  { sign: 'aries',       label: '양자리',     symbol: '♈', dates: '3/21–4/19'   },
  { sign: 'taurus',      label: '황소자리',   symbol: '♉', dates: '4/20–5/20'   },
  { sign: 'gemini',      label: '쌍둥이자리', symbol: '♊', dates: '5/21–6/21'   },
  { sign: 'cancer',      label: '게자리',     symbol: '♋', dates: '6/22–7/22'   },
  { sign: 'leo',         label: '사자자리',   symbol: '♌', dates: '7/23–8/22'   },
  { sign: 'virgo',       label: '처녀자리',   symbol: '♍', dates: '8/23–9/22'   },
  { sign: 'libra',       label: '천칭자리',   symbol: '♎', dates: '9/23–10/22'  },
  { sign: 'scorpio',     label: '전갈자리',   symbol: '♏', dates: '10/23–11/21' },
  { sign: 'sagittarius', label: '사수자리',   symbol: '♐', dates: '11/22–12/21' },
  { sign: 'capricorn',   label: '염소자리',   symbol: '♑', dates: '12/22–1/19'  },
  { sign: 'aquarius',    label: '물병자리',   symbol: '♒', dates: '1/20–2/18'   },
  { sign: 'pisces',      label: '물고기자리', symbol: '♓', dates: '2/19–3/20'   },
] as const;
