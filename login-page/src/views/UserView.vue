<template>
  <div>
    User Item
  </div>
</template>

<script>
import {ref} from "@vue/composition-api";
import { getUserInfo } from "@/service/signUp";
import {useRoute} from "vue-router";

export default {
  name: "UserItem",
  created() {
    this.userInfo();
  },
  setup() {
    const user = ref({});
    const route = useRoute();

    const userInfo = () => {
      getUserInfo(route.params.id);
    };

    return {
      user,
      userInfo
    }

  }
};
</script>

<style lang="sass" scoped></style>