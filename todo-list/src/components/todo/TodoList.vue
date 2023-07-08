<template>
  <ul class="todo-list">
    <li class="todo-item"
        v-for="(item, index) in todoList"
        :key="index">
      <div class="todo-area">
        <input class="todo-item__status"
               type="checkbox"
               v-model="item.isChecked">
        <span v-if="!item.isUpdate"
              :class="{ isFinish: item.isChecked }">
              {{ item.name }}
        </span>
        <span v-else>
          <v-input v-model="item.name" />
        </span>
      </div>
      <div class="button-area">
        <font-awesome-icon v-if="!item.isUpdate" :icon="['fas', 'pen']" @click="item.isUpdate = true"  />
        <font-awesome-icon v-else :icon="['fas', 'check']" @click="item.isUpdate = false" />
        <font-awesome-icon :icon="['fass', 'trash']"  @click="deleteTodo(index)" />
      </div>
    </li>
  </ul>
</template>

<script>
import VInput from "@/components/common/VInput.vue";
export default {
  name: 'TodoList',
  components: {
    VInput
  },
  props: {
    todoList: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    deleteTodo(idx) {
      console.log(idx)
      this.$store.commit('deleteTodo', idx);
    },
  }
}
</script>

<style lang="scss" scoped>
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
    border-color: $primary;
  }
}

.todo-item__status {
  margin-right: 8px;
}

.isFinish {
  text-decoration: line-through;
}
</style>