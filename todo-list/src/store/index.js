import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [
      {
        name: '축구',
        isUpdate: false,
        isChecked: false
      },
      {
        name: '농구',
        isUpdate: false,
        isChecked: false
      },
      {
        name: '테니스',
        isUpdate: false,
        isChecked: false
      }
    ],
  },
  getters: {
  },
  mutations: {
    addTodo(context, value) {
      context.todoList.push(value);
    },
    deleteTodo(context, value) {
      context.todoList = context.todoList.filter(
        (item, index) => index !== value
      );
    }
  },
  actions: {  // 비동기 API를 사용할 때
  },
  modules: {
  }
})
