## Overview

Fatum은 매일 별자리 운세를 제공하는 서비스다. 디자인 언어는 미드나잇 블랙 캔버스 위에 보라/금색 액센트를 얹은 **신비로운 다크 우주** 분위기를 목표로 한다. Clay.com의 카드 시스템·타이포 위계·여백 리듬을 차용하되, 팔레트와 표면을 다크로 전환한다.

**핵심 특성:**
- 미드나잇 블랙 캔버스 (`{colors.canvas}` — #0a0a12). 순수 블랙이 아닌 보라빛이 살짝 도는 따뜻한 블랙.
- 보라 + 금색 액센트 시스템. 보라(`{colors.accent-violet}` — #7c3aed)가 1차 액센트, 금색(`{colors.accent-gold}` — #f59e0b)이 2차 강조.
- 포화된 다크 카드 팔레트 (violet-card, gold-card, lavender-card). Clay의 브랜드 색상 카드를 다크 표면으로 전환.
- Inter 폰트. weight 500–600 헤딩, 400 본문.
- border-radius는 Clay와 동일 스케일 (8px–24px).
- 최대 콘텐츠 폭 768px (모바일 퍼스트 단일 컬럼).

## Colors

### Brand & Accent
- **Accent Violet** (`{colors.accent-violet}` — #7c3aed): 1차 액센트. 별자리 선택 활성, 주요 CTA.
- **Accent Gold** (`{colors.accent-gold}` — #f59e0b): 2차 강조. 날짜, 강조 텍스트.
- **Accent Lavender** (`{colors.accent-lavender}` — #a78bfa): 소프트 액센트. 카드 테두리, 보조 UI.

### Surface
- **Canvas** (`{colors.canvas}` — #0a0a12): 기본 페이지 배경.
- **Surface Card** (`{colors.surface-card}` — #13131f): 카드 배경.
- **Surface Elevated** (`{colors.surface-elevated}` — #1c1c2e): 강조 카드, 호버 상태.

### Card Variants
- **Card Violet** (`{colors.card-violet}` — #1e1030): 보라 액센트 카드 배경.
- **Card Gold** (`{colors.card-gold}` — #1e1608): 금색 액센트 카드 배경.
- **Card Lavender** (`{colors.card-lavender}` — #18162e): 라벤더 액센트 카드 배경.

### Text
- **Ink** (`{colors.ink}` — #f0f0fa): 헤딩과 주요 텍스트.
- **Body** (`{colors.body}` — #c8c8d8): 기본 본문.
- **Muted** (`{colors.muted}` — #6b6b8a): 보조 텍스트, 날짜, 캡션.

### Semantic
- **Hairline** (`{colors.hairline}` — #2a2a3e): 카드 테두리.
- **Success** (`{colors.success}` — #22c55e): 성공 상태.
- **Error** (`{colors.error}` — #ef4444): 에러 상태.

## Typography

Inter 폰트 단일 사용. 헤딩 weight 500–600, 본문 400.

| 토큰 | 크기 | 굵기 | 자간 | 용도 |
|---|---|---|---|---|
| `{typography.display-xl}` | 72px | 500 | -2.5px | 대형 히어로 |
| `{typography.display-lg}` | 56px | 500 | -2px | 섹션 헤딩 |
| `{typography.display-md}` | 40px | 500 | -1px | 서브 헤딩 |
| `{typography.display-sm}` | 32px | 500 | -0.5px | 카드 타이틀 |
| `{typography.title-lg}` | 24px | 600 | -0.3px | 별자리 이름 |
| `{typography.title-md}` | 18px | 600 | 0 | 카드 인트로 |
| `{typography.body-md}` | 16px | 400 | 0 | 본문 운세 텍스트 |
| `{typography.body-sm}` | 14px | 400 | 0 | 날짜, 부가 정보 |
| `{typography.caption}` | 13px | 500 | 0 | 배지, 심볼 |

## Layout

- **Base unit:** 4px.
- **Max content width:** 768px (모바일 퍼스트).
- **Section padding:** 96px 수직.
- **Card padding:** 24px (일반), 32px (피처).
- **별자리 그리드:** 4×3 (데스크탑), 3×4 (모바일).

## Shapes

| 토큰 | 값 | 용도 |
|---|---|---|
| `{rounded.sm}` | 8px | 소형 버튼, 배지 |
| `{rounded.md}` | 12px | 기본 버튼, 입력 |
| `{rounded.lg}` | 16px | 콘텐츠 카드 |
| `{rounded.xl}` | 24px | 피처 카드 |

## Components

**`zodiac-button`** — 별자리 선택 버튼. 기본: `{colors.surface-card}` 배경, `{colors.hairline}` 테두리, `{rounded.lg}`. 활성: `{colors.accent-violet}` 배경, 흰색 텍스트.

**`fortune-card`** — 운세 출력 카드. `{colors.surface-elevated}` 배경, `{colors.accent-lavender}` 30% 투명도 테두리, `{rounded.xl}`, 32px 패딩. 상단 별자리 심볼 + 이름, 하단 운세 본문.

**`date-badge`** — 날짜 표시. `{colors.accent-gold}` 텍스트, `{typography.body-sm}`.

## Do's and Don'ts

### Do
- 캔버스는 반드시 `{colors.canvas}` (#0a0a12).
- 별자리 선택 활성 상태에는 `{colors.accent-violet}` 사용.
- 날짜/부가 정보에는 `{colors.accent-gold}` 사용.
- 카드 테두리는 `{colors.hairline}` 또는 `{colors.accent-lavender}` (강조 시).

### Don't
- 라이트 모드 없음. 다크 단독 서비스.
- 순수 흰색(#ffffff) 텍스트 금지 — `{colors.ink}` (#f0f0fa) 사용.
- 그림자 남용 금지. 깊이는 표면 색상 차이로만 표현.
