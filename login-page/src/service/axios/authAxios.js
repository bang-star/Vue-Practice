import Vue from "vue";
import axios from "./axios";
// import store from "@/store";
import { extendLoginTime } from "@/service/login";
const authAxios = axios.create();

// 요청 인터셉터 추가하기
authAxios.interceptors.request.use(
  function (config) {
    // 요청이 전달되기 전에 작업 수행
    // 로그 찍기
    // config.headers["access-token"] = store.state.accessToken;
    // config.headers["refresh-token"] = store.state.refreshToken;

    const accessToken = Vue.$cookies.get('accessToken');
    const refreshToken = Vue.$cookies.get('refreshToken');
    config.headers["access-token"] = accessToken;
    config.headers["refresh-token"] = refreshToken;

    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    // ...
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가하기
authAxios.interceptors.response.use(
  function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  async function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    const errorAPI = error.config;
    const refreshToken = Vue.$cookies.get('refreshToken');

    if (error.response.status === 401 && errorAPI.retry === undefined && refreshToken) {
      errorAPI.retry = true;
      await extendLoginTime();
      return await authAxios(errorAPI);
    }
    return Promise.reject(error);
  }
);

export default authAxios;