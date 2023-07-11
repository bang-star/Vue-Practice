import axios from "@/service/axios";

export const signUp = async (data) => {
  try {
    const { id, password } = data;
    await axios.post('/signUp', { id, password });
  } catch (err) {
    console.log(err);
  }
}