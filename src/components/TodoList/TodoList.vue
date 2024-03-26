<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useTodoDataStore } from '../../stores';
import { addTodoItem, getTodoItem } from '../../modules/db';
import { TODO } from '../../types';

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
    <div class="add">
      <input
        type="text"
        v-model="taskInput"
        placeholder="タスクを追加してください" />
      <button @click="handleSubmit">追加</button>
    </div>

    <h1>ToDo List</h1>
    <ul class="todo-list-group">
      <template v-for="task in todoDataStore.todoList">
        <li class="todo-list-group-item">{{ task }}</li>
      </template>
    </ul>
  </div>
</template>

<style></style>
