<template>
  <div class="container pt-4">
        <div class="row justify-content-center">
        <div class="col-sm-12 col-md-12 col-lg-12">
         <p class="blue-color">EXPLORE</p> 
        <search-field></search-field>
        <!-- <p> <i class="fa fa-info-circle"></i>  Enter an address, transaction hash,bundle or tag</p>  -->
        </div>
      </div>
    <node-info></node-info>
  </div>
</template>

<script>
import NodeInfo from '@/components/NodeInfo.vue'
import SearchField from '@/components/SearchField.vue'

require('@/lib/iota')
var iotaNode = require("@/utils/iota-node")

export default {
  components: {
    NodeInfo,
    SearchField
  },
  beforeDestroy() {
    iotaNode.unsubscribe('node-info')
  },
  mounted() {
    iotaNode.subscribe('node-info')
  }
};
</script>

<style scoped lang="stylus">
.blue-color{
color:#1e7fde;
}

</style>
