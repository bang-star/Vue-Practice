<template>
  <form class="sign-up-form" @submit="clickSignUp(user.id, user.password, $event)">
    <label>
      ID
      <v-input v-model="user.id" class="sign-up-form__text" />
    </label>
    <label>
      Password
      <v-input v-model="user.password" type="password" class="sign-up-form__text" />
    </label>
    <label>
      Confirm Password
      <v-input
        v-model="user.confirmPassword"
        type="password"
        class="sign-up-form__text"
        @blur="checkPassword"
        :is-error="user.isError"
        error-msg="비밀번호가 일치하지 않습니다."
      />
    </label>
    <v-button type="submit" class="sign-up-form__button"> 회원가입 </v-button>
  </form>
</template>

<script>
import { reactive } from "@vue/composition-api";
import VInput from "@/components/common/VInput.vue";
import VButton from "@/components/common/VButton.vue";
import { signUpInFirebase, getUserInFirebase } from "@/service/signUp";

export default {
  name: "SignUpForm",
  components: {
    VInput,
    VButton,
  },
  setup() {
    const user = reactive({
      id: '',
      password: '',
      confirmPassword: '',
      isError: false,
    });

    const checkPassword = () => {
      user.isError = user.password !== user.confirmPassword;
    };

    const clickSignUp = (id, password, event) => {
      event.preventDefault();
      if (user.isError) return;
      // signUp({ id, password });
      signUpInFirebase(id, password);
    };

    getUserInFirebase(id);

    return {
      user,
      checkPassword,
      clickSignUp,
    };
  },
  // data() {
  //   return {
  //     id: '',
  //     password: '',
  //     confirmPassword: '',
  //     isError: false,
  //   }
  // },
  // methods: {
  //   checkPassword() {
  //     this.isError = this.password !== this.confirmPassword;
  //   },
  //   clickSignUp(id, password, event) {
  //     event.preventDefault();
  //
  //     if (this.isError) return;
  //
  //     const user = {
  //       id: id,
  //       password: password,
  //     };
  //     signUp(user);
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.sign-up-form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-flow: column;

  width: 100%;

  &__text,
  &__button,
  a,
  label {
    width: 100%;
  }
}
</style>