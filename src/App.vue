<template>
<div>
    <top-bar></top-bar><br><br>
    <div class="main">
    <router-view></router-view>
    </div><br>
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
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,500;1,700&display=swap');
@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
.main{
  height: 100%;
  width:100%;
  padding:5% 0%;

}
@media only screen and (device-width: 375px) and (device-height: 812px) {
.main{
  height: 100%;
  width:100%;
  padding:10% 0%;
}
}
@media only screen and (device-width: 414px) and (device-height: 846px) {
.main{
  height: 100%;
  width:100%;
  padding:10% 0%;
}
}
@media only screen and (device-width: 420px) and (device-height: 720px) {
.main{
  height: 100%;
  width:100%;
  padding:10% 0%;
}
}
@media only screen and (device-width: 360px) and (device-height: 760px) {
.main{
  height: 100%;
  width:100%;
  padding:10% 0%;
}
}
@media only screen and (max-width: 310px) {
  .qr img {
    width: 80vw;
    margin: 0 auto;
  }
}
</style>
