<script setup>
import DarkModeButton from '../../components/menuBar/DarkModeButton.vue';
</script>

<template>
    
    <RouterLink v-bind:to='{name: "AppTop"}'>
    AppTop</RouterLink>
    
     <h1>memberList</h1>
  <div>
    <DarkModeButton />
  </div>

</template>