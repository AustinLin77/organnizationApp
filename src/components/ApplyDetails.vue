<template>
  <div style="overflow: scroll">
    <div style="overflow: scroll;position: absolute;top: 0;bottom: 0;width: 100%">
      <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center">
        <div style="width: 100px;display: flex;align-items: center">工号 : </div>
        <div style="flex: 1;display: flex;justify-content: flex-end">
          {{data.cUserNo}}
        </div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center" >
        <div style="width: 100px;display: flex;align-items: center">姓名 : </div>
        <div style="flex: 1;display: flex;justify-content: flex-end">
          {{data.cmUser.cName}}
        </div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center" >
        <div style="width: 100px;display: flex;align-items: center">性别 : </div>
        <div style="flex: 1;display: flex;justify-content: flex-end">
          {{data.cmUser.gender}}
        </div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center" >
        <div style="width: 100px;display: flex;align-items: center">部门 : </div>
        <div style="flex: 1;display: flex;justify-content: flex-end">
          {{data.cmUser.dept}}
        </div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center" >
        <div style="width: 100px;display: flex;align-items: center">民族 : </div>
        <div style="flex: 1;display: flex;justify-content: flex-end">
          {{data.cmUser.national}}
        </div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center" >
        <div style="width: 100px;display: flex;align-items: center">手机 : </div>
        <div style="flex: 1;display: flex;justify-content: flex-end">
          {{data.cmUser.telPhone}}
        </div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center" >
        <div style="width: 100px;display: flex;align-items: center">短号 : </div>
        <div style="flex: 1;display: flex;justify-content: flex-end">
          {{data.cmUser.tel}}
        </div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center" >
        <div style="width: 100px;display: flex;align-items: center">籍贯 : </div>
        <div style="flex: 1;display: flex;justify-content: flex-end">
          {{data.cmUser.nativePlace}}
        </div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center" >
        <div style="width: 100px;display: flex;align-items: center">出生年月 : </div>
        <div style="flex: 1;display: flex;justify-content: flex-end">
          {{data.cmUser.birthday}}
        </div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center" >
        <div style="width: 100px;display: flex;align-items: center">微信号 : </div>
        <div style="flex: 1;display: flex;justify-content: flex-end">
          {{data.cmUser.weixinNumber}}
        </div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center" >
        <div style="width: 100px;display: flex;align-items: center">一寸证件照 : </div>
        <div style="flex: 1;position: relative;height: 60px;display: flex;justify-content: flex-end;align-items: center">
          <img src="../assets/icon512.png" style="height: 35px;width: 35px">
        </div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center" >
        <div style="width: 100px;display: flex;align-items: center">职位 : </div>
        <div style="flex: 1;display: flex;justify-content: flex-end">
          {{data.cmJob.jName}}
        </div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      <div class="hobby">
        <div class="title">兴趣爱好 : </div>
        <div class="contentaaaa">
          {{data.hobby}}
        </div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      <div class="hobby" style="min-height: 30px">
        <div class="title" style="min-height: 30px">参加社团名称 : </div>
        <div class="contentaaaa" style="min-height: 30px;;display: flex;justify-content: flex-end">
          {{data.community.cName}}
        </div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      <div class="note">
        <mu-icon :size="24" value="star" color="red"></mu-icon>
        <span style="font-size: 6px;display: flex;align-items: center;color: darkgrey">简述自己的爱好，特长，获得的奖励，组织或参加过的活动</span>
      </div>
      <div class="hobby">
        <div class="title">个人简历 : </div>
        <div class="contentaaaa">
          {{data.introduction}}
        </div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      <div class="note">
        <mu-icon :size="24" value="star" color="red"></mu-icon>
        <span style="font-size: 6px;display: flex;align-items: center;color: darkgrey">对所报社团的认识与态度</span>
      </div>
      <div class="hobby">
        <div class="title">自荐理由 : </div>
        <div class="contentaaaa">
          {{data.recommendation}}
        </div>
      </div>
      <div style="height: 30px;line-height:30px;width: 100%;background-color: #eeeeee;color:darkgrey;padding-left: 20px">审批人</div>
      <!--<textarea style="width:94%;height: 60px;margin: 10px;border-radius: 5px;border: solid 1px darkgrey;text-indent: 5px" placeholder="( 必填 )" required v-model="opinion"></textarea>-->
      <div>
        <div style="height: 60px;margin: 10px;display: flex;" >
          <div style="width: 50px;height:60px;display: flex;align-items: center;justify-content: center">
            <mu-checkbox v-model="normal.checkbox" ></mu-checkbox>
          </div>
          <div style="height: 60px;flex: 1" >
            <div style="width: 100%;height: 30px;line-height: 30px;font-weight: bold;font-size: 16px">
              {{data.adminUser.cName}}
            </div>
            <div style="height: 30px;line-height: 30px;font-size: 14px;color: #666666">
              170711129
              <span style="margin-left: 10px;font-size: 14px;color:#666666">{{data.adminUser.dept}}</span>
              <span style="margin-left: 10px;font-size: 14px;color: #666666">{{data.adminUser.telphone}}</span>
            </div>
          </div>
        </div>
      </div>
      <div style="height: 30px;line-height:30px;width: 100%;background-color: #eeeeee;color:darkgrey;padding-left: 20px">审批流程</div>
      <div style="width: 100%;height: 50px;line-height: 50px;text-align: center;color: deepskyblue;font-size: 16px" v-if="data.pId==6">
        用户已成功加入社团
      </div>
      <div class="process" v-if="data.pId==1">
        审批中
      </div>
      <div class="process" v-if="data.pId==2">
        审批通过,等待用户确认
      </div>
      <div class="process" v-if="data.pId==3">
        审批被驳回,等待用户确认
      </div>
      <div class="foot" @click="userComfirm" v-if="data.pId==2">
        确认
      </div>
      <div class="foot" @click="reapply" v-if="data.pId==3">
        重新申请
      </div>
    </div>
  </div>












</template>

<script>
  export default {
    data: function () {
      return {
        cId:'',
        opinion:'',
        aId:'',
        userNo:'',
        data:{
          pId:'',
          cUserNo:'',
          adminUser:{
            cName:'',
            dept:'',
            telphone:''
          },
          cmUser:{
            cUserNo:'',
            cName:'',
            gender:'' ,
            dept:'',
            national:'',
            tel:'',
            telPhone:'',
            nativePlace:'',
            weixinNumber:'',
            birthday:'',
          },
          cmJob:{
            jName:''
          },
          community:{
            cName:''
          },
          hobby:'',
          introdution:'',
          recommendation:'',
          aId:''
        },
        reason:'',
        hobby:'',
        selfFile:'',
        normal: {
          checkbox:true,
        },
      }
    },
    created() {
      let vm=this;
      vm.cId=vm.$route.params.cId;
      console.log(vm.cId)
    },
    mounted() {
      const vm=this;
      this.getData();
    },
    methods: {
      reapply(){
        const vm=this;
        $.ajax({
          url: vm.path + 'userExaminationApply.json ',
          dataType: "json",
          data: {
            aId:vm.data.aId,
            cUserNo:vm.data.cmUser.cUserNo,
            pId:4
          },
          type: "post",
          success: function (res) {
            console.log(res);
          },
          error: function () {
          }
        });
        vm.$router.push({ path: '/apply',
          query: {
            id:vm.cId,
            name:vm.data.community.cName
          }})
      },
      userComfirm(){
        let vm=this;
        $.ajax({
          url: vm.path + 'userExaminationApply.json ',
          dataType: "json",
          data: {
            aId:vm.data.aId,
            cUserNo:vm.data.cmUser.cUserNo,
            pId:4
          },
          type: "post",
          success: function (res) {
            console.log(res);
            vm.data=res.dataInfo.listData[0]
          },
          error: function () {
          }
        });
      },
      getData(){
        let vm=this;
        $.ajax({
          url: vm.path + 'findUserJobByUserNo.json',
          dataType: "json",
          data: {
            cUserNo:localStorage.getItem("userNo"),
            cId:vm.cId
          },
          type: "post",
          success: function (res) {
            console.log(res);
            vm.data=res.dataInfo.listData[0]
          },
          error: function () {
          }
        });
      },
    }

  }
</script>
<style scoped>
  .foot{
    width: 100%;
    height: 40px;
    background-color: deepskyblue;
    color: white;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
  }
  .process{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: deepskyblue;
    font-size: 16px
  }
  .hobby{
    width: 100%;
    min-height: 100px;
    padding: 15px;
    display: flex;
  }
  .title{
    min-height: 80px;
    flex:1;
    text-indent: 5px;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    font-family: 微软雅黑;
  }
  .contentaaaa{
    min-height: 80px;
    width: 220px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .note{
    width: 100%;
    height: 28px;
    padding-right: 10px;
    padding-left: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;

  }
</style>

