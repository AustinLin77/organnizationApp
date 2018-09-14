<template>
  <div class="content"  >
    <div v-for="item in data">
      <div  @click="goActivityDetails(item.acId,item.status)">
        <div class="myDiv" >
          <img src="../assets/icon512.png" class="myPic">
          <div class="myRightDiv">
            <div class="firstDiv">
              <span style="flex: 1;font-size: 15px;font-weight: bold">{{item.acName}}</span>
              <div style="padding-left: 3px;padding-right: 3px;height: 20px;color: white;line-height: 20px;margin-top: 2px" :class="{ notSign: notSign,signing:signing,notStart:notStart,during:during,end:end }">
                {{item.status}}
              </div>
            </div>
            <div class="introduce">
              <div style="width: 100%;height: 20px;line-height: 20px;display: flex;align-items: center">
                <mu-icon value="query_builder" :size="17"></mu-icon>
                <div style="font-size: 12px;margin-left: 5px;color: darkgrey"><span>{{item.hostStartStr}}</span><span>--</span><span>{{item.hostEndStr}}</span></div>
              </div>
              <div style="width: 100%;height: 20px;line-height: 20px;display: flex;align-items: center;margin-top: 5px">
                <mu-icon value="room" :size="17"></mu-icon>
                <span style="font-size: 12px;margin-left: 5px;color: darkgrey">{{item.cmActivity.area}}</span>
              </div>
              <div style="width: 100%;height: 20px;line-height: 20px;display: flex;align-items: center;margin-top: 5px">
                <mu-icon value="supervisor_account" :size="17"></mu-icon>
                <div style="font-size: 12px;margin-left: 5px;color: darkgrey"><span style="color: deepskyblue">{{item.cmActivity.acNumber}}</span><span>/</span><span>{{item.cmActivity.ceilNumber}}</span><span></span> (报名人数/总上限)</div></div>

            </div>
          </div>
        </div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
    </div>

  </div>
</template>

<script>
  import { mapState } from 'vuex'
    export default {
        data: function () {
            return {
              data:[],
              notSign:false,
              signing:false,
              notStart:false,
              during:false,
              end:false,
//              activityStatus:7
            }
        },
      computed:{
        ...mapState({
           activityStatus:"activityStatus"
      })
      },
      created(){

      },
      watch:{
        activityStatus: function (newStatus, oldStatus) {
          if(newStatus===1){
            this.getDataTwo()
          }else if(newStatus===2){
            this.getDataThree()
          }else if(newStatus===0){
            this.getData()
          }
        }
      },
        mounted() {
          let vm=this;
          console.log(this.activityStatus);
          this.getData()
        },
        methods: {
          getData(){
            let vm=this;
            $.ajax({
              url: vm.path+'findAuIdByUserNo.json',
              dataType: "json",
              data: {
                pageSize:-1,
                cUserNo:localStorage.getItem("userNo"),
              },
              type: "post",
              success: function(res) {
                console.log(res);
                if(res.dataInfo.listData.length===0){
                  vm.$message("您当前未参加任何活动")
                }
                for(var i=0;i<res.dataInfo.listData.length;i++){
                  if(res.dataInfo.listData[i].cmActivity.hostStartStr){
                    res.dataInfo.listData[i].cmActivity.hostStartStr=res.dataInfo.listData[i].cmActivity.hostStartStr.substr(0,17);
                  }
                  if(res.dataInfo.listData[i].cmActivity.hostEndStr){
                    res.dataInfo.listData[i].cmActivity.hostEndStr=res.dataInfo.listData[i].cmActivity.hostEndStr.substr(0,17)
                  }

                }
                vm.data=res.dataInfo.listData;
                console.log(vm.data);
              },
              error: function() {
              }
            });
          },
          getDataTwo(){
            let vm=this;
            $.ajax({
              url: vm.path+'findAuIdByUserNo.json',
              dataType: "json",
              data: {
                isRetire:0,
                pageSize:-1,
                cUserNo:localStorage.getItem("userNo"),
              },
              type: "post",
              success: function(res) {
                console.log(res);
                if(res.dataInfo.listData.length===0){
                  vm.$message("当前暂无已通过的活动")
                }
                for(var i=0;i<res.dataInfo.listData.length;i++){
                  if(res.dataInfo.listData[i].cmActivity.hostStartStr){
                    res.dataInfo.listData[i].cmActivity.hostStartStr=res.dataInfo.listData[i].cmActivity.hostStartStr.substr(0,17);
                  }
                  if(res.dataInfo.listData[i].cmActivity.hostEndStr){
                    res.dataInfo.listData[i].cmActivity.hostEndStr=res.dataInfo.listData[i].cmActivity.hostEndStr.substr(0,17)
                  }

                }
                vm.data=res.dataInfo.listData;
                console.log(vm.data);
              },
              error: function() {
              }
            });
          },
          getDataThree(){
            let vm=this;
            $.ajax({
              url: vm.path+'findAuIdByUserNo.json',
              dataType: "json",
              data: {
                isRetire:1,
                pageSize:-1,
                cUserNo:localStorage.getItem("userNo"),
              },
              type: "post",
              success: function(res) {
                console.log(res);
                if(res.dataInfo.listData.length===0){
                  vm.$message("当前暂无已退赛的活动")
                }
                for(var i=0;i<res.dataInfo.listData.length;i++){
                  if(res.dataInfo.listData[i].cmActivity.hostStartStr){
                    res.dataInfo.listData[i].cmActivity.hostStartStr=res.dataInfo.listData[i].cmActivity.hostStartStr.substr(0,17);
                  }
                  if(res.dataInfo.listData[i].cmActivity.hostEndStr){
                    res.dataInfo.listData[i].cmActivity.hostEndStr=res.dataInfo.listData[i].cmActivity.hostEndStr.substr(0,17)
                  }

                }
                vm.data=res.dataInfo.listData;
                console.log(vm.data);
              },
              error: function() {
              }
            });
          },
        }

    }
</script>
<style scoped>
  .content{
    overflow: scroll;
    position: absolute;
    top:50px;
    left:0;
    bottom:45px;
    min-height: 80px;
    width: 100%;

  }
  .myDiv{
    width: 100%;
    padding: 10px;
    height: 110px;
    display: flex;
    align-items: center;

  }
  .myPic{
    height:90px;
    width: 90px;
    justify-content: flex-start;
  }
  .myRightDiv{
    flex:1;
    height: 100px;
    padding-left: 5px;
  }
  .firstDiv{
    width: 100%;
    height: 27px;
    display: flex;
  }
  .introduce{
    width: 100%;
    height: 73px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap:break-word;
  }
  .notSign{
    background-color: dimgrey;
  }
  .signing{
    background-color:deepskyblue;
  }
  .notStart{
    background-color:dimgrey
  }
  .during{
    background-color:deeppink;
  }
  .end{
    background-color: darkgrey;
  }

</style>

