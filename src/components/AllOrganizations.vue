<template>
  <div style="overflow-y: hidden">

    <div style="width: 100%;height:180px;display: flex;flex-wrap: wrap">
      <div style="height: 90px;width: 25%;padding: 10px" v-for="item in data" @click="organizationDetails(item.cId)  ">
        <div style="display: flex;align-items: center;justify-content: center">
          <img :src="'http://appinter.sunwoda.com'+item.cmFile.fUrl" style="width: 30px;height: 30px;border-radius: 50%">
        </div>
        <p style="text-align: center">{{item.cName}}</p>

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
        let vm= this;
        this.getOrganization()
      },
      methods:{
        ...mapMutations([
          'storeOrganizationKeys',
          'storeSelectCid',
          'storeSelectRootIndex'
        ]),
        getOrganization(){
          let vm = this;
          $.ajax({
            url: vm.path+'findCommunityList.json',
            dataType: "json",
            data: {
              'pageSize':-1,
              'cId':0,
              'page':1,
              'cName':null,
              'isDelete':null
            },
            type: "post",
            success: function(res) {
              console.log(res);
              vm.data=res.dataInfo.listData;
            },
            error: function() {
            }
          });

//            let vm = this;
//            let postData = this.$qs.stringify({
//              'pageSize':-1,
//              'page':1,
//            });
//            this.axios({
//              method:'post',
//              url:'http://172.30.128.32:8083/swdAPP/common/community/findCommunityList.json',
//              data:postData
//            }).then(function (res) {
//              console.log(res);
//              if(res.data.dataInfo.listData.length<=7){
//                vm.data=res.data.dataInfo.listData;
//              }else if(res.data.dataInfo.pageInfo.totalRecord>7){
//                vm.data=res.data.dataInfo.listData.slice(0,7);
//                vm.flag=true;
//              }
//            })
        },
        organizationDetails(id,name){
          let vm = this;
          this.storeSelectCid(id);
          this.$router.push({
            path: '/introduce',
            query: {
              id: id,
              name:name
            }
          })
        },
      }
    }
</script>

<style scoped>
  .content p{
    margin: 0;
  }
  img{
    width: 100%;
  }
</style>
