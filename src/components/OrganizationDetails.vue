<template>
    <div >
      <div style="position: absolute;top: 0;width: 100%">
        <mu-tabs :value.sync="active2" color="blue" indicator-color="yellow" full-width >
          <mu-tab to="/introduce" active replace>社团简介</mu-tab>
          <mu-tab to="/member" replace>社团会员</mu-tab>
          <mu-tab to="/organizationActivity" replace >社团活动</mu-tab>
        </mu-tabs>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
  export default {
    data: function () {
      return {
        id:'',
        data:[],
        active2: 0
      }
    },
    created() {
      this.getOrganizationDetails()
    },
    mounted(){
      document.body.style.overflow='hidden';
    },
    methods:{
      getOrganizationDetails(){
        let vm=this;
        vm.id=vm.$route.query.id;
        localStorage.setItem('cId',vm.id);
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
          },
          error: function() {
          }
        });
      }
    }
  }
</script>
<style>

</style>

