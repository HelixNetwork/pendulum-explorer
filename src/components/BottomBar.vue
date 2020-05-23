<template lang="html">
    <div class='bottom-bar'>
    <div class='container'>
      <div class="left">
      </div>
      <div class='center'>
        <div class='search'>
                <div class="madeby">
        Tangle Explorer by Peter Willemsen and <a href="https://github.com/peterwilli/IOTA-tangle-explorer#contributors" target="_blank">fellow contributors</a>
        <br  />
        <a target="_blank" href="https://github.com/peterwilli/IOTA-tangle-explorer">Source Code</a> |
        <router-link :to="{ name: 'Address', params: { hash: 'LAIIZHTEPOTNLZPAEFFZZGPSC9LQZVLDWZAASJZYYIIWRNWJSPXIGZTRESAAMM9QFTVFY9NTLRIWSMHM9CAGASCSYZ' }}">Developer Donation</router-link>
        <br />
        Made with <i class="fa fa-heart" style="color:#f45353"></i> in The Netherlands
      </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="stylus" scoped>
@import "../styles/media-mixin.styl"

.center
  padding 1%
  text-align center

.left
  float left
  width 100px

.bottom-bar
  bottom 0
  left 0
  right 0
  height 12%
  position: fixed
  width: 100%
  background #df9e02
  z-index: 2

</style>
