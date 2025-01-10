/*  
    [ 실행 방법 ]
    
    - nodejs 설치
    https://nodejs.org/en

    - node 페키지 설치
    npm install express body-parser

    - server.js 파일 만들기
    아래의 내용을 server.js 파일에 복사 붙여 넣기 한다.

    - 서버 실행
    node  server.js

    - 인덱스 페이지 만들기
    index.html 

    - 인덱스 페이지 요청 하기
    http://localhost:3000/
*/

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // POST 폼 데이터 파싱

app.use(express.static(path.join(__dirname)));

// GET 요청: index.html 파일 응답
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // index.html 반환
});
// ~:3000/ 최상위 경로까지 요청하면 index.html 읽어서 응답할꺼야





// get 방식 / member 요청이 왔을 때 응답할 함수 등록
app.get("/member", function(req, res){

 // 응답하기
 res.send(`{}`);

});







// GET 요청: 쿼리 파라미터 추출
app.get('/send', (req, res) => {
  const queryParams = req.query; // 쿼리 문자열 파라미터 추출
  console.log(queryParams); // 콘솔에 출력
  let html=`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>오잉</title>
        <style>
          strong{
            color: green;
          }
        </style>
      </head>
      <body>
        <h1>메세지 잘 받았서 클라이언트야!</h1>
        <p>메시지 내용: <strong>${queryParams.msg}</strong></p>
      </body>
    </html>
  `;
  res.send(html);
  
  res.send('GET Parameters received: ' + JSON.stringify(queryParams)); // 클라이언트 응답

});
// get 방식 요청 오면 이렇게 동작 할꺼야


// POST 요청: 폼 데이터 처리
app.post('/send', (req, res) => {
  console.log(req.body); // POST 폼 데이터 출력
  res.send('Form received: ' + JSON.stringify(req.body));
});
// post 방식 요청 오면 이렇게 대답할꺼야

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

