<template lang="html">
  <div class="container">
    <legend>
      Bundle info
    </legend>
    <div class="info">
      <div class="name">
        Hash
      </div>
      <div class="value mono-space">
        <click-to-select :text='$route.params.hash'></click-to-select>
      </div>
    </div>
    <legend>
      Bundle transactions
    </legend>
    <div class="tx-io" v-if="txIOs">
      <div class="tx-item" v-for="txIO in txIOs" v-if="txIO.inputs.length > 0">
        <tx-io :viewingHash='null' :txIO="txIO"></tx-io>
      </div>
    </div>
    <div class="bundle-view" v-if="!txIOs">
      <h4> No transfers found for this bundle :-( </h4>
      </div>
  </div>
</template>

<script>
const txToIO = require('@/utils/tx-to-io.js').default
const _ = require('lodash')
import helixNode from "@/utils/helix-node";
import TxIo from '@/components/TXIo.vue'
import ClickToSelect from '@/components/ClickToSelect.vue'

export default {
  components: {
    TxIo,
    ClickToSelect
  },
  mounted() {
    this.initBundle()
  },
  methods: {
    initBundle() {
      var _this = this
      helixNode.helix.findTransactionObjects({
        bundles: [this.$route.params.hash]
      }, function(e, r) {
        (async() => {
          _this.txIOs = await txToIO(r)
        })()
      })
    }
  },
  data() {
    return {
      txIOs: null
    }
  }
}
</script>

<style lang="stylus" scoped>
.bundle-view
  display: flex;
  justify-content: space-evenly;
</style>
