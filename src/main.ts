import Vue from 'vue';
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import { registerLicense } from '@syncfusion/ej2-base';
import veautify from './lib/veautify';

import './style.css';

registerLicense('');

const app = createApp(App);
app.use(router);
app.use(veautify);
app.use(createPinia());

app.mount('#app');
