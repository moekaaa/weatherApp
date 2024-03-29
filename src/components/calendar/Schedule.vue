<script>
import { ScheduleComponent } from '@syncfusion/ej2-vue-schedule';
//syncfusion/ej2-vue-schedule　↓ これで作ってみようと思っています
//https://takumi-oda.com/blog/2020/06/24/post-1405/
//無料でできなかったらやめる
//勉強にならないかもしれない
import { useDate } from 'vuetify';
</script>

<template>
  <RouterLink v-bind:to="{ name: 'AppTop' }"> AppTop</RouterLink>
  <!-- Veautifyのカレンダーを利用 -->
  <!-- スタイルはカスタマイズできそう -->
  <!-- 勉強になりそうだったら、ej2-vue-schedule使ってもいいかも？ -->
  <!-- ただ、 ej2-vue-scheduleというライブラリを使ってる人が少ないから、そこまでしっかりしてるものでもない気がする -->
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="today"
          :events="events"
          color="primary"
          type="month"></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<style></style>
