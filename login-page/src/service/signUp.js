import axios from "@/service/axios/axios";
import authAxios from "@/service/axios/authAxios";
import router from "@/router";
import { getDatabase, ref, push, orderByChild, query, equalTo, onValue } from "firebase/database";

export const signUp = async (data) => {
  try {
    const { id, password } = data;
    await axios.post("/signUp", { id, password });
    router.push("/login");
  } catch (err) {
    console.log(err);
  }
};

export const signUpInFirebase = (id, password) => {
  const db = getDatabase();
  push(ref(db, 'users/'), {
    username: id,
    password: password,
  });
};

export const getUserInFirebase = async (id) => {
  const db = getDatabase();
  const userRef = ref(db, 'users/');
  const queryRef = query(userRef, orderByChild('username'), equalTo(id))
  onValue(queryRef, (snapshot) => {
    snapshot.val();
  })
}

export const getUserInfoList = async () => {
  try {
    // == 전역적으로 헤더에 토큰을 담는 방법 == //
    // axios.defaults.headers.common['access-token'] = '토큰';
    const { data } = await authAxios.get("/userInfo");
    return data;
  } catch (err) {
    console.log("getUserInfo" + err);
  }
};

export const getUserInfo = async (id) => {
  try {
    // == 전역적으로 헤더에 토큰을 담는 방법 == //
    // axios.defaults.headers.common['access-token'] = '토큰';
    const { data } = await authAxios.get(`/userInfo/${id}`);
    console.log(data);
    return data;
  } catch (err) {
    console.log("getUserInfo" + err);
  }
};

