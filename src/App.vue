<script setup lang="ts">
//import { RouterView } from "vue-router";
//import { MEMBER } from "/types";

//いったん今はDBつながないで表示したい
// const memberList = new Map<number, MEMBER>();
// memberList.set(1, {
//   id: 1,
//   name: "Moeka",
//   note: "student"
// });
// memberList.set(2, {
//   id: 2,
//   name: "Takuya",
//   note: "teacher"
// });
// provide("memberList", reactive(memberList));
</script>

<template>
  <header>
    <h1>vue practice</h1>
  </header>
  <main>
    <!-- routerを使ってトップ画面表示させたい、、 -->
    <RouterView />
    <!-- <HomeView /> -->
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
body {
  background: #050023;
  color: white;
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
