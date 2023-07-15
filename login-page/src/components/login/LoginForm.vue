<template>
  <form class="login-form"
        @submit="clickLogin">
    <label>
      ID
      <v-input class="login-form__text"
               v-model="id" />
    </label>
    <label>
      Password
      <v-input
        class="login-form__text"
        type="password"
        v-model="password"
      />
    </label>
    <v-button class="login-form__button"
              type="submit">
      로그인
    </v-button>
    <router-link to="/signUp">
      <v-button class="login-form__button"
                variant="outlined">
        회원가입
      </v-button>
    </router-link>
  </form>
</template>

<script>
import { ref } from "@vue/composition-api";
import VInput from "@/components/common/VInput.vue";
import VButton from "@/components/common/VButton.vue";
import { loginUser } from "@/service/login";

export default {
  name: "login-form",
  components: {
    VInput,
    VButton,
  },
  setup() {
    const id = ref("");
    const password = ref("");

    const clickLogin = (event) => {
      const user = {
        id: id.value,
        password: password.value
      };

      const result = loginUser(user);
      console.log(result);
      event.preventDefault();
    };

    return {
      id,
      password,
      clickLogin,
    }
  }
};
</script>

<style lang="scss" scoped>
.login-form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-flow: column;

  width: 100%;

  &__text,
  &__button,
  a, label {
    width: 100%;
  }
}
</style>
