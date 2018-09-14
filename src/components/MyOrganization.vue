<template>
  <div>
    <div v-for="item in data">
      <div class="myDiv" >
        <img :src="'http://appinter.sunwoda.com'+item.community.cmFile.fUrl" class="myPic">
        <div class="myRightDiv">
          <div class="firstDiv">
            <span style="flex: 1;font-size: 15px;font-weight: bold">{{item.community.cName}}</span>
            <!--<mu-button small color="primary" style="height: 20px; min-width: 55px" @click="goProfile(item)">我的简历</mu-button>-->
            <mu-raised-button label="我的简历" class="demo-raised-button" style="height: 25px; min-width: 50px" primary @click="goProfile(item)" id="myButton"/>
          </div>
          <div class="introduce">{{item.community.cIntroduction}}</div>
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
              data:[]
            }
        },
        created() {

        },
      mounted(){
         this.getData()
      },
      methods:{
        getData(){
          let vm=this;
          $.ajax({
            url: vm.path+'findUserJobByUserNo.json',
            dataType: "json",
            data: {
             'cUserNo':localStorage.getItem("userNo"),
              'pId':6
            },
            type: "post",
            success: function(res) {
              console.log(res);
              if(res.dataInfo.listData.length===0){
                vm.$message("您当前未参加任何社团")
              }
              vm.data=res.dataInfo.listData
            },
            error: function() {
            }
          });
        },
          goProfile(item){
            const vm=this;
            this.$router.push({name:'profile',params:{data:item}}
            )
          }
      }
    }
</script>

<style scoped>
  .myDiv{
    width: 100%;
    padding: 10px;
    height: 110px;
    display: flex;
    align-items: center;
  }
  .myPic{
    height:90px;
    width: 90px;
    justify-content: flex-start;
  }
  .myRightDiv{
    flex:1;
    height: 100px;
    padding: 5px;
  }
  .firstDiv{
    width: 100%;
    height: 30px;
    display: flex;
  }
  .introduce{
    width: 100%;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap:break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
</style>
