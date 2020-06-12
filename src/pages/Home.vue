<template>
  <div class="container pt-4">
        <div class="row justify-content-center pb-4">
        <div class="col-sm-12 col-md-12 col-lg-12 text-left">
         <div class="row top-row-between">
         <p class="home-title">EXPLORE</p>
         <router-link class="btn addr-btn" to="/rich-addresses">HOLDERS</router-link>
         </div>
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
.home-title{
    margin: 0;
    padding-top: 2%;
    color:#1e7fde;
    }
.top-row-between {
    justify-content: space-between !important;
    margin:0;
    padding-bottom:2%;
    }
.addr-btn{
   color:#fff;
   border-color: #2083FE;
   background-color: #358fff;
   padding: 0.5rem 1.5rem;
       }
.addr-btn:hover{
    color:#fff;
    border-color: #2083FE;
    background-color: #529fff;
    padding: 0.5rem 1.5rem;
        }

</style>
