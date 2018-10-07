import Vue from 'vue';
import Router from 'vue-router';
// import store from '../store/index';

Vue.use(Router);

// const home = r => require.ensure([], () => r(require('../component/home/home')));
const home = require('../component/home/home').default;

const router = new Router({
    routes: [
        { path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            meta: {
                title: '定制酒标',
                requireAuth: true
            },
            component: home
        }
    ]
});

// 页面刷新时，重新赋值token
// if (window.localStorage.getItem('token')) {
//     // store.commit('login', window.localStorage.getItem('token'));
//     store.commit('login', null);
// }

router.beforeEach((to, from, next) => {
    // window.document.title = store.state.title;
    // if (to.matched.some(r => r.meta.requireAuth)) {
    //     if (store.state.token) {
    //         // console.log("token---------------------");
    //         next();
    //     } else {
    //         // console.log("no token---------------------");
    //         next({
    //             path: './home'
    //         })
    //     }
    // } else {
    //     // console.log("no oauth---------------------");
    //     next();
    // }
    next();
});

export default router;
