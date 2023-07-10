import axios from "axios";

const userInfo = [
  {
    id: 'admin',
    password: 'admin'
  }
]

export const loginUser = (user) => {
     const findUser = userInfo.find(e => e.id === user.id);
     console.log(findUser);
     if(findUser) {
       if(findUser.password === user.password) {
         return '로그인 성공';
       }else {
         return '비밀번호가 일치하지 않습니다.';
       }
     }else {
       return '존재하지 않은 아이디/비밀번호 입니다.';
     }
}

export const testAPI = async () => {
  const result = await axios.get('http://localhost:3000/');
  console.log(result)
}