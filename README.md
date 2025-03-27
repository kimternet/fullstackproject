# Full Stack 중고 마켓

<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Chakra%20UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white" alt="Chakra UI" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
</div>

## 📝 프로젝트 소개

중고 물품을 거래할 수 있는 풀스택 웹 애플리케이션입니다. React로 프론트엔드를, Express와 MongoDB로 백엔드를 구현했으며, UI는 Chakra UI를 사용하여 반응형으로 디자인했습니다.

## 🚀 주요 기능

- 중고 상품 등록, 수정, 삭제

## 🛠️ 기술 스택

- **프론트엔드**: React, React Router, Chakra UI, Axios
- **백엔드**: Node.js, Express (ES 모듈 문법)
- **데이터베이스**: MongoDB
- **인증**: JWT

## 🏁 시작하기

### 사전 요구사항

- Node.js (v14 이상)
- MongoDB Atlas 계정 또는 로컬 MongoDB 인스턴스
- npm 또는 yarn

### 설치

1. 저장소 클론
```bash
git clone https://github.com/yourusername/fullstack-marketplace.git
cd fullstack-marketplace
```

2. 필요한 패키지 설치
```bash
# 백엔드 패키지 설치
cd backend
npm install

# 프론트엔드 패키지 설치
cd ../frontend
npm install
```

3. 환경 변수 설정(.env)
```
# backend 폴더에 .env 파일 생성
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

4. 서버 실행
```bash
# 백엔드 서버 실행
cd backend
npm run dev

# 프론트엔드 서버 실행
cd ../frontend
npm run dev
```
