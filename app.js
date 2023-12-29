const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

// 정적 파일들을 제공하기 위한 미들웨어 설정
app.use(express.static(path.join(__dirname, 'public')));

// 루트 경로에 대한 요청 처리
app.get('/', (req, res) => {
  // index.html 파일의 경로를 제대로 설정
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
