<template>
  <div class="content" style="overflow-x: hidden">
    <div v-for="item in data" @click="goPastActivityDetails(item.acId,item.status)">
      <div class="myDiv" >
        <img src="../assets/dog.png" class="myPic">
        <div class="myRightDiv">
          <div class="firstDiv">
            <span style="flex: 1;font-size: 15px;font-weight: bold">{{item.acName}}</span>
            <div style="padding-left: 3px;padding-right: 3px;height: 20px;color: white;line-height: 20px;margin-top: 2px" :class="{ notSign: item.notSign,signing:item.signing,notStart:item.notStart,during:item.during,ending:item.ending }">
              {{item.status}}
            </div>
          </div>
          <div class="introduce">
            <div style="width: 100%;height: 20px;line-height: 20px;display: flex;align-items: center;">
              <mu-icon value="query_builder" :size="17" style="width: 17px"></mu-icon>
              <div style="font-size: 12px;margin-left: 5px; flex:1; color: darkgrey;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;"><span>{{item.hostStartStr.substr(0,17)}}</span><span>--</span><span>{{item.hostEndStr.substr(0,17)}}</span></div>
            </div>
            <div style="width: 100%;height: 20px;line-height: 20px;display: flex;align-items: center;margin-top: 5px">
              <mu-icon value="room" :size="17"></mu-icon>
              <span style="font-size: 12px;margin-left: 5px;color: darkgrey">{{item.area}}</span>
            </div>
            <div style="width: 100%;height: 20px;line-height: 20px;display: flex;align-items: center;margin-top: 5px">
              <mu-icon value="supervisor_account" :size="17"></mu-icon>
              <div style="font-size: 12px;margin-left: 5px;color: darkgrey"><span style="color: deepskyblue">{{item.acNumber}}</span><span>/</span><span>{{item.ceilNumber}}</span><span></span> (报名人数/总上限)</div></div>

          </div>
        </div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
    </div>

  </div>
</template>

<script>
    export default {
        data: function () {
            return {
              data:[],
              notSign:false,
              signing:false,
              notStart:false,
              during:false,
              end:false,
              cId:''
            }
        },
        created() {

        },
        mounted() {
          const vm =this;
          this.cId=this.$store.state.selectCid
          this.getDate24Hours()
        },
        methods: {
          goPastActivityDetails(acId,status){
            const vm=this;
            vm.$router.push({
              name:'pastActivityDetails',
              params: {
                id: acId,
                status:status
              }
            })
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
                acReleaseState:1,
                cId:vm.cId,
                activityEndStr:time
//                  '2018-08-01 11:00:42'
              },
              type: "post",
              success: function (res) {
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
        }

    }
</script>
<style scoped>
  .content{
    overflow: scroll;
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    min-height: 80px;
    width: 100%;

  }
  .myDiv{
    box-sizing: border-box;
    width: 100%;
    padding: 15px 10px 15px 10px;
    display: flex;
    align-items: center;

  }
  .myPic{
    height:90px;
    width: 90px;
    justify-content: flex-start;
    border: 1px solid #eeeeee;
    border-radius: 5px;
  }
  .myRightDiv{
    flex:1;
    min-width: 0;

    padding-left: 10px;
  }
  .firstDiv{

    height: 27px;
    display: flex;
  }
  .introduce{

    /*height: 73px;*/
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
