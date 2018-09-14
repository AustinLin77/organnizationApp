<template>
    <div id="apply" style="position: absolute;top: 50px;height: 90%;overflow: scroll;width: 100%"><div style="height: 60px;margin: 10px;display: flex;border-bottom: solid 1px #eeeeee;margin-left: 15px" v-for="item in data" @click="goUserProfile(item.cmUser.cUserNo,item.aId)">
        <div style="height: 60px; flex: 1" >
          <div style="width: 100%;height: 30px;line-height: 30px;font-weight: bold;font-size: 16px">
            {{item.cmUser.cName}}
          </div>
          <div style="height: 30px;line-height: 30px;font-size: 14px;color: #666666">
            {{item.cmUser.cUserNo}}
            <span style="margin-left: 10px;font-size: 14px;color:#666666">{{item.cmUser.dept}}</span>
            <span style="margin-left: 10px;font-size: 14px;color: #666666">{{item.cmUser.telPhone}}</span>
          </div>
        </div>
        <div style="width: 50px;height:60px;display: flex;align-items: center;justify-content: center;color: red">
          未审批
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              data:[],
              cId:''
            }
        },
        created() {

        },
      mounted(){
        let vm=this;
        this.cId=this.$store.state.selectCid
        this.getData()
      },
      methods:{
        goUserProfile(userNo,id){
          let vm = this;
          this.$router.push(
            {
              name:'userProfile',
              params: {
                userNo: userNo,
                id:id
              }
            })
        },
        getData(){
          let vm = this;
          $.ajax({
            url: vm.path + 'findUserJobByUserNo.json',
            dataType: "json",
            data: {
              'cId': vm.cId,
              'pId':1,
            },
            type: "post",
            success: function (res) {
              console.log(res);
              vm.data=res.dataInfo.listData;
              if(vm.data.length===0){
                vm.$message('当前暂无入社申请')
              }
            },
            error: function () {



            }
          });
        }
      }
    }
</script>

