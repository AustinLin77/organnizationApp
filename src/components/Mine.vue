<template>
    <div style="background-color: #eeeeee;position: absolute;top: 0;left: 0;height: 100%;width: 100%">
       <div style="text-align: center;width: 100%;padding-top: 20px;padding-bottom: 30px;">
         <div style="background-color: white">
           <div style="padding-top: 10px;display: flex;justify-content: center">
             <div style="height: 70px;width: 70px;position: relative">
               <a @change="changeImga($event)" class="mya">
                 <img :src="photoUrl" style="width:70px; height:70px; border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%; overflow:hidden;" id="myImg">
                 <input type="file" name="" id="filea" accept="image/*" multiple="multiple">
               </a>
             </div>
           </div>
           <div style="display: flex;align-items: center;justify-content: center;margin-top: 10px;padding-bottom: 10px">
             <div style="border: none;background-color: white;width: 160px;text-align: center;height: 30px;font-size: 16px;line-height: 30px"  >{{nickName}}</div>
             <!--<mu-icon value="create" class="edit" @click="editName"></mu-icon>-->
           </div>
         </div>
         <div class="text">
           <mu-list style="padding:0 15px 0 15px;width: 100%;">
             <mu-list-item  :ripple="true" @click="goMyProfile" title="我的资料" >
               <mu-icon value="star" color="primary" slot="left"></mu-icon>
             </mu-list-item>
             <mu-divider></mu-divider>
             <mu-list-item  :ripple="true" @click="goMyOrganization" title="我的社团">
               <mu-icon value="star" color="primary" slot="left"></mu-icon>
             </mu-list-item>
             <mu-divider></mu-divider>
             <mu-list-item  :ripple="true" @click="goMyApply" title="我的社团申请">
               <mu-icon value="star" color="primary" slot="left"></mu-icon>
             </mu-list-item>
             <mu-divider></mu-divider>
             <mu-list-item  :ripple="false" @click="goMyActivities" title="我参加的活动">
               <mu-icon value="star" color="primary" slot="left"></mu-icon>
             </mu-list-item>
             <mu-divider></mu-divider>
             <mu-list-item  :ripple="false" @click="goMessages" title="我的留言">
               <mu-icon value="star" color="primary" slot="left"></mu-icon>
             </mu-list-item>
             <mu-divider></mu-divider>
           </mu-list>
         </div>
       </div>
    </div>
</template>

<script>
  import { mapMutations } from 'vuex'

    export default {

      data: function () {
            return {
              flag:true,
              nickName:'',
              photoUrl:'http://appinter.sunwoda.com',
              filesa:[],
              uId:'',
              cPhotoId:''
            }
        },
        created() {

        },
      mounted(){
        let vm=this;
        this.storeSelectRootIndex("mine")
        this.getOrganization()
      },
      methods:{
        ...mapMutations([
          'storeSelectRootIndex'
        ]),
        changeImga(e){
          const vm=this;
          console.log(vm.uId)
          if(vm.uId==0){
            vm.$message("您还未完善个人资料,请前往完善个人资料")
            vm.$router.push('/myProfile')
          }else{
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
                  var file=document.getElementById('filea');
                  vm.filesa=file.files[0];
                  console.log(vm.filesa)
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
                    _this.imgArra=[];
                    _this.imgArra.push(base64);
                    console.log( _this.imgArra)
                    document.getElementById('myImg').setAttribute('src',_this.imgArra[0])
                  }
                }

                if(dd<files.length-1){
                  dd++;
                }else{
                  clearInterval(timer);
                }
                vm.revise()
              },1000)
            }


          }


        },
        revise(){
          let vm=this;
          var formData = new FormData();
          formData.append('uId',vm.uId);
          formData.append('fGroupName','社团系统');
          formData.append('fGroupId',2);
          formData.append('cUserNo',localStorage.getItem("userNo"));
          formData.append('photo',vm.filesa);
          formData.append('cPhotoId',vm.cPhotoId);
          formData.append('photoUrl',vm.photoUrl);
          $.ajax({
            url: vm.path+'updateCMUser.json',
            type: "post",
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            mimeType: "multipart/form-data",
            success: function (res) {
              let result=JSON.parse(res);
              console.log(result);
              if(result.message==='操作成功'){
                vm.$message('修改个人头像成功')
              }
            },
            error: function () {
            }
          });
        },
        getOrganization(){
          const vm=this;
          $.ajax({
            url: vm.path+'findCMUserByUserNo.json',
            dataType: "json",
            data: {
              'cUserNo':localStorage.getItem("userNo"),
            },
            type: "post",
            success: function (res) {
              console.log(res);
              vm.nickName=res.dataInfo.listData[0].cNickName;
              vm.url+=res.dataInfo.listData[0].cPhotoFile.fUrl
              vm.uId=res.dataInfo.listData[0].uId;
//              vm.cFileId=res.dataInfo.listData[0].cFileId;
//              if(!res.dataInfo.listData[0].cmFile){
//                vm.fUrl='';
//              }else{
//                vm.fUrl=res.dataInfo.listData[0].cmFile.fUrl;
//              }
              vm.cPhotoId=res.dataInfo.listData[0].cPhotoId;
              if(!res.dataInfo.listData[0].cPhotoFile){
                vm.photoUrl='../assets/icon512.png';
              }else{
                vm.photoUrl+=res.dataInfo.listData[0].cPhotoFile.fUrl
              }



            },
            error: function () {
            }
          });
        },
        goMyActivities(){
          const vm=this;
          this.$router.push(
            '/myActivitiesList',
          )
        },
        goMyApply(){
          const vm=this;
          this.$router.push(
            '/myApply',
          )
        },
        editName(){
          const vm=this;
          vm.flag=!vm.flag;
        },
        goMyProfile(){
          const vm=this;
          this.$router.push(
             '/myProfile',
          )
        },
        goMyOrganization(){
          const vm=this;
          this.$router.push(
            '/myOrganization',
          )
        },
        goMessages(){
          const vm=this;
          this.$router.push(
            '/message',
          )
        }
      }
    }
</script>

<style scoped>
  html{

    height: 100%;
  }
  .file {
    position: relative;
    display: inline-block;
    background: #D0EEFF;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    overflow: hidden;
    color: #1E88C7;
    text-decoration: none;
    text-indent: 0;
    height: 25px;
    width: 65px;

  }
  .mya{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
  }
  .mya input{
    position: absolute;
    opacity: 0;
    top:0;
    left: 0;
    height: 70px;
    width: 70px;
  }
  .text{
    margin-top: 20px;
    width: 100%;
    display: flex;
    background-color: white
  }

</style>
