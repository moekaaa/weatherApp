<script setup></script>

<template>
  <button class="light-dark-mode-button">
    <v-icon color="white" icon="fa:fas fa-circle-half-stroke"></v-icon>
  </button>
</template>

<style>
.light-dark-mode-button {
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
