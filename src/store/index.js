import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = {
    state: {
        user: {
            token: null
        },
        title: '\u200E'
    },
    mutations: {
        // ['login']: (state, data) => {
        //     localStorage.token = data;
        //     state.token = data;
        // },
        // ['setActivityId']: (state, data) => {
        //     localStorage.activityId = data;
        //     state.activityId = data;
        // },
        // ['setRootPath']: (state, data) => {
        //     state.rootPath = data;
        // },
        // ['setTitle']: (state, data) => {
        //     state.title = data;
        // },

    },
    actions: {},
    getters: {
    }
};
export default new Vuex.Store(store);
