<template>
  <div class="home">
    Home <br />
    로그인한 유저만 볼 수 있습니다.
    <v-button @click="clickInfo">유저 정보</v-button>
  </div>
</template>

<script>
import VButton from '@/components/common/VButton.vue';
import { getUserInfoList } from "@/service/signUp";

export default {
  name: "HomeView",
  components: {
    VButton
  },
  setup() {
    const clickInfo = () => {
      getUserInfoList();
    };

    return {
      clickInfo,
    }
  },
  // created() {
  //   console.log("Created Home");
  // },
  // methods: {
  //   clickInfo() {
  //     getUserInfoList();
  //   }
  // }
};
</script>
