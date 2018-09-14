<template>
    <div style="position: absolute;top: 50px;height: 90%;overflow: scroll;width: 100%">
      <div style="padding: 15px;width: 100%;text-indent: 15px;padding-bottom: 10px">{{data.cIntroduction}}</div>
      <div style="padding: 15px;width: 100%;padding-bottom: 10px"><span style="font-weight: bold;font-size: 15px;color: darkgrey">一 、社团名称 : </span>{{data.cName}}</div>
      <div style="padding: 15px;width: 100%;padding-bottom: 10px"><span style="font-weight: bold;font-size: 15px;color: darkgrey">二 、社团性质 : </span>{{data.cType}}</div>
      <div style="padding: 15px;width: 100%;padding-bottom: 10px"><span style="font-weight: bold;font-size: 15px;color: darkgrey">三 、社团愿景 : </span>{{data.cWill}}</div>
      <div style="padding: 15px;width: 100%;padding-bottom: 10px"><span style="font-weight: bold;font-size: 15px;color: darkgrey">四 、社团宗旨 : </span>{{data.cObjective}}</div>
      <div style="padding: 15px;width: 100%;padding-bottom: 10px">
        <span style="font-weight: bold;font-size: 15px;color: darkgrey">五 、组织架构 : </span>
      </div>
      <div>
        <mu-list style="overflow: hidden">
          <div v-for="(item,index) in job" style="width: 100%;height: 50px;padding: 10px 20px 10px 20px;display: flex">
            <div style="width: 50px;display: flex;justify-content: flex-start;align-items: center">
              <mu-icon value="star" color="blue" ></mu-icon>
            </div>
            <div style="flex: 1;display: flex;justify-content: flex-start;align-items: center">
              {{item.jName}}
            </div>
            <!--<mu-list-item :ripple="false"  :key="index" style="height: 40px" :title='item.jName'>-->
              <!--<mu-icon value="star" color="blue" slot="left"></mu-icon>-->
              <!--&lt;!&ndash;<span>{{item.jName}}</span>&ndash;&gt;-->
            <!--</mu-list-item>-->
          </div>

        </mu-list>
      </div>
      <mu-float-button icon="add" class="demo-float-button" style="position: fixed;bottom: 120px;right: 20px" @click="goToApply"/>
    </div>
</template>

<script>
    export default {
      data: function () {
        return {
          id:'',
          data:[],
          job:[],
          namea:'',

        }
      },
      created() {
        let vm=this;
        vm.id=this.$store.state.selectCid
        console.log(vm.id);
        this.getOrganizationDetails();
        this.getCmJob()
      },
      mounted(){
        let vm=this;
        vm.namea=vm.$route.query.name;

      },
      methods:{
        goToApply(){
          const vm=this;
          vm.$router.push({ path: '/apply',
            query: {
              id:vm.id,
              name:vm.namea
            }})
        },
        getOrganizationDetails(){
          let vm=this;
          $.ajax({
            url: vm.path+'findCommunityList.json',
            dataType: "json",
            data: {
              'pageSize':-1,
              'cId':vm.id,
              'page':1,
              'cName':null,
              'isDelete':null
            },
            type: "post",
            success: function(res) {
              console.log(res);
              vm.data=res.dataInfo.listData[0];
              console.log(vm.data)
            },
            error: function() {

            }
          });
        },
        getCmJob(){
          let vm=this;
          $.ajax({
            url: vm.path+'findCMJob.json',
            dataType: "json",
            data: {
              'pageSize':-1,
              'cId':vm.id,
              'page':1,
              'jName':null,
              'jLevel':0,
              'pjId':0,
              'jArea':null,
              'isDelete':0,
              'jId':0
            },
            type: "post",
            success: function(res) {
              console.log(res);
              vm.job=res.dataInfo.listData;
            },
            error: function() {
            }
          });
        }
      }
    }
</script>


