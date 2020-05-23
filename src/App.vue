<template>
  <div id="app">
    <top-bar></top-bar><br>
    <router-view></router-view><br>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import BottomBar from '@/components/BottomBar.vue'

export default {
  components: {
    TopBar,
    BottomBar
  },
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 80px;
}
</style>
