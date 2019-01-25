<template>
  <div style="overflow: hidden">
    <div class="content">
      <div class="myBigPic" >
        <el-carousel id="myCar">
          <el-carousel-item v-for="(item,index) in picData" :key="index" style="width: 100%;">
            <img :src="item"  @click="clickImg($event)"  style="width: 100%;height: auto"  id="myImg"  @load="imageLoaded">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="details">
        <div class="myRightDiv">
          <div class="firstDiv">
            <span style="flex: 1;font-size: 15px;font-weight: bold">{{data.acName}}</span>
            <div style="padding-left: 3px;padding-right: 3px;height: 20px;color: white;line-height: 20px;" :class="{ notSign: notSign,signing:signing,notStart:notStart,during:during,end:end }">
              {{status}}
            </div>
          </div>
          <div class="introduce">
            <div style="width: 100%;height: 20px;line-height: 20px;display: flex;align-items: center">
              <mu-icon value="query_builder" :size="17"></mu-icon>
              <div style="font-size: 12px;margin-left: 5px;color: darkgrey"><span>{{data.hostStartStr}}</span><span>--</span><span>{{data.hostEndStr}}</span></div>
            </div>
            <div style="width: 100%;height: 20px;line-height: 20px;display: flex;align-items: center;margin-top: 5px">
              <mu-icon value="room" :size="17"></mu-icon>
              <span style="font-size: 12px;margin-left: 5px;color: darkgrey">{{data.area}}</span>
            </div>
            <div style="width: 100%;height: 20px;line-height: 20px;display: flex;align-items: center;margin-top: 5px">
              <mu-icon value="supervisor_account" :size="17"></mu-icon>
              <div style="font-size: 12px;margin-left: 5px;color: darkgrey"><span style="color: deepskyblue">{{data.acNumber}}</span><span>/</span><span>{{data.ceilNumber}}</span><span></span> (报名人数/总上限)</div>
            </div>
          </div>
        </div>
      </div>
      <div class="activityIntroduce">
        <div class="title">
          活动介绍
        </div>
        <div class="introduceContent" ref="introduce" v-html="data.acIntroduce" v-if="data.acIntroduce"></div>
        <div class="introduceContent"   v-else>
          无活动介绍!
        </div>
      </div>
      <div style="height: 30px;width: 100%;background-color: #eeeeee;color:darkgrey;padding-left: 20px;display: flex;align-items: center;padding-right: 20px">
        <span style="flex: 1;display: flex;justify-content: flex-start">参与人员</span>
        <span style="flex: 1;display: flex;justify-content: flex-end">共{{user.length}}人</span>
      </div>
      <div v-if="user.length>0">
        <div style="height: 40px;width: 100%;padding-left: 10px;display: flex;align-items: center;padding-right:10px" v-for="person in user">
          <span style="width: 50px;display: flex;justify-content: flex-start">{{person.user.cName}}</span>
          <span style="width: 100px;display: flex;justify-content: flex-end">{{person.cUserNo}}</span>
          <span style="width: 80px;display: flex;justify-content: flex-end">{{person.user.dept}}</span>
          <span style="flex: 1;display: flex;justify-content: flex-end">{{person.user.telphone}}</span>
        </div>
      </div>

      <div v-else style="height: 50px;display: flex;align-items: center;justify-content: center;font-size: 16px;color: deepskyblue">
        该活动无参与人员
      </div>
    </div>
    <big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>


  </div>
</template>

<script>
  import BigImg from './BigImg'
  import  img1 from  "@/assets/slidesOne.png"
  import  img2 from  "@/assets/slidesTwo.png"
  import  img3 from  "@/assets/slidesThree.png"
    export default {
        data: function () {
            return {
              user:[],
              picData:["https://fdfs.sunwoda.com/group1/M00/00/04/rB4HE1vi4fCAeh9pAAGOtaFENw4166.png",
                "https://fdfs.sunwoda.com/group1/M00/00/06/rB4HFFvi4gyAAjlKAAEG0Y8-eyo941.png",
                "https://fdfs.sunwoda.com/group1/M00/00/04/rB4HE1vi4hyATIPnAAEPVdSMTJk065.png"],
              acId:'',
              data:[],
              showImg: false,
              imgSrc: '',
              status:'',
              notSign:false,
              signing:false,
              notStart:false,
              during:false,
              end:false
            }
        },
      components: {
        'big-img': BigImg
      },
        created() {

        },
        mounted() {
          const vm=this;
          vm.acId=vm.$route.params.id;
          vm.status=vm.$route.params.status;
          console.log(vm.status)
          switch (vm.status){
            case '报名未开始':
              vm.notSign=true;
              break;
            case '报名进行中':
              vm.signing=true;
              break;
            case '活动未开始':
              vm.notStart=true;
              break;
            case '活动进行中':
              vm.during=true;
              break;
            case '活动已结束':
              vm.end=true;
              break;
          }
          this.getData();
          this.getUser()
        },
        methods: {
          imageLoaded(){
            var x=document.getElementById("myImg").clientHeight
            document.getElementById("myCar").style.height=127+'px'
          },
          getUser(){
            let vm=this;
            $.ajax({
              url: vm.path+'findAuIdByAcId.json ',
              dataType: "json",
              data: {
                acId:vm.acId,
                isRetire:0,

              },
              type: "post",
              success: function(res) {
                console.log(res);
                vm.user=res.dataInfo.listData
              },
              error: function() {
              }
            });
          },
          clickImg(e) {
            this.showImg = true
            console.log(e.currentTarget.src)
            // 获取当前图片地址
            this.imgSrc = e.currentTarget.src
          },
          viewImg() {
            this.showImg = false
          },
          getData(){
            let vm=this;
            $.ajax({
              url: vm.path+'findActivityList.json',
              dataType: "json",
              data: {
                acId:vm.acId,
                acReleaseState:1,
              },
              type: "post",
              success: function(res) {
                console.log(typeof res.dataInfo.listData[0].hostStartStr)
                res.dataInfo.listData[0].hostStartStr=res.dataInfo.listData[0].hostStartStr.slice(0,17);
                res.dataInfo.listData[0].hostEndStr=res.dataInfo.listData[0].hostEndStr.slice(0,17)
                vm.data=res.dataInfo.listData[0];
                vm.$nextTick(function () {
                  if(res.dataInfo.listData[0].acIntroduce){
                    var myP=vm.$refs.introduce.getElementsByTagName('p');
                    for(var i=0;i<myP.length;i++){
                      if(myP[i].innerHTML == "<br>" || myP[i].innerHTML =="" ){
                        myP[i].style.display='none';
                      }
                    }
                  }
                });
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
  .introduceContent img{

  }
  .introduceContent{
    font-size: 14px;
    padding:10px
  }
  .activityIntroduce{
    width: 100%;
    min-height: 100px;
    padding: 15px;
  }
  .content{
    position: absolute;
    top:0;
    bottom: 0;
    left:0;
    overflow: scroll;
    width:100%;
  }
  .foot{
    position: absolute;
    bottom: 0;
    left:0;
    height: 45px;
    width: 100%;
    background-color: deepskyblue;
    color: white;
    line-height: 45px;
    text-align: center;
  }
  .myBigPic{
    width: 100%;

    background-color: darkgrey;
  }
  .details{
    width: 100%;
    height: 120px;
    border-bottom: solid 5px #eeeeee;
  }
  .myRightDiv{
    flex:1;
    height: 120px;
    padding: 10px;
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
    height: 30px;
    font-size: 16px;
    font-weight: bold;
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


