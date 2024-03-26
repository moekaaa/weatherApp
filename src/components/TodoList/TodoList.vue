<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useTodoDataStore } from '../../stores';
import { addTodoItem, getTodoItem } from '../../modules/db';
import { BACKGROUND_DARK_COLOR } from '../../consts/colors';

//幅が広い？ -> 追加処理を実行するのは、関数で処理した方がいいかも
//なんでエラー起きるのかわかりません。
const taskInput = ref('');
const todoDataStore = useTodoDataStore();

onMounted(async () => {
  todoDataStore.todoList = await getTodoItem();
});

const handleSubmit = async () => {
  const newData = await addTodoItem(taskInput.value);
  todoDataStore.todoList = newData;
};
</script>

<template>
  <div class="container">
    <h1>タスクの追加</h1>
    <form class="todo-add-form">
      <input
        class="todo-search-input"
        type="text"
        v-model="taskInput"
        placeholder="タスクを追加してください" />
      <button class="todo-search-button" @click="handleSubmit">追加</button>
    </form>

    <!-- TODO_Moeka: todoリストのアイテムをスタイリング -->
    <h1>ToDo List</h1>
    <ul class="todo-list-group">
      <template v-for="task in todoDataStore.todoList">
        <li class="todo-list-group-item">{{ task }}</li>
      </template>
    </ul>
  </div>
</template>

<style>
.todo-add-form {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
.todo-search-input {
  height: 30px;
  width: 200px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background-color: rgb(255, 255, 255);
  color: v-bind(BACKGROUND_DARK_COLOR);
  padding: 0.5rem 1rem;
}
.todo-search-button {
  height: 30px;
  width: 100px;
  background-color: rgb(255, 255, 255);
  color: #050023;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 50px;
}
</style>
