<script setup>
import TodoList from '../components/TodoList/TodoList.vue';
import WeatherDetail from '../components/WeatherDisplay/WeatherDetail.vue';
import UserPanel from "../components/UserPanel.vue"

</script>

<template>
    <div class="home">
        <WeatherDetail />
        <TodoList />
        <UserPanel />
    </div>
</template>