<template>
  <div class="home">
    <h2>할 일 추가 앱</h2>
    <div>
      <input v-model="todo" type="text" placeholder="할 일을 적어주세요.">
      <button type="button" @click="addTodo">추가</button>
    </div>
    <ul>
      <li v-for="(item, index) in todoList" :key="index">
        <input type="checkbox" v-model="item.isChecked">
        <span v-if="!item.isUpdate" @click="item.isUpdate = true" :class="{ isFinish: item.isChecked }">{{ item.name }}</span>
        <span v-else>
          <input type="text" v-model="item.name" placeholder="할 일을 적어주세요.">
          <button type="button" @click="item.isUpdate = false">수정 완료</button>
        </span>
        <button type="button" @click="removeItem(index)">삭제</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      todo: '',
      todoList: [],
    }
  },
  methods: {
    addTodo() {
      this.todoList.push({
        name: this.todo,
        isUpdate: false,
        isChecked: false,
      });
      this.todo = '';
    },
    removeItem(idx) {
      this.todoList = this.todoList.filter((item, index) => index !== idx);
    },
  }
}
</script>

<style>
.isFinish {
  text-decoration: line-through;
}
</style>