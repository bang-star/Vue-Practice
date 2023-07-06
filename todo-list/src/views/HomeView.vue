<template>
  <div class="home">
    <div class="container">
      <h2 class="title">할 일 추가 앱</h2>
      <div class="add-area">
        <v-input v-model="todo" />
        <v-button @click="addTodo" variant="outlined">추가</v-button>
      </div>
      <ul class="todo-list">
        <li class="todo-item" v-for="(item, index) in todoList" :key="index">
          <div class="todo-area">
            <input class="todo-item__status" type="checkbox" v-model="item.isChecked">
            <span v-if="!item.isUpdate" :class="{ isFinish: item.isChecked }">
              {{ item.name }}
            </span>
            <span v-else>
              <input class="todo-item__text" type="text" v-model="item.name" placeholder="할 일을 적어주세요.">
            </span>
          </div>
          <div class="button-area">
            <font-awesome-icon v-if="!item.isUpdate" :icon="['fas', 'pen']" @click="item.isUpdate = true"  />
            <font-awesome-icon v-else :icon="['fas', 'check']" @click="item.isUpdate = false" />
            <font-awesome-icon :icon="['fass', 'trash']"  @click="removeItem(index)" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VInput from "@/components/common/VInput.vue";
import VButton from "@/components/common/VButton.vue";

export default {
  name: 'HomeView',
  components: {
    VInput,
    VButton,
  },
  data() {
    return {
      todo: '',
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
}



.todo-list {
  width: 100%;
}

.todo-item {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid gray;
  padding: 8px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.button-area {
  svg {
    cursor: pointer;
    color: gray;
    margin-left: 8px;
  }
}

.todo-item__text {
  width: 150px;
  height: 30px;

  outline: none;
  border: 1px solid rgba(0, 0, 0, .15);
  padding-left: 8px;
  margin-right: 8px;

  &:hover {
    border-color: rgba(0, 0, 0, .54);
  }

  &:focus {
    border-color: #00c4c4;
  }
}

.todo-item__status {
  margin-right: 8px;
}

.isFinish {
  text-decoration: line-through;
}
</style>