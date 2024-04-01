import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import AppTop from '../views/AppTop.vue';

import HomeView from '../views/HomeView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'AppTop',
    component: AppTop,
  },
  {
    path: '/member/memberList',
    name: 'MemberList',
    component: () => import('../views/member/MemberList.vue'),
  },
  {
    path: '/member/memberDetail',
    name: 'MemberDetail',
    component: () => import('../views/member/MemberDetail.vue'),
  },
  {
    path: '/HomeView',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/WeatherDisplay/WeatherDetail',
    name: 'WeatherDetail',
    component: () => import('../components/WeatherDisplay/WeatherDetail.vue'),
  },
  {
    path: '/TodoList/TodoList',
    name: 'ToDo',
    component: () => import('../components/TodoList/TodoList.vue'),
  },
  {
    path: '/WeatherDisplay/WeatherDetail',
    name: 'Calendar',
    component: () => import('../components/Calendar/TaskSchedule.vue'),
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});
export default router;

//ルーティング登録方法
// const routeSettings: RouteRecordRaw[] = [
//   {
//     path: "パス文字列",
//     name: "ルーティング名"
//     component: 表示させる画面用コンポーネント
//   },
//   :
//   :
// ];
