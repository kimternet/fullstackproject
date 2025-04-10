# 웹 배포 Full Stack Project

<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Chakra%20UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white" alt="Chakra UI" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" alt="Render" />
</div>

## 📸 스크린샷

![Image](https://github.com/user-attachments/assets/bcea7c20-0c35-4739-bb38-8f20fc20fb9c)

## 📝 프로젝트 소개

상품을 거래할 수 있는 풀스택 웹 애플리케이션입니다. React로 프론트엔드를, Express와 MongoDB로 백엔드를 구현했으며, UI는 Chakra UI를 사용하여 반응형으로 디자인했습니다.

🔗 **배포 링크**: [방문하기](https://fullstackproject-1uw5.onrender.com) Render로 배포했습니다. loading시 새로고침 부탁드립니다.

## 🚀 주요 기능

- 상품 생성, 읽기, 업데이트, 삭제
- 다크 모드 / 라이트 모드 지원
- 반응형 UI (모바일, 태블릿, 데스크톱)

## 🛠️ 기술 스택

- **프론트엔드**: React, React Router, Chakra UI, Zustand(상태 관리)
- **백엔드**: Node.js, Express (ES 모듈 문법),RESTful API 구축
- **데이터베이스**: MongoDB
- **배포**: Render

## 💡 학습 내용

- **프론트엔드**: React, React Router, Chakra UI, Zustand(상태 관리)
- **백엔드**: Node.js, Express (ES 모듈 문법)
- **데이터베이스**: MongoDB
- **배포**: Render
- **WebSockets & Socket.io를 활용한 실시간 기능 구현**
- **JWT를 이용한 사용자 인증 및 안전한 API 구축**

## 🏁 시작하기

### 사전 요구사항

- Node.js (v14 이상)
- MongoDB Atlas 계정
- npm 또는 yarn

### 로컬 설치 및 실행

1. 저장소 클론
```bash
git clone https://github.com/kimternet/fullstackproject.git
cd fullstackproject
```

2. 필요한 패키지 설치 (통합 프로젝트)
```bash
npm install
```

3. 환경 변수 설정(.env)
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
```

4. 개발 환경에서 실행 (코드 변경 시 자동 재시작)
```bash
npm run dev
```

5. 프로덕션 환경에서 실행 (배포와 동일한 환경)
```bash
# 프론트엔드 빌드 후 서버 시작
npm run build
npm run start
```

## 🚀 배포

이 프로젝트는 Render에 배포되어 있습니다. 다음 기능을 활용했습니다:

- 통합 빌드 프로세스 (프론트엔드 + 백엔드)
- 자동 배포 (GitHub 리포지토리 연동)
- 환경 변수를 통한 보안 설정



