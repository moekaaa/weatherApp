<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useTodoDataStore } from '@/stores';
import { addTodoItem, getTodoItemList, removeTodoItem } from '@/modules/db';
import { getTodoItemCreatedDate } from '@/modules';
import { TODO } from '@/consts';

const taskInput = ref('');
const todoDataStore = useTodoDataStore();

onMounted(async () => {
  todoDataStore.todoList = await getTodoItemList();

  /*   //リストの絞り込み
  computed: {
      
  } */
});
//inputの文字数制限
const limitTextLength = () => {
  const maxLength = 20; // 文字数の上限
  //変数名わかりにくいから考え直す
  const rmnngChrctrs = document.getElementById('rmnngChrctrs');

  if (taskInput.value.length > maxLength) {
    console.log(taskInput.value);
    taskInput.value = taskInput.value.substr(0, maxLength);
    rmnngChrctrs?.classList.add('max');
  } else {
    rmnngChrctrs?.classList.remove('max');
  }
  rmnngChrctrs!.textContent = String(maxLength - taskInput.value.length);
};

const handleAddTodoItem = async () => {
  const data = {
    id: new Date().getTime().toString(),
    todoText: taskInput.value,
    isDone: false,
    createdAt: getTodoItemCreatedDate(),
  };
  const prevData = await getTodoItemList();
  const newData = [...prevData, data];
  todoDataStore.todoList = newData;
  await addTodoItem(newData);
};

const doChangeState = async () => {};

const handleRemoveTodoItem = async (id: string) => {
  const newData = await removeTodoItem(id);
  todoDataStore.todoList = newData;
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
    <div class="todo-add-form">
      <input
        class="todo-search-input"
        type="text"
        v-model="taskInput"
        @input="limitTextLength()"
        placeholder="タスクを追加してください" />
      <div>残りの文字数：<span id="rmnngChrctrs">20</span></div>
      <button class="todo-search-button" @click="handleAddTodoItem">
        追加
      </button>
    </div>

    <table class="todo-list-group">
      <thead>
        <tr>
          <th class="task">{{ TODO.task }}</th>
          <th class="status">{{ TODO.status }}</th>
          <th class="date">{{ TODO.date }}</th>
          <th class="button">-</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="task in todoDataStore.todoList" v-bind:key="task.id">
          <td>{{ task.todoText }}</td>
          <td class="button">
            <button @click="doChangeState">{{ task.isDone }}</button>
          </td>
          <td>{{ task.createdAt }}</td>
          <td class="button">
            <button @click="handleRemoveTodoItem(task.id)">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.container {
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  min-width: 100px;
  row-gap: 1.5em;
}
.todo-add-form {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
#remaining-characters.max {
  color: #dd3535;
}
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
  color: white;
  background-color: rgba(0, 0, 0, 0.692);
}
th,
th {
  padding: 0 8px;
  line-height: 40px;
}
thead th.id,
th.date {
  width: 50px;
}
thead th.status {
  width: 100px;
}
thead th.task {
  width: 150px;
}
thead th.button {
  width: 60px;
}
tbody td.button,
tbody td.state {
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
