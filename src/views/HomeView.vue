<script setup>
import TodoList from '../components/TodoList/TodoList.vue';
import WeatherDetail from '../components/WeatherDisplay/WeatherDetail.vue';
import Schedule from '../components/calendar/Schedule.vue';
import date from '../components/date.vue';
import UserPanel from '../components/UserPanel.vue';
//エラーが出るのでコメントアウト
//import UserPanel from "../components/UserPanel.vue"
</script>

<template>
  <RouterLink v-bind:to="{ name: 'AppTop' }"> AppTop</RouterLink>
  <div class="home">
    <!-- <WeatherDetail />
        <TodoList />
        <Schedule /> -->
    <date />
    <UserPanel />
    <RouterLink v-bind:to="{ name: 'WeatherDetail' }"> ・weather</RouterLink>
    <br />
    <RouterLink v-bind:to="{ name: 'ToDo' }"> ・ToDo</RouterLink>
    <br />
    <RouterLink v-bind:to="{ name: 'Calendar' }"> ・Calendar</RouterLink>

    <br />
  </div>
</template>
