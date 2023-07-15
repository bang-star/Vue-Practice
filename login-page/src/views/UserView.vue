<template>
  <div>
    User Item
  </div>
</template>

<script>
import { getUserInfo } from "@/service/signUp";

export default {
  name: "UserItem",
  created() {
    this.userInfo();
  },
  data() {
    return {
      user: {},
    }
  },
  methods: {
    userInfo() {
      const user = getUserInfo(this.$route.params.id);
      console.log(user);
    }
  }
};
</script>

<style lang="sass" scoped></style>