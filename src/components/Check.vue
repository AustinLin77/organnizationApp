<template>
    <div style="overflow-y: hidden;height: 100%">
      <!--<div class="head">-->
        <!--&lt;!&ndash;<form class="form">&ndash;&gt;-->
          <!--&lt;!&ndash;<input   type="search"  placeholder="输入关键字查询社团活动" class="input" >&ndash;&gt;-->
          <!--&lt;!&ndash;<mu-icon value="search" class="search"></mu-icon>&ndash;&gt;-->
        <!--&lt;!&ndash;</form>&ndash;&gt;-->
      <!--</div>-->
      <div style="width: 100%;height:180px;display: flex;flex-wrap: wrap">
        <div style="height: 90px;width: 25%;padding: 10px" v-for="item in data" @click="checkDetails(item.cId)  ">
          <div style="display: flex;align-items: center;justify-content: center">
            <img :src="'http://appinter.sunwoda.com'+item.community.cmFile.fUrl" style="width: 30px;height: 30px;border-radius: 50%">
          </div>
          <p style="text-align: center">{{item.community.cName}}</p>

        </div>
      </div>
    </div>
</template>

<script>
  import { mapMutations } from 'vuex'
    export default {
        data: function () {
            return {
              data:[]
            }
        },
        created() {

        },
      mounted(){
        let vm=this;
        this.getData();

      },
      methods:{
        ...mapMutations([
          'storeSelectCid',
          'storeSelectRootIndex'
        ]),
        getData(){
          let vm = this;
          $.ajax({
            url: vm.path + 'findApplyAdmin.json',
            dataType: "json",
            data: {
              'aType': 1,
              'userNo': localStorage.getItem("userNo"),
              'pageSize': -1,
              'isDelete': 0,
            },
            type: "post",
            success: function (res) {
              console.log(res);
              vm.data=res.dataInfo.listData;
            },
            error: function () {

            }
          });
        },
        checkDetails(cId){
          const vm =this;
          this.storeSelectCid(cId);
          vm.$router.push('/applyFor')
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
</style>

