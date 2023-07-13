import axios from "@/service/axios";
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