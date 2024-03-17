
<script setup lang="ts">
import { ref } from "vue";

    const appdata = {
        data(){
            return{
                //inputは最初は空
                input: "",
                //listも最初は空
                todo_list: []
            }
        },
        methods: {
            add_todo(){
                //下の分でtodo_listに値を追加してく
                this.todo_list.push(
                    this.input
                )
                //ボタンを押したら入力した値が空になる
                this.input = ""             
               
            }
        }
    }
</script>

<template>
  <div class="container">
    <h1>タスクの追加</h1>
    <div class="add">
      <input type="text" v-model="task" placeholder="enter your task" />
      <button @click="add_todo">追加</button>
    </div>

    <h1>ToDo List</h1>
    <ul class="Lest-group">
        <template v-for="task in todo_list">
            <li class="list-group-item">{{ task }}</li>
        </template>
    </ul>
  </div>
</template>

<style>
</style>