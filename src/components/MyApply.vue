<template>
  <div>
    <div v-for="item in data" >
      <div class="myDiv">
        <img :src="'http://appinter.sunwoda.com'+item.community.cmFile.fUrl" class="myPic">
        <div class="myRightDiv">
          <div class="firstDiv">
            <span style="flex: 1;font-size: 15px;font-weight: bold;text-indent: 5px">{{item.community.cName}}</span>
          </div>
          <div class="introduce">{{item.community.cIntroduction}}</div>
          <div class="myButton">
            <mu-raised-button label="申请详情" class="demo-raised-button" style="height: 25px; min-width: 50px" primary @click="goApplyDetails(item.cId)" />
            <!--<mu-button small color="primary" style="height: 20px; min-width: 55px" @click="goProfile(item)">我的简历</mu-button>-->
            <!--<mu-button small color="primary" style="height: 20px; min-width: 55px" @click.stop="goApplyDetails(item.cId)">申请详情</mu-button>-->
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
        data:[]
      }
    },
    created() {

    },
    mounted(){
      this.getData()
    },
    methods:{
      goApplyDetails(cId){
        const vm=this;
        this.$router.push({
            name:'applyDetails',
            params: {
              cId: cId
            }
          }

        )
      },
      getData(){
        let vm=this;
        $.ajax({
          url: vm.path+'findUserJobByUserNo.json',
          dataType: "json",
          data: {
            'cUserNo':localStorage.getItem("userNo"),
          },
          type: "post",
          success: function(res) {
            console.log(res);
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

    padding: 10px;
    height: 130px;
    display: flex;


  }
  .myPic{
    height:110px;
    width: 110px;
    justify-content: flex-start;
  }
  .myRightDiv{
    position:relative;
    min-height: 120px;
    padding: 5px;
    width: 100%;
  }
  .myButton{
    position: absolute;
    bottom: 10px;
    width: 100%;
    height: 30px;
    line-height: 30px;
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
    text-indent: 5px
  }
</style>

