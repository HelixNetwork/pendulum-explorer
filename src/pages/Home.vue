<template>
  <div class="container pt-4">
        <div class="row justify-content-center">
        <div class="col-sm-12 col-md-12 col-lg-12 text-left">
         <p class="blue-color">EXPLORE</p>
        <search-field></search-field>
        </div>
      </div>
    <node-info></node-info>
  </div>
</template>

<script>
import NodeInfo from '@/components/NodeInfo.vue'
import SearchField from '@/components/SearchField.vue'
import helixNode from "@/utils/helix-node";

export default {
  components: {
    NodeInfo,
    SearchField
  },
  beforeDestroy() {
    helixNode.unsubscribe('node-info')
  },
  mounted() {
    helixNode.subscribe('node-info')
  }
};
</script>

<style scoped lang="stylus">
.blue-color{
color:#1e7fde;
}

</style>
