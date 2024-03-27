<script setup>
import HomeView from './HomeView.vue';
import MenuBar from '../components/menuBar/MenuBar.vue';
import { RouterLink } from 'vue-router';

</script>

<template>
  <h1>AppTop</h1>
  
  <nav id="breadcrumbs">
    <ul>
      <li>TOP</li>
    </ul>
  </nav>
  <MenuBar />
  <section>
    <RouterLink v-bind:to='{name: "MemberList"}'>
    member管理はこちらから</RouterLink>
    <br>
    <RouterLink  v-bind:to='{name: "HomeView"}'>
      Home</RouterLink>



  </section>
</template>
