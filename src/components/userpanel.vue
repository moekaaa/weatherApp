//userに紐づく情報のパネル
<script setup>
import { onMounted } from 'vue';
import { useUserDataStore } from '../stores';
import { getCheerUpMessage, getTodayDate } from '../modules';

const userDataStore = useUserDataStore();
const cheerUpMessage = getCheerUpMessage();
</script>

<template>
  <div class="user-panel">
    <p class="cheer-up-message">{{ cheerUpMessage }}</p>
  </div>
</template>

<style>
.user-panel {
  height: 300px;
  width: 100%;
}
.cheer-up-message {
  color: white;
  text-align: center;
}
</style>
