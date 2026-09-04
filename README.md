# React State Management Lab

React에서 사용할 수 있는 여러 상태 관리 방식이 실제 코드에서 어떻게 다른지 비교하기 위해 만든 학습용 프로젝트입니다.

같은 Todo 기능을 `useState`, Zustand, Redux Toolkit, Jotai, TanStack Query로 각각 구현했습니다. 기능은 같지만 상태를 정의하고 읽고 변경하는 방법, 코드의 구조, 전역 상태와 서버 상태를 다루는 방식이 어떻게 달라지는지 직접 비교할 수 있습니다.

## 시작하게 된 이유

React에는 다양한 상태 관리 선택지가 있지만, 문서나 간단한 예제만으로는 각 도구의 차이와 적절한 사용 시점을 체감하기 어렵습니다.

이 프로젝트에서는 동일한 UI와 요구사항을 유지한 채 상태 관리 방식만 바꾸어 구현합니다. 이를 통해 다음 내용을 살펴보는 것이 목적입니다.

- 상태를 선언하고 업데이트하는 방식
- 컴포넌트에서 상태와 액션을 사용하는 방식
- 보일러플레이트와 파일 구조의 차이
- 지역 상태와 전역 클라이언트 상태의 차이
- 클라이언트 상태와 서버 상태의 차이
- 프로젝트 규모와 요구사항에 따른 상태 관리 도구의 선택 기준

## 담고 있는 내용

모든 예제는 Todo 추가, 완료 상태 변경, 삭제, 필터링, 개수 요약이라는 공통 기능을 제공합니다.

| 방식 | 살펴볼 내용 |
| --- | --- |
| React `useState` | React의 기본 Hook만으로 컴포넌트 내부 상태 관리하기 |
| Zustand | 간결한 Store와 selector를 이용해 전역 상태 관리하기 |
| Redux Toolkit | Slice, action, reducer, selector를 중심으로 예측 가능한 상태 관리하기 |
| Jotai | 작은 atom 단위로 상태를 구성하고 파생 상태 만들기 |
| TanStack Query | API에서 가져온 서버 상태를 조회·변경하고 캐시 무효화하기 |

TanStack Query 예제는 `json-server`와 [`db.json`](./db.json)을 사용해 간단한 Todo API를 실행합니다. 나머지 예제의 Todo 데이터는 브라우저 메모리에서 관리되므로 페이지를 새로고침하면 초기화됩니다.

## 기술 스택

- React 19
- TypeScript
- Vite
- React Router
- Zustand
- Redux Toolkit / React Redux
- Jotai
- TanStack Query
- JSON Server

## 실행 방법

### 1. 사전 준비

[Node.js](https://nodejs.org/)가 필요합니다. 현재 사용 중인 Vite 버전을 기준으로 Node.js `20.19 이상` 또는 `22.12 이상`을 사용해 주세요.

저장소를 내려받은 뒤 프로젝트 디렉터리로 이동하고 의존성을 설치합니다.

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

터미널에 표시되는 주소(기본값은 `http://localhost:5173`)를 브라우저에서 열면 됩니다.

### 3. TanStack Query 예제용 API 실행

TanStack Query 페이지를 사용하려면 별도의 터미널을 열어 JSON Server도 실행해야 합니다.

```bash
npm run server
```

API 서버는 `http://localhost:3001`에서 실행됩니다. 따라서 전체 기능을 확인할 때는 다음 두 프로세스가 동시에 실행 중이어야 합니다.

```text
터미널 1: npm run dev
터미널 2: npm run server
```

## 사용 가능한 명령어

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | Vite 개발 서버 실행 |
| `npm run server` | TanStack Query 예제용 JSON Server 실행 |
| `npm run build` | TypeScript 검사 후 프로덕션 빌드 생성 |
| `npm run lint` | ESLint로 코드 검사 |
| `npm run preview` | 생성된 프로덕션 빌드 미리보기 |

## 프로젝트 구조

```text
src/
├─ app/                         # 라우팅과 애플리케이션 구성
├─ components/                  # 각 예제가 공유하는 Todo UI
├─ features/
│  ├─ use-state/                # React useState 구현
│  ├─ zustand/                  # Zustand 구현
│  ├─ redux/                    # Redux Toolkit 구현
│  ├─ jotai/                    # Jotai 구현
│  └─ tanstack-query/           # TanStack Query 및 API 구현
└─ types/                       # 공통 타입
```

각 페이지의 구현을 나란히 비교해 보면 라이브러리마다 상태 저장 위치, 업데이트 로직, 컴포넌트 연결 방식이 어떻게 달라지는지 확인할 수 있습니다.
