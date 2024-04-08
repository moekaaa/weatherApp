import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import AppTop from '../views/AppTop.vue';
import HomeView from '../views/HomeView.vue';
import MemberList from '../views/member/MemberList.vue';
import MemberDetail from '../views/member/MemberDetail.vue';
import TodoList from '../components/TodoList/TodoList.vue';
import TaskSchedule from '../components/calendar/TaskSchedule.vue';
import WeatherDetail from '../components/WeatherDisplay/WeatherDetail.vue';

/*   //security向上の為に、getRoutesして画面遷移を切り分けます
export const RouteName = {
  AppTop: "AppTop",
  HomeView: "HomeView",
  MemberList: "MemberList",
  MemberDetail: "MemberDetail",
  TodoList: "TodoList",
  WeatherDetail: "WeatherDetail",
  TaskSchedule: "TaskSchedule",
}

//const type RouteName = (type of RouteName)[keyof typeof RouteName];

export const getRoutes =() => {
  const routes : Array<RouteRecordRow> =[

    {
      path: '/',
      name: RouteName.AppTop,
      component: AppTop,
      /* meta: { 
        //なんでerror出ないのかわからない↓
        layout: 'layoutTop'
         layoutOption: {
          fullHeight: true;
          noheader: true;
        },
        //next: RouteName.AppTop,
        //resetStoreBeforeEnter: 'store',

      },
    },
    {
      path: '/member/memberList',
      name: RouteName.MemberList,
      component: MemberList,
    },
    {
      path: '/member/memberDetail',
      name: RouteName.MemberDetail,
      component: MemberDetail,
    },
    {
      path: '/HomeView',
      name: RouteName.HomeView,
      component: HomeView,
    },
    {
      path: '/WeatherDisplay/WeatherDetail',
      name: 'WeatherDetail',
      component: RouteName.WeatherDetail,
    },
    {
      path: '/TodoList',
      name: RouteName.TodoList,
      component: TodoList,
    },
    {
      path: 'HomeView/TaskCalendar',
      name: RouteName.TaskSchedule,
      component: TaskSchedule,
    },
  ];

  return routes;      
};  

export const getRouteByName = (name: RouteName) => {
  return getRoutes().find((route) => route.name === name);
  
};

export const getRouteByPath = (path: Stromg) => {
  return getRoutes().find((route) => route.path === path);
} */

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
    path: '/TodoList',
    name: 'ToDo',
    component: () => import('../components/TodoList/TodoList.vue'),
  },
  {
    path: '/WeatherDisplay/WeatherDetail',
    name: 'Calendar',
    component: () => import('../components/appCalendar/TaskSchedule.vue'),
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
