<template lang="html">
  <span :title=' listUnit(value)'>{{ convertToUnits(value) }}</span>
</template>

<script>
import { convertUnits } from "@helixnetwork/unit-converter";
import helixNode from "@/utils/helix-node";

export default {
  props: {
    value: {
      type: Number,
      required: true
    },
    precision:{
      type:Boolean,
      required:false
    }
  },
  methods: {
    pickUnit(value) {
      var values = {
        '1': 'h',
        '1000': 'Kh',
        '1000000': 'Mh',
        '1000000000': 'Gh',
        '1000000000000': 'Th',
        '1000000000000000': 'Ph'
      }
      value = Math.abs(value)
      var closestAmount = Math.floor((value + "").length / 3) * 3
      var key = "1".padEnd(closestAmount + 1, "0")
      if(typeof values[key] !== undefined) {
        return values[key]
      }
      return 'Ph'
    },
    listUnit(value)
    {
      var unit = this.pickUnit(value)
      var values = {
        'h' : 'h',
        'Kh' : "Kilo h",
        "Mh" : "Mega h",
        "Gh" : "Giga h",
        "Th" : "Tera h",
        "Ph" : "Peta h"
      }
      return `${convertUnits(value, 'h', unit)}` + " " + values[unit];
    },
    convertToUnits(value) {
      var unit = this.pickUnit(value)
      if( this.precision === false)
      return `${convertUnits(value, 'h', unit)} ${unit}`
      else
      return `${Number(convertUnits(value, 'h', unit)).toFixed(2)}${unit}`
    }
  }
}
</script>

<style lang="css">
</style>
