<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
 @import "./assets/sass/mySass";
  .ext .mu-text-field-line{
    display: none;
  }
 .text .mu-item-content{
   text-align: left;
   margin-left: 80px;
 }
 .mySex .mu-text-field-label, .mySex .mu-text-field-line{
   display: none;
 }
 .mySex .mu-text-field{
   width: 100px;
 }
  .mySex .mu-dropDown-menu-text-overflow{
    text-align: right;
  }
</style>
