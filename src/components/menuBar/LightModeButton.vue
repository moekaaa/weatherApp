<script setup></script>

<template>
  <button class="dark-light-dark-mode-button">
    <v-icon color="white" icon="fa-solid fa-circle"></v-icon>
  </button>
</template>

<style>
.dark-light-mode-button {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}
</style>
