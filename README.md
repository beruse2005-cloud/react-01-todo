# 📝 Lecture 01: Todo List

간단하고 직관적으로 할 일 목록을 관리할 수 있는 웹 애플리케이션 프로젝트입니다. 자바스크립트 및 웹 프론트엔드 기초 실습 용도로 제작되었습니다.

---

## 📌 주요 기능 (Features)

- **할 일 추가**: 새로운 할 일을 입력 창에 입력하고 추가할 수 있습니다.
- **완료 상태 전환**: 할 일을 클릭하거나 체크박스를 조작하여 완료/미완료 상태를 토글합니다.
- **할 일 삭제**: 완료되었거나 더 이상 필요 없는 항목을 목록에서 제거합니다.
- **데이터 보존 (선택 사항)**: 브라우저의 `localStorage`를 이용해 페이지를 새로고침해도 할 일 목록이 유지됩니다.

---

## 🛠 기술 스택 (Tech Stack)

- **Language**: HTML5, CSS3, JavaScript (ES6+)
- **Build Tool / Bundler**: Vite (또는 Vanilla JS)
- **Package Manager**: npm / pnpm / yarn

---

## 🚀 시작하기 (Getting Started)

### 1. 프로젝트 클론 (Clone)

```bash
git clone https://github.com/drasla/lecture-01-todo-list.git
cd lecture-01-todo-list
```

### 2. 의존성 패키지 설치 (Install Dependencies)

```bash
npm install
# 또는 pnpm install / yarn install
```

### 3. 개발 서버 실행 (Run Development Server)

```bash
npm run dev
# 또는 pnpm dev / yarn dev
```

서버 실행 후 터미널에 표시되는 로컬 주소(예: `http://localhost:5173`)로 브라우저에서 접속합니다.

---

## 📁 프로젝트 구조 (Directory Structure)

```text
lecture-01-todo-list/
├── index.html          # 메인 HTML
├── src/                # 소스 코드 폴더
│   ├── main.js         # JavaScript 메인 스크립트
│   └── style.css       # 메인 스타일시트
├── package.json        # 의존성 및 스크립트 관리 파일
└── README.md           # 프로젝트 안내 문서
```

---

## 💡 학습 목표 (Learning Objectives)

1. DOM 선택자(Selector) 및 이벤트 리스너(Event Listener) 등록과 활용
2. 상태(State) 데이터 변경에 따른 화면 업데이트 흐름 이해
3. 배열 조작 메서드(`map`, `filter`, `forEach` 등) 활용법 익히기