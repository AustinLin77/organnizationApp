<template>
  <div >
    <div style="position: absolute;top: 0;width: 100%">
      <mu-tabs :value.sync="active2" color="blue" indicator-color="yellow" full-width >
        <mu-tab to="/applyFor"  active >入社申请</mu-tab>
        <mu-tab to="/joinIn"   >活动报名</mu-tab>
      </mu-tabs>
    </div>
    <router-view></router-view>
    <div style="position: absolute;bottom: 0;width:100%;height: 40px;line-height: 40px;text-align: center;font-size: 16px;background-color: #2196f3;color: white;" @click="goAllMember">
      查看所有社员
    </div>
  </div>
</template>

<script>
    export default {
        data: function () {
            return {
              active2: 0,
              cId:''
            }
        },
        created() {

        },
      mounted(){


      },
      methods:{
        goAllMember(){
          let vm=this;
          vm.$router.push('/allPeople')
        }
      }

    }
</script>


