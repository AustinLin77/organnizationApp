<template>
    <div style="overflow-y: hidden">

        <div class="content" id="con" >
          <div class="title">{{mainMessage.mTitle}}</div>
          <div class="details">{{mainMessage.message}}</div>
          <div class="picGroup">
            <img src="../assets/logo.png" class="myImg">
            <img src="../assets/logo.png" class="myImg">
          </div>
          <div class="owner">
            <div class="name">
              {{mainMessage.userName}}
              <span>·{{messageDate}}</span>
              <a style="color: blue;font-size: 12px" @click="deleteContent">删除</a>
            </div>
            <div class="con">
              <div class="innerCon">
                <mu-icon value="visibility" class="bottomCon"></mu-icon>
                <span style="font-size: 12px">{{mainMessage.browsing}}</span>
              </div>
              <div class="innerCon">
                <mu-icon value="feedback" class="bottomCon"></mu-icon>
                <span style="font-size: 12px">{{mainMessage.pCount}}</span>
              </div>
              <div class="innerCon">
                <mu-icon  :color="color" value="thumb_up" class="bottomCon" @click="thumb" ></mu-icon>

                <span style="font-size: 12px">{{mainMessage.total}}</span>
              </div>
            </div>
          </div>
        </div>
        <div id="commentCon" style="z-index: 1;width: 100%;overflow: scroll">
          <div class="commentContent" v-for="i in myComment" @click="specComment(i)">
            <div class="firstD">
              <img src="../assets/aaa.png" class="myPic">
              <div class="innerDiv">
                <div>
                  <span style="font-size: 12px;color: deepskyblue;margin-right: 12px">{{i.userName}}</span><span style="margin-right: 12px" v-if="i.pUserName">回复</span><span style="font-size: 12px;color: deepskyblue">{{i.pUserName}}</span>
                  <div style="font-size: 12px;color: darkgrey">{{i.pMessage}}</div>
                  <div style="font-size: 14px">{{i.message}}</div>
                </div>
              </div>
            </div>
            <div class="secondD">
              {{i.rLevel}}楼·{{i.createDateStr}}<span style="margin-left: 20px;color: blue" @click="deleteComment(i)">删除</span>
            </div>
          </div>
          <!--<mu-load-more  :loading="loading" @load="load" :loaded-all="loadAll"></mu-load-more>-->
          <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="load" v-if="loadAll==false"/>
        </div>


      <div class="comment">
        <mu-text-field  :hintText=placeholder style="margin-bottom: 0" v-model="commentMes" id="input"></mu-text-field>
        <button   class="myButton" @click="sendComment">发送</button>
      </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              id:0,
              loading: false,
              commentMes:'',
              mainMessage:{},
              messageDate:'',
              myComment:[],
              pageNum:1,
              loadAll:false,
              record:1,
              placeholder:'请输入评论',
              recentRecord:0,
              flag:false,
              commentName:'',
              messageId:'',
              lastComment:{ },
              commentMessage:'',
              color:'black',
              scroller:null
            }
        },
        created() {

        },
      mounted(){
        const vm=this;
        this.scroller = document.getElementById("commentCon")
        vm.id=vm.$route.params.id;
        console.log(vm.id);
        vm.messageId=vm.id;
        this.getOrganization();
        var heigt=document.getElementById('con').offsetHeight;
        console.log(heigt);
        document.getElementById('commentCon').style.position='absolute';
        document.getElementById('commentCon').style.top=heigt+'px';
        document.getElementById('commentCon').style.left='0px';
        document.getElementById('commentCon').style.bottom='50px';
      },
      methods:{
        thumb(){
          const vm= this;
          if(vm.color==='black'){
            vm.color='red';
            vm.mainMessage.total++;
            $.ajax({
              url: vm.path+'thumbsUpMessage.json',
              dataType: "json",
              data: {
                'tUserNo':localStorage.getItem("userNo"),
                'tType':0,
                'tMessageId':vm.id
              },
              type: "post",
              success: function (res) {
                console.log(res);
              },
              error: function () {
              }
            });
          }else if(vm.color==='red'){
            vm.color='black';
            vm.mainMessage.total--;
            $.ajax({
              url: vm.path+'thumbsUpMessage.json',
              dataType: "json",
              data: {
                'tUserNo':'170711009',
                'tType':1,
                'tMessageId':vm.id
              },
              type: "post",
              success: function (res) {
                console.log(res);
              },
              error: function () {
              }
            });
          }
        },
        deleteComment(i){
          const vm= this;
          $.ajax({
            url: vm.path+'deleteStatement.json',
            dataType: "json",
            data: {
              'rmessageId':i.rmessageId,
              'rLevel':i.rLevel,
              'messageId':i.messageId,
              'deleteUserNo':localStorage.getItem("userNo"),
              'isPower':0,
              'userNo':i.userNo
            },
            type: "post",
            success: function (res) {
              console.log(res);
              if(res.statusCode===40056){
                vm.$message(res.message)
              }else if(res.statusCode===0){
                vm.$message("删除评论成功");
                vm.pageNum=1;
                vm.getOrganization()
              }
            },
            error: function () {
            }
          });
        },
        specComment(item){
          console.log(item);
          const vm=this;
          vm.placeholder='回复'+item.userName;
          console.log(vm.placeholder)
          vm.flag=true;
          vm.messageId=item.messageId;
          vm.commentName=item.userName;
          vm.commentMessage=item.message

        },
        deleteContent(){
          const vm= this;
          $.ajax({
            url: vm.path+'deleteStatement.json',
            dataType: "json",
            data: {
              'rmessageId':0,
              'rLevel':0,
              'messageId':vm.id,
              'deleteUserNo':localStorage.getItem("userNo"),
              'isPower':0,
              'userNo':vm.mainMessage.userNo

            },
            type: "post",
            success: function (res) {
              console.log(res);
              if(res.statusCode===40056){
                vm.$message(res.message)
              }else if(res.statusCode===0){
                vm.$message("删除留言成功");
                setTimeout(() => {
                  vm.$router.push('/message')
                }, 2000)
              }
            },
            error: function () {
            }
          });
        },
        load () {
          let vm = this;
          this.loading = true;
          $.ajax({
              url: vm.path+'findStatementAndReply.json',
              dataType: "json",
              data: {
                'pId':0,
                'rmessageId':0,
                'rLevel':0,
                'page':vm.pageNum,
                'pageSize': 6,
                'mType':'communityMessage',
                'isDelete':0,
                'plate':'Community',
                'messageId':vm.id

              },
              type: "post",
              success: function (res) {
                console.log(res);
                for(let i=0;i<res.dataInfo.listData.length;i++){
                  res.dataInfo.listData[i].createDateStr=res.dataInfo.listData[i].createDateStr.substring(5,10);
                  vm.myComment.push(res.dataInfo.listData[i])
                }
                vm.pageNum++;
                vm.loading = false;
                vm.recentRecord+=6;
                if(vm.recentRecord>=vm.record-1){
                  vm.loadAll=true
                }
                console.log(vm.loadAll)
              },
              error: function () {


              }
            });


        },
        sendComment(){
          let vm = this;
          $.ajax({
            url: vm.path+'insertReply.json',
            dataType: "json",
            data: {
              'userNo':localStorage.getItem("userNo"),
              'pId':vm.messageId,
              'rmessageId':vm.id,
              'userName':localStorage.getItem("cName"),
              'mType':'communityMessage',
              'plate':'Community',
              'message':vm.commentMes
            },
            type: "post",
            success: function (res) {
              var date=new Date();
              var mon=date.getMonth()+1;
              if(mon<10){
                mon='0'+mon
              }
              var da=date.getDate();
              if(da<10){
                da='0'+da
              }
              console.log(res);
              if(vm.flag){
                vm.lastComment={
                  userName:'myname',
                  rLevel:vm.record,
                  message:vm.commentMes,
                  createDateStr:mon+'-'+da,
                  pUserName:vm.commentName,
                  pMessage:vm.commentMessage

                };
              }else{
                vm.lastComment={
                  userName:'myname',
                  rLevel:vm.record,
                  message:vm.commentMes,
                  createDateStr:mon+'-'+da
                };
              }
              if(vm.loadAll){
//                vm.myComment.push(vm.lastComment);
//                vm.record++
                vm.pageNum=1
                vm.getOrganization()
              }
              vm.placeholder='请输入评论'
              vm.commentMes='';
              vm.flag=false;
              vm.messageId=vm.id
            },
            error: function () {

            }
          });
        },
        getOrganization() {
          let vm = this;
          $.ajax({
            url: vm.path+'findStatementAndReply.json',
            dataType: "json",
            data: {
              'pId':0,
              'rmessageId':0,
              'rLevel':0,
              'page':vm.pageNum,
              'pageSize': 6,
              'mType':'communityMessage',
              'isDelete':0,
              'plate':'Community',
              'messageId':vm.id

            },
            type: "post",
            success: function (res) {
              console.log(res);
              vm.mainMessage=res.dataInfo.listData[0];
              vm.messageDate=vm.mainMessage.createDateStr.substring(5,10);
              vm.myComment=res.dataInfo.listData.slice(1);
              console.log(vm.myComment);
              for(let i=0;i<vm.myComment.length;i++){
                vm.myComment[i].createDateStr=vm.myComment[i].createDateStr.substring(5,10);
              }
              vm.pageNum++;
              if(res.dataInfo.listData.length===res.dataInfo.pageInfo.totalRecord){
                vm.loadAll=true;
                console.log(vm.loadAll);
                vm.record=res.dataInfo.pageInfo.totalRecord;
                console.log(vm.record)
              }else if(res.dataInfo.listData.length<res.dataInfo.pageInfo.totalRecord){
                vm.loadAll=false;
                console.log(vm.loadAll)
                vm.recentRecord=5;
                vm.record=res.dataInfo.pageInfo.totalRecord;
                console.log(vm.record)
              }




            },
            error: function () {

            }
          });
        },
      }
    }
</script>

<style scoped>
  .content{
    background-color: #F8F8F8;
    min-height: 80px;
    width: 100%;
    padding:5px;
    border-bottom: solid 5px #eeeeee;
    position: absolute;
    top: 0;
    left: 0;
  }
  .title{
    width: 100%;
    padding-left: 15px;
    height:30px;
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
    padding-left: 15px;
    padding-right: 10px;
    height: 30px;
    align-items: center;
  }
  .name{
    font-family: 宋体;
    font-size: 14px;
    width:150px;
    height: 30px;
    line-height: 30px;
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
  }
  .commentContent{
    width: 100%;
    height:90px;
    padding:10px;

  }
  .comment{
    z-index: 9999;
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: 0;
    left: 0;
    padding-left: 10px;
    padding-right: 10px;
    align-items: center;
    padding-top: 5px;
    display: flex;
  }
  .myButton{
    height: 30px;
    width: 65px;
    margin-left: 20px;
    border: none;
    border-radius: 10px;
    color: deepskyblue;
   }
  .firstD{
    width: 100%;

    display: flex;
    align-items: center;
  }
  .secondD{
    width: 100%;
    height: 20px;
    padding-left: 50px;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: dimgrey;
  }
  .myPic{
    height: 35px;
    width: 35px;
    margin-left: 5px;
    border-radius:50%;
  }
  .innerDiv{
    flex: 1;
    height: 100%;
    padding-left: 10px;
    display: flex;
    align-items: center;

  }


</style>
