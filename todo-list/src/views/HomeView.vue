<template>
  <div class="home">
    <div class="container">
      <h2 class="title">할 일 추가 앱</h2>
      <div class="add-area">
        <v-input v-model="todo"
                 @enter="addTodo"
                 class="add-area__button"/>
        <v-button @click="addTodo" variant="outlined">추가</v-button>
      </div>
      <todo-list :todoList="todoList"/>
    </div>
  </div>
</template>

<script>
import VInput from "@/components/common/VInput.vue";
import VButton from "@/components/common/VButton.vue";
import TodoList from "@/components/todo/TodoList.vue";

export default {
  name: 'HomeView',
  components: {
    VInput,
    VButton,
    TodoList
  },
  data() {
    return {
      todo: '',

    }
  },
  methods: {
    addTodo() {
      const item = {
        name: this.todo,
        isUpdate: false,
        isChecked: false,
      };

      this.$store.commit('addTodo', item);

      this.todo = '';
    }
  },
  computed: {
    todoList() {
      return this.$store.state.todoList;
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  /* center sort */
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 500px;
  height: 500px;
  border: 1px solid black;
  padding: 24px;
}

.title {
  text-align: center;
}

.add-area {
  display: flex;
  align-items: center;
  justify-content: end;

  &__button {
    margin-right: 8px;
  }
}

</style>