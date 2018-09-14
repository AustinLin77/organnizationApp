<template>
    <div>
      <div style="padding: 15px;position: absolute;top: 0;left: 0;bottom: 50px;">
        <div>
          <mu-text-field v-model="title" hintText="标题" fullWidth style="font-size: 18px;font-weight: bold" ></mu-text-field>
          <mu-text-field v-model="message" hintText="内容" multiLine :rows="3" :rows-max="6" fullWidth  ></mu-text-field>
        </div>
        <div class="icon clearfix">
          <transition name="fade" mode="">
            <div class="emoji-box" v-if="showEmoji" >
              <el-button
                class="pop-close"
                :plain="true"
                type="danger"
                size="mini"
                icon="close"
                @click="showEmoji = false">关闭</el-button>
              <vue-emoji
                @select="selectEmoji">
              </vue-emoji>
              <span class="pop-arrow arrow"></span>
            </div>
          </transition>
        </div>
        <transition-group tag="div" name="list" class="comment">
          <p v-for="(item,index) in data" :key="index" class="item">
            <span v-html="emoji(item)"></span>
          </p>
        </transition-group>
        <div class="img_group">
          <div class="boxaa">
            <div class="imgaaa" v-for="(item,index) in imgArr" :key="index">
              <img :src="item" alt="" style="height: 50px;width: 50px">
              <mu-flat-button label="取消" class="demo-flat-button" @click="deleteImg(index)" style="width: 10px;height: 12px"/>

            </div>
          </div>
        </div>
      </div>
      <div class="foot">
        <div class="innerDiv">
          <div style="width: 90px">

            <mu-flat-button label="取消" class="demo-flat-button"/>
          </div>
          <div style="width: 90px;display: flex;align-items: center">
            <a @change="changeImg($event)" class="file">
              <mu-icon value="photo_size_select_actual" ></mu-icon>
              <input type="file" name="" id="file" accept="image/*" multiple="multiple">
            </a>
          </div>
          <!--<div style="width: 90px;display: flex;align-items: center">-->
            <!--<mu-icon value="sentiment_very_satisfied" @click="showEmoji = !showEmoji" ></mu-icon>-->
          <!--</div>-->
          <div style="flex: 1;display: flex;justify-content: flex-end">
            <mu-flat-button label="发布" class="demo-flat-button" @click="submit"/>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import vueEmoji from './emoji.vue'
    export default {
        data: function () {
            return {
              value:'',
              showEmoji: false,
              data: [],
              imgData:'',
              imgArr:[],
              imgSrc:'',
              allowAddImg:true,
              title:'',
              message:'',
              files:[]
            }
        },
        created() {

        },
      methods:{
        selectEmoji (code) {
          this.showEmoji = false;
          this.value += code
        },
        submit () {
          var vm = this;
          this.data.push(this.value);
          this.value = '';
          if(!vm.title){
            vm.$message("请正确填写标题");
            return
          }
          if(!vm.message){
            vm.$message("请正确填写内容");
            return
          }
          var formData = new FormData();
          for(var i=0;i<vm.files.length;i++){
            formData.append('photoFiles',vm.files[i]);
          }
          formData.append('userNo',localStorage.getItem("userNo"));
          formData.append('message',vm.message);
          formData.append('mTitle',vm.title);
          formData.append('fGroupId',2);
          formData.append('fGroupName','社团系统');
          formData.append('pId',0);
          formData.append('rmessageId',0);
          formData.append('rLevel',0);
          formData.append('mType','communityMessage');
          formData.append('plate','Community');
          formData.append('userName',localStorage.getItem("cName"));
          $.ajax({
            url: vm.path+'makeStatement.json',
            type: "post",
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            mimeType: "multipart/form-data",
            success: function (res) {
              const obj = JSON.parse(res);
              vm.$message(obj.message)
              setTimeout(() => {
               vm.$router.push('/message')
              }, 2000)
            },
            error:function () {
              vm.$message("上传错误");
            }
          })

        },
        changeImg(e){
          const vm=this;
          if( !this.allowAddImg ){
            this.$message({
              showClose: true,
              message: '最多只能上传五张图片',
              type: 'warning'
            });
            return
          }
          var _this = this;
          var imgLimit = 1024;
          var files = e.target.files;
          var image = new Image();
          if(files.length>0){
            var dd = 0;
            var timer = setInterval(function(){
              if(files.item(dd).type != 'image/png'&&files.item(dd).type != 'image/jpeg'&&files.item(dd).type != 'image/gif'){
                return false;
              }
              if(files.item(dd).size>imgLimit*102400){
                //to do sth
              }else{
                var file=document.getElementById('file');
                vm.files.push(file.files[0]);
                image.src = window.URL.createObjectURL(files.item(dd));
                image.onload = function(){
                  // 默认按比例压缩
                  var w = image.width,
                    h = image.height,
                    scale = w / h;
                  w = 200;
                  h = w / scale;
                  // 默认图片质量为0.7，quality值越小，所绘制出的图像越模糊
                  var quality = 0.7;
                  //生成canvas
                  var canvas = document.createElement('canvas');
                  var ctx = canvas.getContext('2d');
                  // 创建属性节点
                  var anw = document.createAttribute("width");
                  anw.nodeValue = w;
                  var anh = document.createAttribute("height");
                  anh.nodeValue = h;
                  canvas.setAttributeNode(anw);
                  canvas.setAttributeNode(anh);
                  ctx.drawImage(image, 0, 0, w, h);
                  var ext = image.src.substring(image.src.lastIndexOf(".")+1).toLowerCase();//图片格式
                  var base64 = canvas.toDataURL("image/"+ext, quality );
                  console.log(base64);
                  // 回调函数返回base64的值
                  if(_this.imgArr.length<=4){
                    _this.imgArr.unshift('');
                    _this.imgArr.splice(0, 1, base64);
                    console.log(_this.imgArr)//替换数组数据的方法，此处不能使用：this.imgArr[index] = url;
                    if(_this.imgArr.length>=5){
                      _this.allowAddImg = false;
                    }
                  }
                }
              }

              if(dd<files.length-1){
                dd++;
              }else{
                clearInterval(timer);
              }
            },1000)
          }
        },
        deleteImg: function(index){
          this.imgArr.splice(index,1);
          if(this.imgArr.length<5){
            this.allowAddImg = true;
          }
        },

      },
      components: {
        vueEmoji

      }
    }
</script>
<style scoped>
  .foot{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height:50px;
  }
  .innerDiv{
    width: 100%;
    height:100%;
    padding: 5px;
    background-color: #eeeeee;
    display: flex;
    align-items: center;
  }
  .emoji-box {
    width: 100%;
    height: 250px;
    position: absolute;
    z-index: 10;
    left: 0px;
   bottom: 0px;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.2);
    background: white;
  }
  .arrow {
    left: 10px;
  }
  .img_group{
    width: 100%;
    height:250px;
  }
  .boxaa{
    width: 100%;
    height: 80%;
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
  }
  .img_box{
    width: 100%;
    height: 20%;
  }
  .imgaaa{
    width: 60px;
    height: 70px;
    margin-right: 15px;
    margin-bottom: 15px;
  }
  .file {
    border-radius: 4px;
    overflow: hidden;
    color: black;
    text-decoration: none;
    text-indent: 0;
    display: flex;
    align-items: center;
    text-align: center;

  }
  .file input {
    position: absolute;
    font-size: 20px;
    width: 50px;
    top: 0;
    opacity: 0;
  }
  .file:hover {
    background: #AADFFD;
    border-color: #78C3F3;

    color: #004974;
    text-decoration: none;
  }
</style>



