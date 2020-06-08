<template>
  <div class="container pt-4">
        <div class="row justify-content-center">
        <div class="col-sm-12 col-md-12 col-lg-12 text-left">
         <p class="blue-color">TOP {{addressList.addressList.length}} RICH ADDRESS LIST</p>

  <table class="table mb-5">
      <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Address</th>
            <th scope="col">Value</th>
            <th scope="col">Price (USD)</th>
         </tr>
      </thead>
      <tbody>
        <tr v-for="(address , index) in addressList.addressList">
          <td>#{{ index+1 }}</td>
          <td><router-link :to="{ name: 'Address', params: { hash: address.address }}" class="blue-color">{{ address.address }}</router-link></td>
          <td> <helix-balance-view :value='parseInt(address.value) ' :precision='true'></helix-balance-view></td>
          <td>$ {{Number(( address.value / 1000000) * helixNode.exchangePrice).toFixed(2)}} </td>
      </tr>
      </tbody>
    </table>
        </div>
      </div>
  </div>
</template>

<script>

import HelixBalanceView from '@/components/HelixBalanceView.vue'
import helixNode from "@/utils/helix-node";
import addressList from "@/utils/address-list";

export default {

  name: 'Addresslist',
    components: {
      HelixBalanceView,
    },
      beforeDestroy() {
    helixNode.unsubscribe('get-exchange-price')
    addressList.unsubscribe('address-list')
  },
  mounted() {
    helixNode.subscribe('get-exchange-price')
    addressList.subscribe('address-list')
  },
  data() {
    return {
  helixNode,
  addressList,
}

}

  }
</script>

<style scoped lang="stylus">
.blue-color{
color:#1e7fde;
}

</style>
