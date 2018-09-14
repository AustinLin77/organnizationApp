<!--<template>-->
  <!--<div class="wrap">-->
    <!--测试，左划删除-->
    <!--<div class="delete" v-for="i in 10">-->
      <!--<div class="slider">-->
        <!--<div class="content" @touchstart='touchStart($event,i)' @touchmove='touchMove' @touchend='touchEnd' :style="deleteSlider">-->
          <!--&lt;!&ndash; 插槽中放具体项目中需要内容         &ndash;&gt;-->
          <!--列表-->
          <!--<slot>-->
            <!--<div style="width: 100%;height: 50px; display: flex;font-size: 14px;padding: 8px;align-items: center">-->
            <!--<span style="flex: 1">张三三</span><span style="flex: 1">171215425</span><span style="flex: 1">信息中心</span><span style="flex: 1">1111111111</span>-->
            <!--</div>-->
            <!--<mu-divider style="margin-left: 8px;margin-right: 8px"></mu-divider>-->
          <!--</slot>-->
        <!--</div>-->
        <!--<div class="remove" ref='remove' @click="deleteEvent">-->
          <!--删除-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->
<!--<script>-->
  <!--let _self;-->

  <!--export default {-->
    <!--data() {-->
      <!--return {-->
        <!--startX: 0, //触摸位置-->
        <!--endX: 0, //结束位置-->
        <!--moveX: 0, //滑动时的位置-->
        <!--disX: 0, //移动距离-->
        <!--deleteSlider: '', //滑动时的效果,使用v-bind:style="deleteSlider"-->
      <!--}-->

    <!--},-->
    <!--methods: {-->
      <!--touchStart(ev,i) {-->
        <!--console.log(i)-->
        <!--ev = ev || event-->
        <!--//tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕-->

        <!--if (ev.touches.length == 1) {-->
          <!--// 记录开始位置-->
          <!--this.startX = ev.touches[0].clientX;-->
        <!--}-->
      <!--},-->
      <!--touchMove(ev) {-->
        <!--ev = ev || event;-->
        <!--//获取删除按钮的宽度，此宽度为滑块左滑的最大距离-->
        <!--let wd = this.$refs.remove.offsetWidth;-->
        <!--if (ev.touches.length == 1) {-->
          <!--// 滑动时距离浏览器左侧实时距离-->
          <!--this.moveX = ev.touches[0].clientX-->

          <!--//起始位置减去 实时的滑动的距离，得到手指实时偏移距离-->
          <!--this.disX = this.startX - this.moveX;-->
          <!--console.log(this.disX)-->
          <!--// 如果是向右滑动或者不滑动，不改变滑块的位置-->
          <!--if (this.disX < 0 || this.disX == 0) {-->
            <!--this.deleteSlider = "transform:translateX(0px)";-->
            <!--// 大于0，表示左滑了，此时滑块开始滑动-->
          <!--} else if (this.disX > 0) {-->
            <!--//具体滑动距离我取的是 手指偏移距离*5。-->
            <!--this.deleteSlider = "transform:translateX(-" + this.disX * 5 + "px)";-->

            <!--// 最大也只能等于删除按钮宽度-->
            <!--if (this.disX * 5 >= wd) {-->
              <!--this.deleteSlider = "transform:translateX(-" + wd + "px)";-->

            <!--}-->
          <!--}-->
        <!--}-->
      <!--},-->
      <!--touchEnd(ev) {-->
        <!--console.log('touchEnd');-->
        <!--ev = ev || event;-->
        <!--let wd = this.$refs.remove.offsetWidth;-->
        <!--if (ev.changedTouches.length == 1) {-->
          <!--let endX = ev.changedTouches[0].clientX;-->

          <!--this.disX = this.startX - endX;-->
          <!--console.log(this.disX)-->
          <!--//如果距离小于删除按钮一半,强行回到起点-->
          <!--if ((this.disX * 5) < (wd / 2)) {-->

            <!--this.deleteSlider = "transform:translateX(0px)";-->
          <!--} else {-->
            <!--//大于一半 滑动到最大值-->
            <!--this.deleteSlider = "transform:translateX(-" + wd + "px)";-->
          <!--}-->
        <!--}-->
      <!--},-->
      <!--deleteEvent() {-->
        <!--alert('您点击了删除！')-->
      <!--},-->
    <!--}-->

  <!--};-->

<!--</script>-->
<!--&lt;!&ndash; Add "scoped" attribute to limit CSS to this component only &ndash;&gt;-->
<!--<style scoped >-->

    <!--.slider {-->
      <!--width: 100%;-->
      <!--height: 3rem;-->
      <!--position: relative;-->
      <!--user-select: none;}-->
      <!--.content {-->
        <!--position: absolute;-->
        <!--left: 0;-->
        <!--right: 0;-->
        <!--top: 0;-->
        <!--bottom: 0;-->
        <!--background: green;-->
        <!--z-index: 100; //    设置过渡动画-->
        <!--transition: 0.3s;-->
      <!--}-->
      <!--.remove {-->
        <!--position: absolute;-->
        <!--width: 120px;-->
        <!--height: 3rem;-->
        <!--background: red;-->
        <!--right: 0;-->
        <!--top: 0;-->
        <!--color: #fff;-->
        <!--text-align: center;-->
        <!--font-size: 40px;-->
        <!--line-height: 3rem;-->
      <!--}-->



<!--</style>-->

<template>
  <div class="delete" id="delete">
    <div class="slider" v-for="(item,i) in member" >
      <div class="content"
           @touchstart='touchStart($event,i)'
           @touchmove='touchMove($event,i)'
           @touchend='touchEnd($event,i)'
           >
        <slot >
          <div style="width: 100%;height: 50px; display: flex;font-size: 14px;padding: 15px;align-items: center">
            <span style="flex: 1;display: flex;justify-content: flex-start;font-size: 15px">{{item.cName}}</span><span style="flex: 1;display: flex;justify-content: flex-end;font-size: 15px">{{item.jName}}</span>
          </div>
          <mu-divider style="margin-left: 8px;margin-right: 8px"></mu-divider>
        </slot>
      </div>
      <div class="remove" id='remove' @click="deletePerson">
        删除
      </div>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        startX:0,   //触摸位置
        endX:0,     //结束位置
        moveX: 0,   //滑动时的位置
        disX: 0,    //移动距离
        deleteSlider: '',//滑动时的效果,使用v-bind:style="deleteSlider"
        cId:'',
        member:[]
      }

    },
    mounted(){
      let vm=this;
      this.cId=this.$store.state.selectCid
      this.getMembers()
    },
    methods:{
      getMembers(){
        let vm=this;
        $.ajax({
          url: vm.path+'findUserJobByCId.json',
          dataType: "json",
          data: {
            'pageSize':-1,
            'cId':vm.cId,
            'pId':6
          },
          type: "post",
          success: function(res) {
            console.log(res);
            vm.member=res.dataInfo.listData;
            vm.$nextTick(function () {
              var total =document.getElementById("delete").children
              for(var a=0;a<total.length;a++){
                total[a].getElementsByTagName('div')[0].setAttribute("id",a);
              }
            })

          },
          error: function() {

          }
        });
      },
      deletePerson(){

      },
      touchStart(ev,i){
        ev= ev || event;
        //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
        if(ev.touches.length == 1){
          // 记录开始位置
          this.startX = ev.touches[0].clientX;
        }

      },
      touchMove(ev,i){
        console.log(i)

        ev = ev || event;
        //获取删除按钮的宽度，此宽度为滑块左滑的最大距离
        let wd=document.getElementById("remove").offsetWidth
        if(ev.touches.length == 1) {
          // 滑动时距离浏览器左侧实时距离
          this.moveX = ev.touches[0].clientX;
          //起始位置减去 实时的滑动的距离，得到手指实时偏移距离
          this.disX = this.startX - this.moveX;
          // 如果是向右滑动或者不滑动，不改变滑块的位置
          if(this.disX < 0 || this.disX == 0) {
            document.getElementById(i).style="transform:translateX(0px)"

            // 大于0，表示左滑了，此时滑块开始滑动
          }else if (this.disX > 0) {
            //具体滑动距离我取的是 手指偏移距离*5。
            document.getElementById(i).style="transform:translateX(-" + this.disX*5 + "px)";
            // 最大也只能等于删除按钮宽度
            if (this.disX*5 >=wd) {
              document.getElementById(i).style="transform:translateX(-" +wd+ "px)"


            }
          }
        }
      },
      touchEnd(ev,i){

        ev = ev || event;
        let wd=document.getElementById("remove").offsetWidth
        if (ev.changedTouches.length == 1) {
          let endX = ev.changedTouches[0].clientX;
          this.disX = this.startX - endX;
          //如果距离小于删除按钮一半,强行回到起点
          if ((this.disX*5) < (wd/2)) {
            document.getElementById(i).style= "transform:translateX(0px)";
          }else{
            //大于一半 滑动到最大值
            document.getElementById(i).style= "transform:translateX(-"+wd+ "px)";
          }
        }
      }
    }
  }
</script>


<style scoped >
  .slider {
    width: 100%;
    height: 50px;
    position: relative;
    user-select: none;
  }
  .content{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color:white;
    z-index: 100;
  //    设置过渡动画
  transition: 0.3s;
  }
  .remove{
    position: absolute;
    width:80px;
    height:50px;
    background:red;
    right: 0;
    top: 0;
    color:white;
    text-align: center;
    font-size: 18px;
    line-height: 50px;
  }
</style>

