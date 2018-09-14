<template>
  <div style="overflow-y: hidden">

    <router-view></router-view>
    <div style=" width:100%;position: absolute;bottom:0 ;height: 56px">
      <mu-bottom-nav style="background-color: #F8F8F8"  :value="shift" @change="gochild" color="blue">

        <mu-bottom-nav-item  title="首页" value="index" icon="ondemand_video"></mu-bottom-nav-item>
        <mu-bottom-nav-item  title="活动" value="activity" icon="music_note" ></mu-bottom-nav-item>
        <mu-bottom-nav-item  title="我的" value="mine" icon="books"> </mu-bottom-nav-item>
        <mu-bottom-nav-item  title="审批"  value="check"  icon="local_offer"  v-show="flag"> </mu-bottom-nav-item>
      </mu-bottom-nav>
      <!--<div style=" width:100%;position: absolute;bottom:0 ;height: 56px">-->
      <!--<mu-bottom-nav style="background-color: #F8F8F8"  :value.sync="shift">-->
        <!--<mu-bottom-nav-item  title="首页" icon="ondemand_video" to="index" value="index" replace></mu-bottom-nav-item>-->
        <!--<mu-bottom-nav-item  title="活动" icon="music_note" to="activity" value="activity" replace></mu-bottom-nav-item>-->
        <!--<mu-bottom-nav-item  title="我的" icon="books" to="mine"  value="mine" replace> </mu-bottom-nav-item>-->
        <!--<mu-bottom-nav-item  title="审批" icon="local_offer" to="check"  v-show="flag" value="check" replace> </mu-bottom-nav-item>-->
      <!--</mu-bottom-nav>-->
    </div>
  </div>
</template>


<script>
  import { mapState } from 'vuex'
export default {

  data () {
    return {
      shift: "index",
      flag:false
    }
  },
  computed:{
    ...mapState({
      shift1:"rootIndex"
    })
  },

  methods:{
    getPower(){
      let vm = this;
      $.ajax({
        url: vm.path + 'findApplyAdmin.json',
        dataType: "json",
        data: {
          'aType': 1,
          'userNo': localStorage.getItem("userNo"),
          'pageSize': -1,
          'isDelete': 0,
        },
        type: "post",
        success: function (res) {
          console.log(res);
          if(res.dataInfo.listData.length===0){
            vm.flag=false;
          }else{
            vm.flag=true;
          }

        },
        error: function () {

        }
      });
    },
    gochild(value){
      console.log(value);
      this.shift = value
      this.$router.push({path:value});
    }
  },

  mounted(){
    let vm=this;
    this.getPower()
    console.log("++++++++++++++++++");
    this.shift = vm.$route.name;
    console.log(this.shift)
  }
}
</script>


<style scoped>
.aaa{
  color:red;
}
</style>
