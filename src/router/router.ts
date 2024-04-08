/* import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { RouteName,
         getRoutes,
         getRouteByName,
         getRouteByPath } './router'
import AppTop from '../views/AppTop.vue';

const router = createRouter({
    history: createWebHistory(/),
    routes: getRoutes(),
  });


declare module "vue-router" {
    const getRoutes = getRoutes();


} 

interface RouteMeta{
  layout?
  | layoutTop
  layoutOption?{
    
  }
}*/