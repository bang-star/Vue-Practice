const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const privateKey = process.env.private_key;
const refreshKey = process.env.refresh_key;

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
      res.status(200).send({
        msg: '로그인 성공!',
        accessToken: jwt.sign({ userId: id }, privateKey, { expiresIn: '10s' }),
        refreshToken: jwt.sign({ userId: id }, refreshKey, { expiresIn: '10h' }),
      });
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

app.get('/userInfo', (req, res) => {
  const accessToken = req.header('access-token');
  jwt.verify(accessToken, privateKey, (err, decoded) => {
    if(err) {
      if(err.name === 'TokenExpiredError') {
        return res.status(401).send('토큰 유효기간 만료')
      }
      res.status(500).send('에러');
      return;
    }

    res.status(200).json({
      userInfo
    })
  })
})

app.get('/refreshToken', (req, res) => {
  const refreshToken = req.header('refresh-token');

  jwt.verify(refreshToken, refreshKey, (err, decoded) => {
    if(err) {
      if(err.name === 'TokenExpiredError') return res.status(401).send('토큰 유효기간 만료');
      res.status(500).send('에러');
      return;
    }

    res.status(200).json({
      accessToken: jwt.sign({ userId: decoded.id }, privateKey, { expiresIn: '10s' }),
    });
  })
})

const port = 3000;
app.listen(port, () => console.log(`${port}서버 실행 성공`));