<script setup>
import TodoList from '../components/TodoList/TodoList.vue';
import WeatherDetail from '../components/WeatherDisplay/WeatherDetail.vue';
import Schedule from '../components/calendar/TaskSchedule.vue';
import date from '../components/date.vue';
import UserPanel from '../components/UserPanel.vue';
</script>

<template>
  <RouterLink v-bind:to="{ name: 'AppTop' }"> AppTop</RouterLink>
  <div class="page-container">
    <!-- <WeatherDetail />
        <TodoList />
        <Schedule /> -->
    <date />
  
    <UserPanel />
    <div class="router">
    <RouterLink v-bind:to="{ name: 'WeatherDetail' }"> ・weather</RouterLink>
    <br />
    <RouterLink v-bind:to="{ name: 'ToDo' }"> ・ToDo</RouterLink>
    <br />
    <RouterLink v-bind:to="{ name: 'Calendar' }"> ・Calendar</RouterLink>
  </div>
    <br />
  </div>
</template>

<style>
.page-container{
  font-size: 16px; 
}
.router{
  font-size: 24px;
  color: black;/* 使えない?? */


}
</style>
