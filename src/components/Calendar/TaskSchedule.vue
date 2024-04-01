<script>
import { ScheduleComponent } from '@syncfusion/ej2-vue-schedule'
//syncfusion/ej2-vue-schedule　↓ これで作ってみようと思っています
//https://takumi-oda.com/blog/2020/06/24/post-1405/
//無料でできなかったらやめる
//勉強にならないかもしれない
</script>

<template>
     <div class ="router">
  <RouterLink v-bind:to="{ name: 'AppTop' }"> AppTop</RouterLink>
  > 
  <RouterLink v-bind:to="{ name: 'HomeView' }"> HomeView</RouterLink></div>
  

</template>

<style>

</style>