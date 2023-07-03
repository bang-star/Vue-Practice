<template>
  <div class="hello">
    라이프사이클 입니다.
    <div>{{ count }}</div>
    <button @click="changeCnt" id="button">Click Me!</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      count:  0
    }
  },
  methods: {
    changeCnt() {
      this.count += 1;
    }
  },
  beforeCreate() {
    console.log('[beforeCreate] ' + this.count);
  },
  created() {
    console.log('[created] ' + this.count);
  },
  beforeMount() {
    console.log('[beforeMount] ', document.getElementById('button'));
  },
  mounted() {
    console.log('[mounted] ', document.getElementById('button'));
  },
  beforeDestroy() {
    console.log('[beforeDestroy] ');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
