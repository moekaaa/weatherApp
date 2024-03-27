<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>vue practice</h1>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
main {
  border: white 1px solid;
  padding: 10px;
}
* {
  margin: 0;
  padding: 0;
  font-family: ComicSansMS;
  box-sizing: border-box;
}
#breadcrumbs ul li {
  display: inline;
  list-style-type: none;
}
#breadcrumbs {
  margin-left: 0px;
}
#breadcrumbs ul {
  padding-left: 0px;
}
#breadcrumbs ul .current {
  color: white;
}
#breadcrumbs ul li:before {
  content: ' > ';
}
#breadcrumbs ul li:first-child:before {
  content: none;
}
</style>
