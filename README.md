# 🔮 Fatum

> 라틴어로 **운명** — 별자리 운세를 매일 자동 생성하고 웹사이트에서 조회하는 서비스

## 개요

매일 자정 Claude API로 12개 별자리 운세를 자동 생성하고, 웹사이트에서 조회할 수 있습니다. 생성된 운세는 Threads에 자동으로 포스팅됩니다.

## 기술 스택

| 영역 | 기술 |
|---|---|
| 프론트엔드 | Next.js (TypeScript, App Router) |
| 운세 생성 | Claude API |
| 데이터 저장 | GitHub JSON 파일 (`/data/YYYY-MM-DD.json`) |
| 스케줄러 | GitHub Actions (매일 00시 cron) |
| 배포 | Vercel |

## 시스템 구조

```
매일 00시 GitHub Actions
  → Claude API로 12개 별자리 운세 일괄 생성
  → /data/YYYY-MM-DD.json 커밋
  → Threads API로 1포스팅

웹사이트 (Next.js)
  → GitHub raw JSON fetch
  → 별자리 선택 → 운세 표시
```

## 주요 기능

- **운세 자동 생성** — 매일 00시 12개 별자리 운세 일괄 생성
- **웹 조회** — 신비로운 다크 테마, 별자리 선택 후 운세 확인
- **Threads 자동 포스팅** — 12개 별자리 묶어서 하루 1회 게시

## 로드맵

- [x] **Phase 1** — 프로젝트 셋업 (GitHub, Next.js, Vercel, Claude API)
- [ ] **Phase 2** — 운세 생성 자동화 (GitHub Actions + Claude API)
- [ ] **Phase 3** — 웹사이트 개발 (UI, 데이터 연동)
- [ ] **Phase 4** — Threads 자동 포스팅
- [ ] **Phase 5** — 런칭 후 (커스텀 도메인, SEO, 공유 기능)
