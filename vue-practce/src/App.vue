<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      데이터 바인딩: {{ msg }}
    </div>
    <div>
      Computed: {{ reverseMsg }}
    </div>
    <div>
      Watch : {{ count }}
    </div>
    <div>
      <button @click="plusCount">카운트 증가</button>
    </div>
    <hello-world :msg="msg" @click-msg="clickMsg"/>
    <div>
      <button @click="visibleInput = visibleInput = true">인풋 보이게하기</button>
    </div>
    <input v-model="count" v-if="visibleInput">
    <ul>
      <li v-for="(item, idx) in list" :key="idx">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // },
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
