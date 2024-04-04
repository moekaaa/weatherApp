<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
<<<<<<< HEAD
import { useTodoDataStore } from '../../stores';
import { addTodoItem, getTodoItem } from '../../modules/db';
=======
import { useTodoDataStore } from '@/stores';
import { addTodoItem, getTodoItemList, removeTodoItem } from '@/modules/db';
import { getTodoItemCreatedDate } from '@/modules';
>>>>>>> ea4bf7e982fb662775d8789ee0bdb29a6a4c572d

const taskInput = ref('');
const todoDataStore = useTodoDataStore();

onMounted(async () => {
<<<<<<< HEAD
  todoDataStore.todoList = await getTodoItem();
=======
  todoDataStore.todoList = await getTodoItemList();
>>>>>>> ea4bf7e982fb662775d8789ee0bdb29a6a4c572d

  /*   //リストの絞り込み
  computed: {
      
  } */
});
//inputの文字数制限
const limitTextLength = () => {
<<<<<<< HEAD
  let maxLength = 10; // 文字数の上限
  //変数名わかりにくいから考え直す
  let rmnngChrctrs = document.getElementById('rmnngChrctrs');
  
=======
  const maxLength = 20; // 文字数の上限
  //変数名わかりにくいから考え直す
  const rmnngChrctrs = document.getElementById('rmnngChrctrs');

>>>>>>> ea4bf7e982fb662775d8789ee0bdb29a6a4c572d
  if (taskInput.value.length > maxLength) {
    console.log(taskInput.value);
    taskInput.value = taskInput.value.substr(0, maxLength);
    rmnngChrctrs.classList.add('max');
  } else {
    rmnngChrctrs.classList.remove('max');
  }

  rmnngChrctrs.textContent = maxLength - taskInput.value.length;
};

<<<<<<< HEAD
const handleSubmit = async () => {
  const newData = await addTodoItem(taskInput.value);
  todoDataStore.todoList = newData;
};

const doChangeState = async (task) => {

};

const doRemove = async (task) => {

};



=======
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

const doChangeState = async (task) => {};

const handleRemoveTodoItem = async (id: string) => {
  const newData = await removeTodoItem(id);
  todoDataStore.todoList = newData;
};

>>>>>>> ea4bf7e982fb662775d8789ee0bdb29a6a4c572d
/* watch: {
  //ウォッチャー使って値の変更を監視できるように実装する
  // オプションを使う場合はオブジェクト形式にする
 
} */
<<<<<<< HEAD

=======
>>>>>>> ea4bf7e982fb662775d8789ee0bdb29a6a4c572d
</script>

<template>
  <div class="router">
    <RouterLink v-bind:to="{ name: 'AppTop' }"> AppTop</RouterLink>
    >
    <RouterLink v-bind:to="{ name: 'HomeView' }"> HomeView</RouterLink>
  </div>

<<<<<<< HEAD
    <div class="container">
      <h1>タスクの追加</h1>
      <form class="todo-add-form">
        <input
          class="todo-search-input"
          type="text"
          v-model="taskInput"
          @input="limitTextLength();"
          placeholder="タスクを追加してください" />
          <div>残りの文字数：<span 
            id="rmnngChrctrs"
            >10</span></div>
        <button class="todo-search-button" @click="handleSubmit">追加</button>
      </form>
  

      <table  class="todo-list-group">
        <thead>
          <tr>
            <th class="comment">タスク</th>
            <th class="state">状態</th>
            <th class="date">追加日</th>
            <th class="button">-</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="task in todoDataStore.todoList" v-bind:key="task.id">
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
=======
  <div class="container">
    <h1>タスクの追加</h1>
    <form class="todo-add-form">
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
    </form>

    <table class="todo-list-group">
      <thead>
        <tr>
          <th class="comment">タスク</th>
          <th class="state">状態</th>
          <th class="date">追加日</th>
          <th class="button">-</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="task in todoDataStore.todoList" v-bind:key="task.id">
          <td>{{ task.todoText }}</td>
          <td class="button">
            <button @click="doChangeState(task)">{{ task.isDone }}</button>
          </td>
          <td>{{ task.createdAt }}</td>
          <td>
            <button @click.ctrl="handleRemoveTodoItem(task.id)">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
>>>>>>> ea4bf7e982fb662775d8789ee0bdb29a6a4c572d
  </div>
</template>

<style>
<<<<<<< HEAD
.container{
=======
.container {
>>>>>>> ea4bf7e982fb662775d8789ee0bdb29a6a4c572d
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
<<<<<<< HEAD
  min-width :100px;
=======
  min-width: 100px;
>>>>>>> ea4bf7e982fb662775d8789ee0bdb29a6a4c572d
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
<<<<<<< HEAD

  padding: 0 8px;
  line-height: 40px;
}
thead th.id, th.date{
=======
  padding: 0 8px;
  line-height: 40px;
}
thead th.id,
th.date {
>>>>>>> ea4bf7e982fb662775d8789ee0bdb29a6a4c572d
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
<<<<<<< HEAD
tbody td.button, tbody td.state {
=======
tbody td.button,
tbody td.state {
>>>>>>> ea4bf7e982fb662775d8789ee0bdb29a6a4c572d
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
