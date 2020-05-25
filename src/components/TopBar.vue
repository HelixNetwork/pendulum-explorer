<template lang="html">
  <nav class="navbar fixed-top navbar-expand-lg shadow mb-5 top-bar">
    <div class="container-fluid">
          <div class="left">
        <router-link to="/">
          <img class='logo' src="../assets/logo.png" />
        </router-link>
      </div>
      <ul class="navbar-nav mr-auto">
      </ul>
      <span class="navbar-text">
        <ul class="navbar-nav mr-auto">
        <div class='search'>
          <search-field></search-field>
        </div> 
        </ul>
      </span>
    </div>
  </nav>
</template>

<script>
import SearchField from '@/components/SearchField.vue'

export default {
  components: {
    SearchField
  }
}
</script>

<style lang="stylus" scoped>
@import "../styles/media-mixin.styl"

.logo
  height 15%
  width 25%

.search
  margin-top 2%
  right 0

.search-field
  position absolute
  width 50%
  right 2%
  top 25%


.top-bar
  background #df9e02
  height 10%

</style>
