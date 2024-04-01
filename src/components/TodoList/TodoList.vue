<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useTodoDataStore } from '../../stores';
import { addTodoItem, getTodoItem } from '../../modules/db';

const taskInput = ref('');
const todoDataStore = useTodoDataStore();

onMounted(async () => {
  todoDataStore.todoList = await getTodoItem();

  /*   //リストの絞り込み
  computed: {
      
  } */
});

const handleSubmit = async () => {
  const newData = await addTodoItem(taskInput.value);
  todoDataStore.todoList = newData;
};

const doChangeState = async (task) => {

};

const doRemove = async (task) => {

};



/* watch: {
  //ウォッチャー使って値の変更を監視できるように実装する
  // オプションを使う場合はオブジェクト形式にする
 
} */

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
  </div>

  <table  class="todo-list-group">
    <thead>
      <tr>
        <th class="id">ID</th>
        <th class="comment">コメント</th>
        <th class="state">状態</th>
        <th class="date">日付</th>
        <th class="button">-</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="task in todoDataStore.todoList" v-bind:key="task.id">
        <td>{{ task.id }}</td>
        <td>{{ task.todoText }}</td>
        <td class="button">
        <button @click="doChangeState(task)">{{ task.isDone }}</button>
        </td>
        <td>{{  task.createdAt }}</td>
        <td><button @click.ctrl="doRemove(task)">
          削除
        </button></td>
        
      </tr>
    </tbody>
  </table>

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
.todo-list-group {
  width: 100%;
  border-collapse: collapse;
}
thead th {
  border-bottom: 2px solid black; /*#d31c4a */
  color: black;
}
th,
th {

  padding: 0 8px;
  line-height: 40px;
}
thead th.id, th.date{
  width: 50px;
}
thead th.state {
  width: 100px;
}
thead th.comment {
  width: 150px;
}
thead th.button {
  width: 60px;
}
tbody td.button, tbody td.state {
  text-align: center;
}
tbody tr td,
tbody tr th {
  border-bottom: 1px solid #ccc;
  transition: all 0.4s;
}
tbody tr button {
  border: none;
  border-radius: 20px;
  line-height: 24px;
  padding: 0 8px;
  background: navy;
  color: #fff;
  cursor: pointer;
}
</style>
