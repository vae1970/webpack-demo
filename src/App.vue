<template>
  <div id="app">
    <transition>
      <keep-alive
        include="*"
        exclude=""
      >
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>
<script>
export default {
    name: 'App',
    data () {
        return {
        }
    },
    mounted () {},
    beforeMount () {},
    beforeUpdate () {},
    methods: {}
};
</script>
<style>
</style>
