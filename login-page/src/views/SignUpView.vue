<template>
  <div class="sign-in-view">
    <h2>회원가입</h2>
    <sign-up-form class="form" />
  </div>
</template>

<script>
import SignUpForm from "@/components/signup/SignUpForm.vue";

export default {
  name: 'SignUpView',
  components: {
    SignUpForm
  }
}
</script>

<style lang="scss" scoped>
.sign-in-view {
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

  .form {
    width: 300px;
  }
}
</style>