<template>
    <div style="position: fixed;top: 0;width: 100%">
      <mu-tabs :value.sync="active2" color="blue" indicator-color="yellow" full-width>
        <mu-tab :to="'/introduce?communityId='+vm.id"  >社团简介</mu-tab>
        <mu-tab :to="'/member?communityId='+vm.id"  >社团会员</mu-tab>
        <mu-tab :to="'/organizationActivity?communityId='+vm.id"  >社团活动</mu-tab>

      </mu-tabs>
    </div>
</template>


<script>
    export default {
        data: function () {
            return {
              active2: 0,

            }
        },
        created() {

        },


    }

</script>


