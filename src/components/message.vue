<template>
  <div style="overflow-y: hidden">
    <div class="head">
      <div style="width: 100%;display: flex;align-items: center;justify-content: center;height: 100%">
        <form class="form">
          <input   type="search"  placeholder="输入关键字查询留言" class="input" v-model="search" >
          <mu-icon value="search" class="search" @click="goTest"></mu-icon>
        </form>
      </div>

    </div>
    <div class="content"  >
      <div v-for="item in myData" @click="goMessageDetails(item.messageId)" style="padding:5px;
    border-bottom: solid 5px #eeeeee;">
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


    <div class="foot">
      <div style="display: flex;align-items: center;justify-content: center" @click="newMessage">
        <mu-icon value="create" style="color: darkgrey" ></mu-icon>
        <span style="font-weight: bold;font-size: 16px;font-family: 宋体;color: darkgrey">发表留言</span>
      </div>

    </div>


  </div>
</template>

<script>
    export default {
        data: function () {
            return {
              myData:[],
              search:'',
            }
        },
        created() {

        },
      mounted(){
        this.getOrganization()
      },
      methods:{
        getOrganization() {
          console.log("aaa")
          let vm = this;
          $.ajax({
            url: vm.path+'findStatement.json',
            dataType: "json",
            data: {
              'pId':0,
              'rmessageId':0,
              'rLevel':0,
              'pageSize': -1,
              'mType':'communityMessage',
              'isDelete':0,
              'plate':'Community'
            },
            type: "post",
            success: function (res) {
              console.log(res);
             vm.myData=res.dataInfo.listData;
              console.log(vm.myData)

            },
            error: function () {

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
        newMessage(){
          const vm=this;
          this.$router.push(
            '/newMessage',
          )
        },
        goTest(){
          let vm = this;
          $.ajax({
            url: vm.path+'findStatement.json',
            dataType: "json",
            data: {
              'pId':0,
              'rmessageId':0,
              'rLevel':0,
              'pageSize': -1,
              'mType':'communityMessage',
              'isDelete':0,
              'plate':'Community',
              'mTitle':vm.search
            },
            type: "post",
            success: function (res) {
              console.log(res);
              vm.myData=res.dataInfo.listData;
              console.log(vm.myData)

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

    width: 100%;
    position: absolute;
    top:0;
    left: 0;

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
    border-radius: 5px;
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
  .title{
    width: 100%;
    padding-left: 15px;
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
    font-size: 13px;
    width:120px;
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
  .foot{
    background-color: #F8F8F8;
    height: 45px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left:0;
    line-height: 45px;
    text-align: center;
  }
</style>
