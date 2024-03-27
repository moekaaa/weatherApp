<script setup>
import TodoList from '../components/TodoList/TodoList.vue';
import WeatherDetail from '../components/WeatherDisplay/WeatherDetail.vue';
import Schedule from '../components/Calendar/Schedule.vue';
import date from '../components/date.vue';
import UserPanel from '../components/UserPanel.vue';
//エラーが出るのでコメントアウト
//import UserPanel from "../components/UserPanel.vue"

</script>

<template>
    <div class="home">
        <WeatherDetail />
        <TodoList />
        <Schedule />
        <date />
         <UserPanel />
    </div>
</template>