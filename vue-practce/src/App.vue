<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hello-world :msg="msg" @click-msg="clickMsg"/>
    <LifeCycle />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import LifeCycle from "@/components/LifeCycle.vue";

export default {
  name: 'App',
  components: {
    LifeCycle
  },
  data() {
    return {
      msg: 'Hello World',
      count: 0,
      list: ['item1', 'item2', 'item3', 'item4'],
      visibleInput: false,
    }
  },
  methods: {
    plusCount() {
      this.count += 1;
    },
    clickMsg(value) {
      this.msg = value;
    }
  },
  computed: {
    reverseMsg() {
      return this.msg.split('').reverse().join();
    }
  },
  watch: {
    count(newVal, oldVal) {
      console.log("Changed From " + oldVal + " to " + newVal);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
