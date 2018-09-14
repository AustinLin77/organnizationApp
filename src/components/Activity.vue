<template>
  <div style="overflow-y: hidden">
    <div class="head">
      <form class="form">
        <input   type="search"  placeholder="输入关键字查询活动" class="input" v-model="search" >
        <mu-icon value="search" class="search" @click="goTest"></mu-icon>
      </form>
    </div>
    <div class="content"  >
      <div v-for="item in data" @click="goActivityDetails(item.acId,item.status)">
        <div class="myDiv" >
          <img src="../assets/icon512.png" class="myPic">
          <div class="myRightDiv">
            <div class="firstDiv">
              <span style="flex: 1;font-size: 15px;font-weight: bold">{{item.acName}}</span>
              <div style="padding-left: 3px;padding-right: 3px;height: 20px;color: white;line-height: 20px;margin-top: 2px" :class="{ 'notSign':item.notSign,'signing':item.signing,'notStart':item.notStart,'during':item.during,'ending':item.ending }">
                {{item.status}}
              </div>
            </div>
            <div class="introduce">
              <div style="width: 100%;height: 20px;line-height: 20px;display: flex;align-items: center">
                <mu-icon value="query_builder":size="17"></mu-icon>
                <div style="font-size: 12px;margin-left: 5px;color: darkgrey"><span>{{item.hostStartStr.substr(0,17)}}</span><span>--</span><span>{{item.hostEndStr.substr(0,17)}}</span></div>
              </div>
              <div style="width: 100%;height: 20px;line-height: 20px;display: flex;align-items: center;margin-top: 5px">
                <mu-icon value="room" :size="17"></mu-icon>
                <span style="font-size: 12px;margin-left: 5px;color: darkgrey">{{item.area}}</span>
              </div>
              <div style="width: 100%;height: 20px;line-height: 20px;display: flex;align-items: center;margin-top: 5px">
                <mu-icon value="supervisor_account" :size='a'></mu-icon>
                <div style="font-size: 12px;margin-left: 5px;color: darkgrey"><span style="color: deepskyblue">{{item.acNumber}}</span><span>/</span><span>{{item.ceilNumber}}</span><span></span> (报名人数/总上限)</div></div>

              </div>
            </div>
          </div>
        </div>
        <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      </div>

    </div>





</template>

<script>
  import { mapMutations } from 'vuex'
    export default {
        data: function () {
            return {
              a:17,
              search:'',
              data:[],
            }
        },
        created() {

        },
      mounted(){
        const vm =this;
        this.getData()
        this.storeSelectRootIndex("activity")
      },
      methods:{
        ...mapMutations([
          'storeSelectRootIndex'
        ]),
        getData(){
          let vm=this;
          $.ajax({
            url: vm.path+'findActivityList.json',
            dataType: "json",
            data: {
              acReleaseState:1,
              pageSize:-1
            },
            type: "post",
            success: function(res) {
//              const thirteen =new Date().getTime().toString();
//              const currentTime=thirteen.substr(0,10);
              const currentTime=new Date().getTime()
              console.log(currentTime);
              for(var i=0;i<res.dataInfo.listData.length;i++){
//                res.dataInfo.listData[i].signUpStart=1514783593;
//                res.dataInfo.listData[i].signUpEnd=1515561193;
//                res.dataInfo.listData[i].hostStart=1519881193;
//                res.dataInfo.listData[i].hostEnd=1520658793;
                if(currentTime<res.dataInfo.listData[i].signUpStart){
                  res.dataInfo.listData[i].status='报名未开始';
                  res.dataInfo.listData[i].notSign=true
                }else if(res.dataInfo.listData[i].signUpStart<=currentTime&&currentTime<res.dataInfo.listData[i].signUpEnd){
                  res.dataInfo.listData[i].status='报名进行中';
                  res.dataInfo.listData[i].signing=true
                }else if(currentTime>=res.dataInfo.listData[i].signUpEnd&&currentTime<res.dataInfo.listData[i].hostStart){
                  res.dataInfo.listData[i].status='活动未开始';
                  res.dataInfo.listData[i].notStart=true
                }else if(res.dataInfo.listData[i].hostStart<=currentTime&&currentTime<res.dataInfo.listData[i].hostEnd){
                  res.dataInfo.listData[i].status='活动进行中';
                  res.dataInfo.listData[i].during=true;
                }else if(currentTime>= res.dataInfo.listData[i].hostEnd){
                  res.dataInfo.listData[i].status='活动已结束';
                  console.log("aaaaaaaaa")
                  res.dataInfo.listData[i].ending=true;
                }
              }
              vm.data=res.dataInfo.listData;
              console.log(vm.data);
            },
              error: function() {
            }
          });
        },
        goTest(){
          let vm=this;
          $.ajax({
            url: vm.path+'findActivityList.json',
            dataType: "json",
            data: {
              acReleaseState:1,
              acName:vm.search
            },
            type: "post",
            success: function(res) {
              const currentTime=new Date().getTime()
              console.log(currentTime);
              for(var i=0;i<res.dataInfo.listData.length;i++){
//                res.dataInfo.listData[i].signUpStart=1514783593;
//                res.dataInfo.listData[i].signUpEnd=1515561193;
//                res.dataInfo.listData[i].hostStart=1519881193;
//                res.dataInfo.listData[i].hostEnd=1520658793;
                if(currentTime<res.dataInfo.listData[i].signUpStart){
                  res.dataInfo.listData[i].status='报名未开始';
                  vm.notSign=true
                }else if(res.dataInfo.listData[i].signUpStart<=currentTime&&currentTime<res.dataInfo.listData[i].signUpEnd){
                  res.dataInfo.listData[i].status='报名进行中';
                  vm.signing=true
                }else if(currentTime>=res.dataInfo.listData[i].signUpEnd&&currentTime<res.dataInfo.listData[i].hostStart){
                  res.dataInfo.listData[i].status='活动未开始';
                  vm.notStart=true
                }else if(res.dataInfo.listData[i].hostStart<=currentTime&&currentTime<res.dataInfo.listData[i].hostEnd){
                  res.dataInfo.listData[i].status='活动进行中';
                  vm.during=true;
                }else if(currentTime>= res.dataInfo.listData[i].hostEnd){
                  res.dataInfo.listData[i].status='活动已结束';
                  vm.end=true;
                }
              }
              vm.data=res.dataInfo.listData
              console.log(vm.data);
            },
            error: function() {
            }
          });
        },
        goActivityDetails(id,status){
          const vm=this;
          vm.$router.push({
            name:'activityDetails',
            params: {
              id: id,
              status:status
            }
          })
        }
      }
    }
</script>

<style scoped>
  .head{
    /*background-color:white;*/
    height: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    justify-content: center;
    top:0;

  }
  .form{
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center
  }
  .input{
    width: 95%;
    height: 32px;
    padding-left: 10px;
    border: 1px solid #DBDBDB;
    border-radius: 3px;
    outline: none;
    background: #eeeeee;
    color: dimgrey;
  }
  .search{
    font-size: 25px;
    position: absolute;
    color:#cccccc;
    top: 14px;
    right:22px;
  }
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
  .ending{
    background-color: darkgrey;
  }
</style>
