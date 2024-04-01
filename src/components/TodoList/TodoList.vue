<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useTodoDataStore } from '../../stores';
import { addTodoItem, getTodoItem } from '../../modules/db';

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
  <div class="router">
    <RouterLink v-bind:to="{ name: 'AppTop' }"> AppTop</RouterLink>
    >
    <RouterLink v-bind:to="{ name: 'HomeView' }"> HomeView</RouterLink>
  </div>

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
    <!-- for文の入れ子で表示できる？
    たくやくんへ
    無理せずで大丈夫だからね！私がたくさん機能を増やしちゃっているのに全然進められなくてごめん！
    今日todoのスタイリングは終わらせるのと、出来たらCalendarの形作ろうとtryはして帰ります！（笑）
    今日も無理せず頑張ろうね！！　(=_=)ｚｚｚ -->
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
  color: var(--dark-mode-color);
  padding: 0.5rem 1rem;
}
.todo-search-button {
  height: 30px;
  width: 100px;
  background-color: rgb(255, 255, 255);
  color: var(--dark-mode-color);
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 50px;
}
</style>
