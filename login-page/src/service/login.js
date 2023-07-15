import axios from "./axios/axios";
import authAxios from "@/service/axios/authAxios";
import router from "@/router";
import store from "@/store";

export const loginUser = async (user) => {
   try {
    const { data } = await axios.post('/login', user);
    store.commit('setLogin', data);
    router.push('/');
   } catch (err) {
    console.log(err);
   }
}

export const refreshToken = async () => {
  try {
    const { data } = await authAxios.get("/refreshToken");
    store.commit("setAccessToken", data.accessToken);
  } catch (err) {
    console.log(err);
  }
}
