<template lang="html">
    <nav class="navbar fixed-top navbar-expand navbar-light shadow mb-5 top-bar">   
      <div class="navbar-brand">
        <router-link to="/">
          <img class='logo' src="../assets/logo.png" />
        </router-link>
      </div> 
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon icons"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="search-field-top-bar">
              <search-field></search-field>
            </li>             
            <li class="nav-item">
              <router-link :to="{ name: 'Settings' }">
              <i class="fa fa-gear icon icons"></i>
              </router-link>
            </li>
          </ul>
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

<style>

.logo{
  height: 25%;
  width: 35%;
}

.search-field-top-bar{
  position: absolute;
  width: 40%;
  right: 5%;
  top: 20%;
}

.top-bar{
  background-color: #df9e02;
  height: 10%;
}

.icons{
  color: white;
  font-size: 32px;
}

@media only screen and (device-width: 360px) and (device-height: 640px) {
.logo{
  height: 35%;
  width: 45%;
}  
.search-field-top-bar{
  position: absolute;
  width: 40%;
  right: 15%;
  top: 18%;
}
}

@media only screen and (device-width: 360px) and (device-height: 740px) {
.logo{
  height: 35%;
  width: 45%;
}
.search-field-top-bar{
  position: absolute;
  width: 40%;
  right: 15%;
  top: 18%;
}
}

@media only screen and (device-width: 375px) and (device-height: 812px) {
.logo{
  height: 35%;
  width: 45%;
}  
.search-field-top-bar{
  position: absolute;
  width: 40%;
  right: 15%;
  top: 28%;
}
}
@media only screen and (device-width: 375px) and (device-height: 667px) {
.logo{
  height: 35%;
  width: 45%;
}  
.search-field-top-bar{
  position: absolute;
  width: 40%;
  right: 15%;
  top: 18%;
}
}
@media only screen and (device-width: 414px) and (device-height: 846px) {
.logo{
  height: 35%;
  width: 45%;
}  
.search-field-top-bar{
  position: absolute;
  width: 40%;
  right: 15%;
  top: 18%;
}
}
@media only screen and (device-width: 414px) and (device-height: 896px) {
.logo{
  height: 35%;
  width: 45%;
}  
.search-field-top-bar{
  position: absolute;
  width: 40%;
  right: 15%;
  top: 28%;
}
}
@media only screen and (device-width: 414px) and (device-height: 736px) {
.logo{
  height: 35%;
  width: 45%;
}  
.search-field-top-bar{
  position: absolute;
  width: 40%;
  right: 15%;
  top: 20%;
}
}
@media only screen and (device-width: 420px) and (device-height: 720px) {
.logo{
  height: 35%;
  width: 45%;
}  
.search-field-top-bar{
  position: absolute;
  width: 40%;
  right: 15%;
  top: 18%;
}
}
@media only screen and (device-width: 360px) and (device-height: 760px) {
.logo{
  height: 35%;
  width: 45%;
}  
.search-field-top-bar{
  position: absolute;
  width: 40%;
  right: 15%;
  top: 18%;
}
}
@media only screen and (device-width: 320px) and (device-height: 568px) {
.logo{
  height: 35%;
  width: 45%;
}
.search-field-top-bar{
  position: absolute;
  width: 40%;
  right: 15%;
  top: 18%;
}
}
@media only screen and (device-width: 800px) and (device-height: 1280px) {
.logo{
  height: 35%;
  width: 45%;
}
.search-field-top-bar{
  position: absolute;
  width: 40%;
  right: 10%;
  top: 30%;
}
}
@media only screen and (max-width: 310px) {
.logo{
  height: 35%;
  width: 45%;
}
.search-field-top-bar{
  position: absolute;
  width: 40%;
  right: 15%;
  top: 15%;
}
}
</style>