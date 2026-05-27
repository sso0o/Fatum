import type { ChineseZodiacMeta } from '../types';

export const CHINESE_ZODIAC_LIST: readonly ChineseZodiacMeta[] = [
  { sign: 'rat',     label: '쥐',    emoji: '🐭', jiji: '子', element: '水', eumoyang: '양', nature: '영민하고 적응력이 강함',      birthYears: '1972 · 1984 · 1996 · 2008 · 2020' },
  { sign: 'ox',      label: '소',    emoji: '🐮', jiji: '丑', element: '土', eumoyang: '음', nature: '성실하고 인내심이 깊음',      birthYears: '1973 · 1985 · 1997 · 2009 · 2021' },
  { sign: 'tiger',   label: '호랑이', emoji: '🐯', jiji: '寅', element: '木', eumoyang: '양', nature: '용감하고 열정적',             birthYears: '1974 · 1986 · 1998 · 2010 · 2022' },
  { sign: 'rabbit',  label: '토끼',  emoji: '🐰', jiji: '卯', element: '木', eumoyang: '음', nature: '온화하고 직관이 뛰어남',      birthYears: '1975 · 1987 · 1999 · 2011 · 2023' },
  { sign: 'dragon',  label: '용',    emoji: '🐲', jiji: '辰', element: '土', eumoyang: '양', nature: '카리스마 있고 야망이 큼',     birthYears: '1976 · 1988 · 2000 · 2012 · 2024' },
  { sign: 'snake',   label: '뱀',    emoji: '🐍', jiji: '巳', element: '火', eumoyang: '음', nature: '지혜롭고 신중함',             birthYears: '1977 · 1989 · 2001 · 2013 · 2025' },
  { sign: 'horse',   label: '말',    emoji: '🐴', jiji: '午', element: '火', eumoyang: '양', nature: '활동적이고 독립적',           birthYears: '1978 · 1990 · 2002 · 2014 · 2026' },
  { sign: 'goat',    label: '양',    emoji: '🐑', jiji: '未', element: '土', eumoyang: '음', nature: '창의적이고 공감 능력이 높음', birthYears: '1967 · 1979 · 1991 · 2003 · 2015' },
  { sign: 'monkey',  label: '원숭이', emoji: '🐵', jiji: '申', element: '金', eumoyang: '양', nature: '재치 있고 다재다능',          birthYears: '1968 · 1980 · 1992 · 2004 · 2016' },
  { sign: 'rooster', label: '닭',    emoji: '🐔', jiji: '酉', element: '金', eumoyang: '음', nature: '분석적이고 완벽 추구',        birthYears: '1969 · 1981 · 1993 · 2005 · 2017' },
  { sign: 'dog',     label: '개',    emoji: '🐶', jiji: '戌', element: '土', eumoyang: '양', nature: '충직하고 정의감이 강함',      birthYears: '1970 · 1982 · 1994 · 2006 · 2018' },
  { sign: 'pig',     label: '돼지',  emoji: '🐷', jiji: '亥', element: '水', eumoyang: '음', nature: '넉넉하고 진솔함',             birthYears: '1971 · 1983 · 1995 · 2007 · 2019' },
] as const;
