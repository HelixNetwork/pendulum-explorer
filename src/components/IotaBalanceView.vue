<template lang="html">
  <span :title=' listUnit(value)'>{{ convertToUnits(value) }}</span>
</template>

<script>
require('@/lib/iota')
const helixNode = require("@/utils/iota-node")

export default {
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  methods: {
    pickUnit(value) {
      var values = {
        '1': 'i',
        '1000': 'Ki',
        '1000000': 'Mi',
        '1000000000': 'Gi',
        '1000000000000': 'Ti',
        '1000000000000000': 'Pi'
      }
      value = Math.abs(value)
      var closestAmount = Math.floor((value + "").length / 3) * 3
      var key = "1".padEnd(closestAmount + 1, "0")
      if(typeof values[key] !== undefined) {
        return values[key]
      }
      return 'Pi'
    },
    listUnit(value)
    {
      var unit = this.pickUnit(value)
      var values = {
        'i' : 'HLX',
        'Ki' : "Kilo HLX",
        "Mi" : "Mega HLX",
        "Gi" : "Giga HLX",
        "Ti" : "Tera HLX",
        "Pi" : "Peta HLX"
      }
      return `${helixNode.iota.utils.convertUnits(value, 'i', unit)}` + " " + values[unit];
    },
    convertToUnits(value) {
      var unit = this.pickUnit(value)
      return `${helixNode.iota.utils.convertUnits(value, 'i', unit)} ${unit}`
    }
  }
}
</script>

<style lang="css">
</style>
