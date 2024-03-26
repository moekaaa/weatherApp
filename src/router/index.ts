import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import AppTop from '../views/AppTop.vue'

import HomeView from '../views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'AppTop',
    component: AppTop
  },  
];

const router = createRouter({
  history: createWebHistory("/"),
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