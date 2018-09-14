<template>
    <div style="position: absolute;top: 50px;height: 100%;overflow: scroll;width: 100%">
      <div style="height: 40px;display: flex;align-items: center;margin-left: 15px;margin-right: 15px">
        <div style="width: 100px;height: 40px;line-height: 40px">当前活动</div>
        <div style="flex: 1;height: 40px;display:flex;justify-content: flex-end;line-height: 40px;color: darkgrey" @click="goPastActivities">查看以往活动>></div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      <div class="none" v-if="flag">
        当前无任何正在报名的活动
      </div>
      <div class="myDiv" v-for="item in data" @click="getApplyPeople(item.acId)">
        <img src="../assets/logo.png" class="myPic">
        <div class="myRightDiv">
          <div class="firstDiv">
            <span style="flex: 1;font-size: 15px;font-weight: bold">{{item.acName}}</span>
            <div style="background-color: deeppink;padding-left: 3px;padding-right: 3px;height: 20px;color: white;line-height: 20px;">
              进行中
            </div>
          </div>
          <div class="introduce">
            <div style="width: 100%;height: 20px;line-height: 20px;display: flex;align-items: center">
              <mu-icon value="query_builder" size="17"></mu-icon>
              <div style="font-size: 12px;margin-left: 5px;color: darkgrey"><span>{{item.hostStartStr.substr(0,17)}}</span><span>--</span><span>{{item.hostEndStr.substr(0,17)}}</span></div>
            </div>
            <div style="width: 100%;height: 20px;line-height: 20px;display: flex;align-items: center;margin-top: 5px">
              <mu-icon value="room" size="17"></mu-icon>
              <span style="font-size: 12px;margin-left: 5px;color: darkgrey">{{item.area}}</span>
            </div>
            <div style="width: 100%;height: 20px;line-height: 20px;display: flex;align-items: center;margin-top: 5px">
              <mu-icon value="supervisor_account" size="17"></mu-icon>
              <div style="font-size: 12px;margin-left: 5px;color: darkgrey"><span style="color: deepskyblue">{{item.acNumber}}</span><span>/</span><span>{{item.ceilNumber}}</span><span></span> (报名人数/总上限)</div>

            </div>
          </div>
        </div>
      </div>
      <div style="height: 40px;display: flex;align-items: center;margin-left: 15px;margin-right: 15px">
        <div style="width: 100px;height: 40px;line-height: 40px">报名审批</div>
        <div style="flex: 1;height: 40px;display:flex;justify-content: flex-end;line-height: 40px;color: darkgrey" @click="allPeople">查看所有报名人员>></div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      <div class="none" v-if="flag1">
        {{placeHolder}}
      </div>
      <div v-for="item in people" v-else >
        <div style="height: 60px;margin: 5px 10px 5px 15px;display: flex;" >
          <div style="height: 60px; flex: 1" >
            <div style="width: 100%;height: 30px;line-height: 30px;font-weight: bold;font-size: 16px">
              黄治文
            </div>
            <div style="height: 30px;line-height: 30px;font-size: 14px;color: #666666">
              {{item.cUserNo}}
              <span style="margin-left: 10px;font-size: 14px;color:#666666">信息中心</span>
              <span style="margin-left: 10px;font-size: 14px;color: #666666">13652452157</span>
            </div>
          </div>
          <div style="width: 50px;height:60px;display: flex;align-items: center;justify-content: center;color: red">
            未审批
          </div>
        </div>
        <div style="height: 30px;width: 100%;margin-left: 15px">
          <mu-button small color="error" style="width: 120px" @click="deletePerson(item.cUserNo,item.acId)">删除该人员</mu-button>
        </div>
        <mu-divider style="margin-left: 14px;margin-right: 14px;margin-top: 8px"></mu-divider>
      </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              data:[],
              flag:false,
              flag1:true,
              people:[],
              placeHolder:'请选择活动',
              cId:''
            }
        },
        created() {

        },
      mounted(){
        let vm=this;
        this.cId=this.$store.state.selectCid
        console.log(this.cId)
        this.getDate24Hours();

      },
      methods:{
        allPeople(){
          const vm =this;
          vm.$router.push('/allPeople')
        },
        goPastActivities(){
          const vm =this;
          vm.$router.push('/pastActivities')
        },
        getDate24Hours(){
          let myDate = new Date();
          let years = myDate.getFullYear();
          let month = myDate.getMonth()+1;
          let day = myDate.getDate();
          let hours = myDate.getHours();
          let minutes = myDate.getMinutes();
          let seconds = myDate.getSeconds();
          console.log(month)
          if(month < 10 ){
            month = "0" + month;
          }
          if(day < 10 ){
            day = "0" + day;
          }
          if(hours < 10){
            hours = "0" + hours;
          }
          if(minutes <10 ){
            minutes = "0" + minutes;
          }
          if(seconds <10 ){
            seconds = "0" + seconds;
          }
          let time = years+'-'+month+'-'+day+' '+hours+':'+minutes+':'+seconds
          console.log("24-hours:"+time);
          this.getActivities(time)
        },
        getActivities(time){
          let vm = this;
          $.ajax({
            url: vm.path + 'findActivityList.json',
            dataType: "json",
            data: {
              cId:vm.cId,
              acReleaseState:1,
              signUpEndStr:'2018-08-01 11:00:42'
            },
            type: "post",
            success: function (res) {
              console.log(res);
              vm.data=res.dataInfo.listData;
              if(vm.data.length===0){
                vm.flag=true
              }
            },
            error: function () {
            }
          });
        },
        getApplyPeople(acId){
          let vm = this;
          $.ajax({
            url: vm.path + 'findAuIdByAcId.json',
            dataType: "json",
            data: {
              acId:acId,
            },
            type: "post",
            success: function (res) {
              console.log(res);
              vm.people=res.dataInfo.listData;
              if(vm.people.length===0){
                vm.placeHolder='当前选择的活动暂无报名人员'
              }else if(vm.people.length!==0){
                vm.flag1=false
              }
            },
            error: function () {
            }
          });
        },
        deletePerson(cUserNo,acId){
          let vm = this;
          $.ajax({
            url: vm.path + 'updateAuIdByUserNo.json',
            dataType: "json",
            data: {
              acId:acId,
              cUserNo:cUserNo,
              public1:localStorage.getItem("userNo"),
            },
            type: "post",
            success: function (res) {
              console.log(res);
              if(res.statusCode===41102){
                vm.$message("删除人员成功")
              }
            },
            error: function () {
            }
          });
        }
      }
    }
</script>
<style scoped>
  .none{
    width: 100%;
    padding: 10px;
    height: 70px;
    display: flex;
    font-size: 16px;
    color: deepskyblue;
    align-items: center;
    justify-content: center;
    border-bottom: solid 3px #eeeeee;
  }
  .myDiv{
    width: 100%;
    padding: 10px;
    height: 110px;
    display: flex;
    align-items: center;
    border-bottom: solid 3px #eeeeee;
  }
  .myPic{
    height:100px;
    width: 100px;
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
</style>

