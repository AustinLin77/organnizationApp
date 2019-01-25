<template>
    <div>
      <div class="head">
        <form class="form">
          <input   type="search" v-model="search"  placeholder="搜索会员" class="input" onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))" >
          <mu-icon value="search" class="search" @click="goSearch"></mu-icon>
        </form>
      </div>
      <div style="overflow: auto;margin-top: 88px;height:550px">
        <mu-list>
          <div v-for="(item,index) in member" style="height: 50px;font-size: 16px;display: flex;margin: 0 10px 0 10px" >
            <span  style="flex: 1;display: flex;align-items: center;justify-content: flex-start;">{{item.cName}}</span>

              <span style="flex: 1;display: flex;align-items: center;justify-content: flex-end;">{{item.jName}}</span>

          </div>
        </mu-list>
      </div>
      <!--<div style="position: fixed;bottom: 0;width: 100%;height: 40px">-->
        <!--<mu-pagination  :total="100" :current.sync="current" :page-count=count @change="changeNum" ></mu-pagination>-->
      <!--</div>-->
      <!--<mu-button fab color="blue" style="position: fixed;bottom: 120px;right: 20px" @click="goToApply" >-->
        <!--<mu-icon value="add" ></mu-icon>-->
      <!--</mu-button>-->
    </div>
</template>

<script>
    export default {
      data: function () {
        return {
          current:1,
          member:[],
          count:5,
          search:''
        }
      },
      created() {
        let vm=this;
        vm.id=localStorage.getItem('cId');
        this.getMembers()
      },
      methods:{
        goToApply(){
          const vm=this;
          vm.$router.push('/apply')
        },
        profileaa(){
          console.log("aa");
          const vm=this;
          this.$router.push('/profile')
        },
        getMembers(){
          let vm=this;
          $.ajax({
            url: vm.path+'findUserJobByCId.json',
            dataType: "json",
            data: {
              'pageSize':-1,
              'cId':vm.id,
//              'page':1,
              'pId':6
            },
            type: "post",
            success: function(res) {
              console.log(res);
              vm.member=res.dataInfo.listData;
            },
            error: function() {

            }
          });
        },
        changeNum(){
          const vm=this;
          alert(vm.current)
        },
        goSearch(){
          const vm=this;
          if (!vm.search){
            vm.$message("请正确填写要搜索的名字")
          }else if(vm.search){
            $.ajax({
              url: vm.path+'findUserJobByCId.json',
              dataType: "json",
              data: {
                'pageSize':10,
                'cId':vm.id,
                'page':1,
                'pId':6,
                'userName':vm.search
              },
              type: "post",
              success: function(res) {
                console.log(res);
                vm.member=res.dataInfo.listData;
              },
              error: function() {

              }
            })
          }
        }
      }
    }
</script>
<style scoped>
  .head{
    /*background-color:white;*/
    height: 8%;
    display: flex;
    align-items: center;
    width: 100%;
    position:fixed;
    top: 50px;
    justify-content: center;
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

