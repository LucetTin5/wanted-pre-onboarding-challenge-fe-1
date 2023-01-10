# Wanted 프리온보딩 TodoList

## 자기소개

> 프론트엔드 개발자가 되고 싶어 공부하고 있습니다.

## 사용 기술

- React.js
- Typescript
- React-Hook-Form
- Redux (Redux/toolkit)
- Stlyed-component
- Vite

## 프로젝트 directory 구성

- src
  - common: 공통으로 이용될 함수/컴포넌트
  - components: 페이지들에 이용될 컴포넌트
  - constatns: api등 상수
  - hooks: 커스텀 훅
  - pages: login, join, home 각 페이지 컴포넌트
  - schema: form validation을 위한 schema
  - store: redux store 및 action, slices
  - types: interfaces, types
  - 기타 설정 파일 및 index.html

## 프로젝트 구성

### page Home /

- 회원가입 / 로그인을 Nav에서 진행할 수 있음
- 로그인할 시 todo 전체를 불러와 표시함
- 로그인 시 페이지 하단에서 새로운 todo 를 추가할 수 있음
- 로그인 시 각 todo에서 수정/삭제가 가능함
- 각 todo의 수정은 변화가 없다면 수정버튼이 활성화되지 않음

### page Login /login

- 로그인 시 접근할 수 없음

### page Join /signup

- 로그인 시 접근할 수 없음
- 비밀번호/비밀번호 확인이 일치해야 함
- email형식, 비밀번호 형식이 맞지 않으면 에러메시지를 표기함
