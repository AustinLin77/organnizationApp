<template>
  <div style="position: absolute;top: 0;bottom: 50px;overflow-y: scroll;width: 100%;overflow-x: hidden">
    <div class="head">
      <form class="form">
        <input   type="search"  placeholder="输入关键字查询社团" class="input" >
        <mu-icon value="search" class="search"></mu-icon>
      </form>
    </div>
    <div style="width: 100%;height:180px;display: flex;flex-wrap: wrap;border-bottom: 8px solid #eeeeee">
      <div style="height: 90px;width: 25%;padding: 10px" v-for="item in data" @click="organizationDetails(item.cId,item.cName)">
        <div style="display: flex;align-items: center;justify-content: center">
          <img :src="'http://appinter.sunwoda.com'+item.cmFile.fUrl" style="width: 30px;height: 30px">
        </div>
        <p style="text-align: center;text-overflow: ellipsis;overflow: hidden;white-space: nowrap">{{item.cName}}</p>

      </div>
      <div style="height: 90px;width: 25%;padding: 10px"  @click="allOrganizations" v-show="flag">
        <div style="display: flex;align-items: center;justify-content: center">
          <img src="../assets/shenglue.jpg" style="width: 30px;height: 30px">
        </div>
        <p style="text-align: center">更多</p>
      </div>
    </div>
    <div class="loop">
      <div class="loopHead" >
        <div class="loopHeadP">
          <img src="../assets/line.png" class="myLine">
          最新活动
        </div>
        <div class="loopHeadM" @click="goAllActivies">查看全部 ></div>
      </div>
      <div v-for="item in activityData" @click="goActivityDetails(item.acId,item.status)">
        <div class="myDiv" >
          <img src="../assets/icon512.png" class="myPic">
          <div class="myRightDiv">
            <div class="firstDiv">
              <span style="flex: 1;font-size: 15px;font-weight: bold">{{item.acName}}</span>
              <div style="padding-left: 3px;padding-right: 3px;height: 20px;color: white;line-height: 20px;margin-top: 2px" :class="{ notSign: item.notSign,signing:item.signing,notStart:item.notStart,during:item.during,ending:item.ending }">
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
                <mu-icon value="supervisor_account" :size='17'></mu-icon>
                <div style="font-size: 12px;margin-left: 5px;color: darkgrey"><span style="color: deepskyblue">{{item.acNumber}}</span><span>/</span><span>{{item.ceilNumber}}</span><span></span> (报名人数/总上限)</div></div>

            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="loop">
      <div class="loopHead" >
        <div class="loopHeadP">
          <img src="../assets/line.png" class="myLine">
          活动剪影
        </div>
        <div class="loopHeadM" >查看全部 ></div>
      </div>
      <div style="width: 100%;height: 30px;font-weight: bold;font-size: 14px;display: flex;align-items: center;padding-left: 15px">[瑜伽社]五月第二周活动</div>
      <div style="width: 100%;height: 20px;font-size: 13px;display: flex;align-items: center;padding-left: 15px;color: darkgrey">好多美女哦，大家多多参与</div>
      <div style="width: 100%;height:80px;display: flex;flex-wrap: nowrap;overflow: scroll">
        <div style="height: 80px;width: 90px;padding: 10px" v-for="i in 8" >
          <div style="display: flex;align-items: center;justify-content: center">
            <img src='../assets/dog.png' style="width: 60px;height: 60px;border: 1px solid #eeeeee;border-radius: 3px">
          </div>
        </div>

      </div>
    </div>
    <div class="loop" style="border: none">
      <div class="loopHead" >
        <div class="loopHeadP">
          <img src="../assets/line.png" class="myLine">
          最新留言
        </div>
        <div class="loopHeadM" @click="goAllMessage">查看全部 ></div>
      </div>
      <div v-for="item in myData" style="display: flex">
        <div style="padding:10px 5px 10px 10px;width: 50px">
          <img src="../assets/personIcon.png" style="border-radius: 50%;width: 30px;height: 30px;border: 1px solid #cccccc;">
        </div>
        <div  @click="goMessageDetails(item.messageId)" style="padding:5px;border-bottom: solid 1px #eeeeee;flex: 1;">
          <div class="title">{{item.mTitle}}</div>
          <div class="details">{{item.message}}</div>
          <div class="picGroup" v-if="item.photoIds!=null">
            <img src="../assets/logo.png" class="myImg">
            <img src="../assets/logo.png" class="myImg">
          </div>
          <div class="owner">
            <span class="name">{{item.userName}}</span>
            <div class="con">
              <div class="innerCon">
                <mu-icon value="visibility" class="bottomCon"></mu-icon>
                <span style="font-size: 12px">{{item.browsing}}</span>
              </div>
              <div class="innerCon">
                <mu-icon value="feedback" class="bottomCon"></mu-icon>
                <span style="font-size: 12px">{{item.pCount}}</span>
              </div>
              <div class="innerCon">
                <mu-icon value="thumb_up" class="bottomCon"></mu-icon>
                <span style="font-size: 12px">{{item.total}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
  import { mapMutations } from 'vuex'

    export default {
        data: function () {
            return {
              activityData:[],
              data:[],
              flag:false,
              myData:[],
              organizationKey:[],
              notSign:false,
              signing:false,
              notStart:false,
              during:false,
              end:false
            }
        },
        created() {
        },
        mounted(){
          console.log(this.$route.query.token)
          localStorage.setItem("token",this.$route.query.token);
          console.log(this.$route)
          let vm=this;
          this.getUserInfo()
          this.getOrganization();
          this.getMessage();
          this.getActivities()
          this.storeSelectRootIndex("index")
        },
        methods:{
          ...mapMutations([
            'storeOrganizationKeys',
            'storeSelectCid',
            'storeSelectRootIndex'
          ]),
          goAllMessage(){
            let vm = this;
            vm.$router.push('/message')
          },
          goAllActivies(){
            let vm = this;
            vm.$router.push('/activity')
            },
          getMessage() {
            let vm = this;
            $.ajax({
              url: vm.path + 'findStatement.json',
              dataType: "json",
              data: {
                'pId': 0,
                'rmessageId': 0,
                'rLevel': 0,
                'pageSize': -1,
                'mType': 'communityMessage',
                'isDelete': 0,
                'plate': 'Community'
              },
              type: "post",
              success: function (res) {
                console.log(res);
                vm.myData = res.dataInfo.listData.slice(0,2);
                console.log(vm.myData)

              },
              error: function () {

              }
            });
          },
          getActivities(){
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
                    res.dataInfo.listData[i].ending=true;
                  }
                }
                vm.activityData.push(res.dataInfo.listData[0]);
                console.log(vm.activityData);
              },
              error: function() {
              }
            });
          },
          goMessageDetails(id){
            const vm=this;
            this.$router.push({
                name:'messageDetails',
                params: {
                  id: id
                }
              }

            )
          },
          getOrganization(){
            let vm = this;
             $.ajax({
                url: vm.path+'findCommunityList.json',
                dataType: "json",
                data: {
                  'pageSize':-1,
                  'cId':0,
                  'page':1,
                  'cName':null,
                  'isDelete':null
                },
                type: "post",
                success: function(res) {
                  console.log(res);
                  if(res.dataInfo.listData.length<=7){
                    vm.data=res.dataInfo.listData;
                  }else if(res.dataInfo.pageInfo.totalRecord>7){
                    vm.data=res.dataInfo.listData.slice(0,7);
                    vm.flag=true;
                  }
                  for(let i=0;i<res.dataInfo.listData.length;i++){
                    let key=res.dataInfo.listData[i].cName;
                    let value=res.dataInfo.listData[i].cId;
                    let item={key:key,value:value};
                    vm.organizationKey.push(item)
                  }
                  console.log(vm.organizationKey);
                  vm.storeOrganizationKeys(vm.organizationKey)
                },
                error: function() {

                }
              });

//            let vm = this;
//            let postData = this.$qs.stringify({
//              'pageSize':-1,
//              'page':1,
//            });
//            this.axios({
//              method:'post',
//              url:'http://172.30.128.32:8083/swdAPP/common/community/findCommunityList.json',
//              data:postData
//            }).then(function (res) {
//              console.log(res);
//              if(res.data.dataInfo.listData.length<=7){
//                vm.data=res.data.dataInfo.listData;
//              }else if(res.data.dataInfo.pageInfo.totalRecord>7){
//                vm.data=res.data.dataInfo.listData.slice(0,7);
//                vm.flag=true;
//              }
//            })
          },
          organizationDetails(id,name){
            let vm = this;
            this.storeSelectCid(id);
            this.$router.push({
              path: '/introduce',
              query: {
                id: id,
                name:name
              }
            })
          },
          allOrganizations(){
            let vm = this;
            this.$router.push('/allOrganizations')
          },
          getUserInfo(){
            let vm = this;
            console.log(localStorage.getItem("token"))
            $.ajax({
              url: vm.path + 'userInfo.json',
              dataType: "json",
              data: {
                token:localStorage.getItem("token")
              },
              type: "post",
              success: function (res) {
                console.log(res);
                localStorage.setItem("userNo",res.dataInfo.listData[0].cUserNo)
                localStorage.setItem("cName",res.dataInfo.listData[0].cName)
                console.log(localStorage.getItem("cName"))
              },
              error: function () {

              }
            });

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
    border-radius: 15px;
    outline: none;
    background: #eeeeee;
    color: dimgrey;
    text-indent: 15px;
  }
  .search{
    font-size: 25px;
    position: absolute;
    color:#cccccc;
    top: 12px;
    right:25px;
  }
  .loop{
    margin-top: 0;
    width: 100%;
    border-bottom: solid 8px #eee
  }
  .loopHead{
    background-color: white;
    height: 40px;
    display: flex;

  }
  .loopHeadP{
    font-family: 微软雅黑;
    font-size: 16px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    color: deepskyblue;
  }
  .loopHeadM{
    font-family: 宋体;
    font-size: 12px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #888;
    padding-right: 15px
  }
  .myDiv{
    width: 100%;
    padding: 10px;
    height: 110px;
    display: flex;
    align-items: center;

  }
  .myPic{
    border-radius: 5px;
    border: 1px solid #eeeeee;
    height:90px;
    width: 90px;
    justify-content: flex-start;
  }
  .myRightDiv{
    flex:1;
    height: 100px;
    padding-left: 15px;
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
  .title{
    width: 100%;
    height:30px;
    line-height: 30px;
    font-weight: bold;
    font-family: 微软雅黑;
    font-size: 15px;
  }
  .details{
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    height:30px;
    font-family: 宋体;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 13px;
    color: darkgrey;
    text-indent: 15px;
  }
  .picGroup{
    width: 100%;
    padding-left: 15px;
    padding-right:15px;
    padding-bottom: 5px;
    height: 70px;
    display: flex;
    flex-wrap: nowrap;
    overflow:scroll ;
  }
  .myImg{
    width: 70px;
    height: 60px;
    margin-right: 15px;
  }
  .owner{
    display: flex;
    width: 100%;
    padding-right: 10px;
    height: 30px;
    align-items: center;
  }
  .name{
    font-family: 宋体;
    font-size: 13px;
    width:120px;
    height: 30px;
    line-height: 30px;
  }
  .myLine{
    margin-right: 10px;
    height: 20px;
  }
  .con{
    flex:1;
    height: 30px;
    display: flex;
  }
  .innerCon{
    display: flex;
    height: 100%;
    width: 33%;
    align-items: center;
    justify-content: flex-end;
  }
  .bottomCon{
    font-size: 18px;
    color: #333333;
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

