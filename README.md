Full Stack 중고 마켓
<div align="center"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" /> <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" /> <img src="https://img.shields.io/badge/Chakra%20UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white" alt="Chakra UI" /> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" /> <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" /> </div>
📝 프로젝트 소개
중고 물품을 거래할 수 있는 풀스택 웹 애플리케이션입니다. React로 프론트엔드를, Express와 MongoDB로 백엔드를 구현했으며, UI는 Chakra UI를 사용하여 반응형으로 디자인했습니다.

🚀 주요 기능
중고 상품 등록, 수정, 삭제

상품 목록 조회 및 상세 페이지 제공

사용자 인증 (로그인/회원가입)

MongoDB 기반 데이터 저장 및 관리

🛠️ 기술 스택
프론트엔드: React, React Router, Chakra UI, Axios

백엔드: Node.js, Express (ES 모듈 문법)

데이터베이스: MongoDB

🏁 시작하기
사전 요구사항
Node.js (v14 이상)

MongoDB Atlas 계정 또는 로컬 MongoDB 인스턴스

npm 또는 yarn

설치
저장소 클론

bash
복사
편집
git clone https://github.com/yourusername/fullstack-marketplace.git
cd fullstack-marketplace
필요한 패키지 설치

bash
복사
편집
# 백엔드 패키지 설치
cd backend
npm install

# 프론트엔드 패키지 설치
cd ../frontend
npm install
환경 변수 설정(.env)

bash
복사
편집
# backend 폴더에 .env 파일 생성
MONGO_URI=your_mongodb_connection_string
PORT=5000
실행 방법
개발 모드 실행
bash
복사
편집
npm run dev
cross-env를 사용하여 NODE_ENV=development 상태에서 nodemon으로 서버를 실행합니다. 코드 변경 시 자동으로 서버가 재시작됩니다.

빌드 및 배포
bash
복사
편집
npm run build
npm install을 실행한 후, 프론트엔드(frontend) 폴더로 이동하여 npm install && npm run build를 실행합니다.

React 앱이 빌드되어 frontend/dist 폴더에 생성됩니다.

프로덕션 모드 실행
bash
복사
편집
npm start
cross-env를 사용하여 NODE_ENV=production 상태에서 node backend/server.js를 실행합니다.

서버가 5000번 포트에서 실행되며, 빌드된 React 앱을 서빙합니다.

⚠️ Windows 환경에서 발생할 수 있는 문제 해결
Windows 환경에서는 cross-env가 필요하지 않은 경우도 있지만, NODE_ENV 설정 오류가 발생할 수 있습니다.
npm install cross-env가 제대로 설치되었는지 확인하세요.

📌 배포
배포 시 Render 또는 Vercel을 사용할 수 있습니다.

Render 배포:

package.json의 scripts에 "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend" 가 포함되어 있어야 합니다.

GitHub에 푸시한 후 Render에서 해당 저장소를 선택하여 배포 진행

Vercel 프론트엔드 배포:

프론트엔드(frontend) 폴더에서 vercel CLI를 사용하여 배포 가능

bash
복사
편집
cd frontend
vercel
