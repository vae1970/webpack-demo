import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store';

// const App = require('./App').default;

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
