<template lang="html">
  <div class="container">
    <div v-if="isValid === true">
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
    <div class="bundle-view" v-if="txIOs === null">
      <h4> No transfers found for this bundle :-( </h4>
      </div>
      </div>
      <div  v-else-if="isValid === false">
 <legend>
      Results
    </legend>
    <div class="absence error">
      Invalid search query, please check your search input :(
    </div>
  </div>
  </div>
</template>

<script>
const txToIO = require('@/utils/tx-to-io.js').default
const _ = require('lodash')
import helixNode from "@/utils/helix-node";
import TxIo from '@/components/TXIo.vue'
import ClickToSelect from '@/components/ClickToSelect.vue'
import { isTxHexOfExactLength } from "@helixnetwork/validators";

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
      if (isTxHexOfExactLength(this.$route.params.hash, 64)){
      helixNode.helix.findTransactionObjects({
        bundles: [this.$route.params.hash]
      }, function(e, r) {
        if(!e && r.length != 0 )
        (async() => {
          _this.txIOs = await txToIO(r)
        })()
      })
    } else{
      this.isValid = false;
    }
  }
  },
  data() {
    return {
      txIOs: null,
      isValid:true
    }
  }
}
</script>

<style lang="stylus" scoped>
.bundle-view
  display: flex;
  justify-content: space-evenly;
</style>
