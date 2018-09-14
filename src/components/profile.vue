<template>
  <div>
    <div class="hobby">
      <div class="title">兴趣爱好</div>
      <div class="content">{{data.hobby}}</div>
    </div>
    <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
    <div class="hobby" style="min-height: 30px">
      <div class="title" style="min-height: 30px">参加社团名称</div>
      <div class="content" style="min-height: 30px">{{data.community.cName}}</div>
    </div>
    <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
    <div class="note">
      <mu-icon :size="24" value="star" color="red"></mu-icon>
      <span style="font-size: 10px;display: flex;align-items: center;color: darkgrey">简述自己的爱好，特长，获得的奖励，组织或参加过的活动</span>
    </div>
    <div class="hobby">
      <div class="title">个人简历</div>
      <div class="content">{{data.introduction}}</div>
    </div>
    <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
    <div class="note">
      <mu-icon :size="24" value="star" color="red"></mu-icon>
      <span style="font-size: 10px;display: flex;align-items: center;color: darkgrey">对所报社团的认识与态度</span>
    </div>
    <div class="hobby">
      <div class="title">自荐理由</div>
      <div class="content">{{data.recommendation}}</div>
    </div>
    <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
  </div>

</template>

<script>
    export default {
        data: function () {
            return {
              data:{}
            }
        },
        created() {
          const vm=this;
          this.data=this.$route.params.data;
          console.log(this.data)
        },
      mounted(){

      }
    }
</script>

<style scoped>
  .hobby{
    width: 100%;
    min-height: 100px;
    padding: 10px;
    display: flex;
  }
  .title{
    min-height: 80px;
    flex:1;
    text-indent: 5px;
    font-weight: 600;

    font-size: 16px;
    font-family: 宋体;
  }
  .content{
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
