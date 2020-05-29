<template lang="html">
  <nav class="navbar fixed-bottom justify-content-center bottom-bar">
   <a class="lt-item">© 2020 Helix Foundation</a>
</nav>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="stylus" scoped>
@import "../styles/media-mixin.styl"

.bottom-bar
  background #df9e02
  left 0;
  bottom 0;
  width 100%;
  height 5%

.lt-item{

    font-family: 'Fira Sans', sans-serif;
    color: #000;
    font-size: smaller;
}

</style>
