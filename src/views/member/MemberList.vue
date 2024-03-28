<script setup>
import MenuBar from '../../components/menuBar/MenuBar.vue';
//import { useMemberDataStore } from '../../modules/db';
//import { addMember, getMember } from '../../modules/db';
</script>

<template>
    
    <RouterLink v-bind:to='{name: "AppTop"}'>
    AppTop</RouterLink>

  <div>
    <MenuBar />
  </div>

</template>