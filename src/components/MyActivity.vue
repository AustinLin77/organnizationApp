<template>
  <div >
    <div style="position: absolute;top: 0;width: 100%">
      <mu-tabs :value.sync="active3" color="blue" indicator-color="yellow" full-width >
        <mu-tab to="/myActivitiesList"  active @click="storeSelectActivityStatus(0)">全部</mu-tab>
        <mu-tab to="/myActivitiesList" @click="storeSelectActivityStatus(1)">已通过</mu-tab>
        <mu-tab to="/myActivitiesList" @click="storeSelectActivityStatus(2)" >已退赛</mu-tab>
      </mu-tabs>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
    export default {
        data: function () {
            return {
              active3:0
            }
        },
        created() {

        },
        mounted() {
          let vm=this;
         console.log(vm.$store.state.activityStatus)
        },
        methods: {
          ...mapMutations([
            'storeSelectActivityStatus',
          ]),
        }

    }
</script>


