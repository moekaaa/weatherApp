<script setup>
import HomeView from './HomeView.vue';
import MenuBar from '../components/menuBar/MenuBar.vue';
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
    <p>member管理はこちらから</p>
    <HomeView />
  </section>
</template>
