# 🔮 Fatum

> 라틴어로 **운명** — Claude AI가 매일 생성하는 서양·동양 별자리 운세 서비스

## 개요

매일 자정 GitHub Actions가 Claude API를 호출해 12개 서양 별자리와 12띠 동양 운세를 자동 생성합니다. 생성된 운세는 저장소 `/data/` 폴더에 JSON으로 커밋되고, Next.js 웹사이트에서 ISR로 제공됩니다.

## 기능

| 기능 | 상태 |
|---|---|
| 서양 별자리 운세 (12개) | ✅ |
| 동양 띠별 운세 (12개) | ✅ |
| GitHub Actions 자동 생성 | 🔄 Phase 2 |
| Threads 자동 포스팅 | 🔄 Phase 4 |

## 기술 스택

| 영역 | 기술 |
|---|---|
| 프레임워크 | Next.js 16 (TypeScript, App Router) |
| 스타일링 | Tailwind CSS v4 + shadcn/ui |
| 운세 생성 | Claude API (`@anthropic-ai/sdk`) |
| 데이터 저장 | GitHub 저장소 JSON 파일 (`/data/`) |
| 스케줄러 | GitHub Actions |
| 배포 | Vercel |

## 시작하기

### 사전 요구 사항

- Node.js 20+
- Anthropic API 키

### 설치

```bash
git clone https://github.com/sychoi/Fatum.git
cd Fatum
npm install
```

### 환경 변수 설정

```bash
cp .env.example .env.local
```

`.env.local`에 아래 값을 입력합니다.

```
ANTHROPIC_API_KEY=sk-ant-...
```

### 개발 서버 실행

```bash
npm run dev
```

`http://localhost:3000`에서 확인합니다.

## 운세 데이터 생성

Claude Code 슬래시 커맨드로 오늘 날짜 운세 JSON을 직접 생성합니다.

```
/generate-zodiac          # 서양 별자리 운세
/generate-chinese-zodiac  # 동양 띠별 운세
```

생성된 파일은 `data/YYYY-MM-DD-zodiac.json`, `data/YYYY-MM-DD-chinese-zodiac.json`에 저장됩니다.

## 데이터 구조

### 서양 별자리 (`YYYY-MM-DD-zodiac.json`)

```json
{
  "date": "2026-05-28",
  "fortunes": {
    "aries": {
      "energy": "오늘의 전반적 에너지",
      "advice": "오늘의 조언",
      "caution": "주의사항",
      "relationship": "인간관계 운",
      "career": "직업·재물 운",
      "lucky": { "color": "행운의 색", "number": 7, "item": "행운의 아이템" }
    }
  }
}
```

### 동양 띠별 (`YYYY-MM-DD-chinese-zodiac.json`)

```json
{
  "date": "2026-05-28",
  "fortunes": {
    "rat": {
      "energy": "오늘의 기운",
      "advice": "오늘의 조언",
      "caution": "주의사항",
      "relationship": "인간관계 운",
      "career": "직업·재물 운",
      "lucky": { "color": "행운의 색", "number": 1, "item": "행운의 물건", "direction": "행운의 방향" },
      "harmony": "오행 상생·상극 해설"
    }
  }
}
```

## 폴더 구조

```
src/
├── app/
│   ├── horoscope/
│   │   ├── zodiac/page.tsx          # 서양 별자리 페이지
│   │   └── chinese-zodiac/page.tsx  # 동양 띠별 페이지
│   └── page.tsx                     # 홈
├── features/
│   └── horoscope/
│       ├── zodiac/                  # 서양 별자리 피처
│       └── chinese-zodiac/          # 동양 띠별 피처
├── common/
│   └── components/
│       └── FortuneCard.tsx          # 공통 운세 카드
└── types/
    └── index.ts                     # Fortune, FortuneData 전역 타입
data/
└── YYYY-MM-DD-{type}.json           # 날짜별 운세 데이터
```

## 스크립트

```bash
npm run dev        # 개발 서버
npm run build      # 프로덕션 빌드
npm run start      # 프로덕션 서버
npm run lint       # ESLint 검사
npm run test       # 테스트 실행
npm run test:watch # 테스트 워치 모드
```

