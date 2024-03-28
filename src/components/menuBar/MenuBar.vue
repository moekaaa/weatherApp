<script setup>
import DarkModeButton from './DarkModeButton.vue';
import LightModeButton from './LangModeButton.vue';
</script>

<template>
  <div class="menuButton">
    <DarkModeButton />
    <LightModeButton />
  </div>
</template>

<style>
.menuButton {
  display: flex;
  justify-content: space-between;
  margin-left: 0 auto;
  width: 120px;
}
</style>
