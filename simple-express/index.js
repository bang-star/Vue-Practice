const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const userInfo = [];

app.get('/', (req, res) => {
  res.send('API 요청 성공');
})

app.post('/login', (req, res) => {
  const { id, password } = req.body;

  let userIndex = userInfo.findIndex(item => item.id === id);
  if(userIndex > -1) {

    if(userInfo[userIndex].password === password) {
      res.status(200).send('로그인 성공!');
      return;
    }

    res.status(500).send('비밀번호가 일치하지 않습니다.');
    return;
  }

  res.status(500).send('존재하지 않는 계정입니다.');
});

app.post('/signUp', (req, res) => {

  const { id, password } = req.body;

  if(userInfo.findIndex(item => item.id === id) > -1) {
    res.status(500).send('회원가입 실패');
    return;
  }

  userInfo.push({
    id,
    password
  });

  res.status(200).send('회원가입 요청 성공');
})

const port = 3000;
app.listen(port, () => console.log(`${port}서버 실행 성공`));