<template>
  <div>
    Users
    <ul>
      <li v-for="user in userList" :key="user.id">
        <router-link :to="`/users/${user.id}`">
          {{ user.id }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {ref} from "@vue/composition-api";
import { getUserInfoList } from "@/service/signUp";

export default {
  name: "UsersView",
  setup() {
    const userList = ref([]);

    const userInfo = async () => {
      const data = await getUserInfoList();
      this.userList = data.userInfo;
    };

    return {
      userList,
      userInfo
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
