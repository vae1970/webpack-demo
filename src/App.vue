<template>
    <div id="app">
        <transition>
            <keep-alive include='*' exclude="">
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data() {
            return {
            }
        },
        methods: {},
        mounted() {},
        beforeMount() {},
        beforeUpdate() {},
    };
</script>
<style>
</style>
