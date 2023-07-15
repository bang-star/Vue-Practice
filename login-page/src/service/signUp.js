import axios from "@/service/axios/axios";
import authAxios from "@/service/axios/authAxios";
import router from "@/router";

export const signUp = async (data) => {
  try {
    const { id, password } = data;
    await axios.post('/signUp', { id, password });
    router.push('/login');
  } catch (err) {
    console.log(err);
  }
}

export const getUserInfo = async () => {
  try {
    // == 전역적으로 헤더에 토큰을 담는 방법 == //
    // axios.defaults.headers.common['access-token'] = '토큰';
    await authAxios.get('/userInfo');
  }catch (err) {
    console.log(err);
  }
}
