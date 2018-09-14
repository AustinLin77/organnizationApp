<template>
    <div style="overflow-y: scroll;overflow-x: hidden" id="">
      <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center">
          <div style="width: 100px;display: flex;align-items: center">工号 : </div>
          <div style="flex: 1">
            <input style="border: none;width: 100%;height: 40px;text-align: right;background-color: white" v-model="cUserNo" :disabled="flag"/>
          </div>
        </div>
        <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
        <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center" >
          <div style="width: 100px;display: flex;align-items: center">姓名 : </div>
          <div style="flex: 1">
            <input style="border: none;width: 100%;height: 40px;text-align: right;background-color: white" v-model="cName" :disabled="flag"/>
          </div>
        </div>
        <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
        <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center" >
          <div style="width: 100px;display: flex;align-items: center">性别 : </div>
          <div  class="mySex">
            <mu-select-field v-model="gender" :labelFocusClass="['label-foucs']" :disabled="flag">
              <mu-menu-item v-for="text,index in list" :key="index" :value="text.val" :title="text.label" />
            </mu-select-field>
            <!--<input style="border: none;width: 100%;height: 40px;text-align: right;background-color: white" v-model="gender" :disabled="flag"/>-->
          </div>
        </div>
        <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
        <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center" >
          <div style="width: 100px;display: flex;align-items: center">部门 : </div>
          <div style="flex: 1">
            <input style="border: none;width: 100%;height: 40px;text-align: right;background-color: white" v-model="dept" :disabled="flag"/>
          </div>
        </div>
        <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
        <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center" >
          <div style="width: 100px;display: flex;align-items: center">民族 : </div>
          <div style="flex: 1">
            <input style="border: none;width: 100%;height: 40px;text-align: right;background-color: white" v-model="national" :disabled="flag"/>
          </div>
        </div>
        <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
        <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center" >
          <div style="width: 100px;display: flex;align-items: center">手机 : </div>
          <div style="flex: 1">
            <input style="border: none;width: 100%;height: 40px;text-align: right;background-color: white" v-model="telPhone" :disabled="flag"/>
          </div>
        </div>
        <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
        <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center" >
          <div style="width: 100px;display: flex;align-items: center">短号 : </div>
          <div style="flex: 1">
            <input style="border: none;width: 100%;height: 40px;text-align: right;background-color: white" v-model="tel" :disabled="flag"/>
          </div>
        </div>
        <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
        <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center" >
          <div style="width: 100px;display: flex;align-items: center">籍贯 : </div>
          <div style="flex: 1">
            <input style="border: none;width: 100%;height: 40px;text-align: right;text-overflow: ellipsis;background-color: white" v-model="nativePlace" :disabled="flag"/>
          </div>
        </div>
        <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
        <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center" >
          <div style="flex: 1;display: flex;align-items: center">出生年月 : </div>
          <div style="width: 100px" class="ext">
            <!--<el-date-picker-->
            <!--v-model="birthday"-->
            <!--type="date"-->
            <!--placeholder="选择日期">-->
            <!--</el-date-picker>-->
            <mu-date-picker  v-model="birthday" :disabled="flag" id="myDate"/>
            <!--<input style="border: none;width: 100%;height: 40px;text-align: right;background-color: white" v-model="birthday" :disabled="flag"/>-->
          </div>
        </div>
        <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
        <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center" >
          <div style="width: 100px;display: flex;align-items: center">微信号 : </div>
          <div style="flex: 1">
            <input style="border: none;width: 100%;height: 40px;text-align: right;background-color: white" v-model="weixinNumber" :disabled="flag"/>
          </div>
        </div>
        <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
        <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center" >
          <div style="width: 100px;display: flex;align-items: center">一寸证件照 : </div>
          <div style="flex: 1;position: relative;height: 60px">
            <a class="file" @change="changeImg($event)" id="mya">
              <img :src="fUrl" style="height: 35px;width: 35px;" id="myImg"/>
              <input type="file" name="" id="file" accept="image/*" multiple="multiple">
            </a>
          </div>
        </div>
        <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
        <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center" >
          <div style="width: 100px;display: flex;align-items: center">头像 : </div>
          <div style="flex: 1;position: relative;height: 60px">
            <a class="file" @change="changeImga($event)" id="myaa">
              <img :src="photoUrl" style="height: 35px;width: 35px;" id="myImga"/>
              <input type="file" name="" id="filea" accept="image/*" multiple="multiple">
            </a>
          </div>
        </div>
        <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      <div style="width: 100%;height: 120px;display: flex;align-items: center;justify-content: center">
        <mu-raised-button label="修改" class="demo-raised-button" primary @click="revise" id="myButton"/>
      </div>
    </div>


</template>

<script>
    export default {
      data: function () {
        return {
          list: [{label:"男", val:1},{label:"女", val:2}],
          ifClick:false,
          uId:'',
          cUserNo:'',
          cName:'',
          gender:'',
          dept:'',
          national:'',
          telPhone:'',
          tel:'',
          nativePlace:'',
          birthday:'',
          weixinNumber:'',
          pic:'',
          flag:true,
          files:[],
          gender1:'',
          flaga:false,
          cFileId:0,
          fUrl:'http://appinter.sunwoda.com',
          filesa:[],
          cPhotoId:0,
          photoUrl:'http://appinter.sunwoda.com'
        }
      },

      created() {

      },
      mounted(){
        this.getOrganization();
        $("#mya").css("pointer-events","none");
        $("#myaa").css("pointer-events","none");
      },
      methods:{
        myFlag(){
          let vm =this;
          vm.ifClick=true;
        },
        changeImga(e){
          const vm=this;
          this.flaga=true;
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
                  document.getElementById('myImga').setAttribute('src',_this.imgArra[0])
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
        changeImg(e){
          const vm=this;
          this.flaga=true;
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
                vm.files=file.files[0];
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
                  _this.imgArr=[];
                  _this.imgArr.push(base64);
                  console.log( _this.imgArr)
                  document.getElementById('myImg').setAttribute('src',_this.imgArr[0])
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
        revise(){
          const vm=this;
          console.log(vm.flag);
          if(vm.flag){
            document.getElementById('myButton').innerHTML='确定修改';
            $("#mya").css("pointer-events","auto");
            $("#myaa").css("pointer-events","auto");
            vm.flag=false;
            console.log(vm.flag)
          }else if(!vm.flag){
            vm.flag=true;
            $("#mya").css("pointer-events","none");
            $("#myaa").css("pointer-events","none");
            if(vm.uId===0){
              console.log(vm.telPhone)
              console.log(vm.filesa)
              if(vm.files.length===0||!vm.cUserNo||!vm.cName||!vm.dept||!vm.birthday||!vm.gender||!vm.national||!vm.telPhone||!vm.nativePlace||!vm.weixinNumber||vm.filesa.length===0){
                vm.$message("请正确填写以上信息，以上内容皆为必填(短号除外)")
              }
              if(vm.gender===1){
                vm.gender1=1
              }else{
                vm.gender1=2
              }
              var formDataa = new FormData();
              formDataa.append('fGroupName','社团系统');
              formDataa.append('fGroupId',2);
              formDataa.append('file',vm.files);
              formDataa.append('cUserNo',vm.cUserNo);
              formDataa.append('cName',vm.cName);
              formDataa.append('dept',vm.dept);
              formDataa.append('birthday',vm.birthday);
              formDataa.append('gender',vm.gender1);
              formDataa.append('national',vm.national);
              formDataa.append('telPhone',vm.telPhone);
              formDataa.append('nativePlace',vm.nativePlace);
              formDataa.append('weixinNumber',vm.weixinNumber);
              formDataa.append('photo',vm.filesa);
              $.ajax({
                url: vm.path+'insertCMUser.json',
                type: "post",
                data: formDataa,
                cache: false,
                contentType: false,
                processData: false,
                mimeType: "multipart/form-data",
                success: function (res) {
                  let result=JSON.parse(res);
                  console.log(result);
                  if(result.message==='操作成功'){
                    vm.$message('修改个人资料成功')
                    document.getElementById('myButton').innerHTML='修改';
                  }
                },
                error: function () {
                }
              });
            }else{
                if(vm.flaga){
                  console.log(vm.gender)
                  if(vm.gender===1){
                    vm.gender1=1
                  }else{
                    vm.gender1=2
                  }
                  var formDataaa = new FormData();
                  formDataaa.append('uId',vm.uId);
                  formDataaa.append('fGroupName','社团系统');
                  formDataaa.append('fGroupId',2);
                  console.log(vm.files)
                  if(vm.files.length!==0){
                    formDataaa.append('file',vm.files);
                    formDataaa.append('cFileId',vm.cFileId);
                    formDataaa.append('fUrl',vm.fUrl);
                  }
                  formDataaa.append('cUserNo',vm.cUserNo);
                  formDataaa.append('cName',vm.cName);
                  formDataaa.append('dept',vm.dept);
                  formDataaa.append('birthday',vm.birthday);
                  formDataaa.append('gender',vm.gender1);
                  formDataaa.append('national',vm.national);
                  formDataaa.append('telPhone',vm.telPhone);
                  formDataaa.append('nativePlace',vm.nativePlace);
                  formDataaa.append('weixinNumber',vm.weixinNumber);
                  if(vm.filesa.length!==0){
                    formDataaa.append('photo',vm.filesa);
                    formDataaa.append('cPhotoId',vm.cPhotoId);
                    formDataaa.append('photoUrl',vm.photoUrl);
                  }
                  $.ajax({
                    url: vm.path+'updateCMUser.json',
                    type: "post",
                    data: formDataaa,
                    cache: false,
                    contentType: false,
                    processData: false,
                    mimeType: "multipart/form-data",
                    success: function (res) {
                      let result=JSON.parse(res);
                      console.log(result);
                      if(result.message==='操作成功'){
                        vm.$message('修改个人资料成功')
                        document.getElementById('myButton').innerHTML='修改';
                      }
                    },
                    error: function () {
                    }
                  });
                }else{
                  console.log(vm.gender)
                    if(vm.gender===1){
                      vm.gender1=1
                    }else{
                      vm.gender1=2
                    }
                    $.ajax({
                      url: vm.path+'updateCMUser.json',
                      dataType: "json",
                      data: {
                        'uId':vm.uId,
                        'fGroupName':'社团系统',
                        'fGroupId':2,
                        'cUserNo':vm.cUserNo,
                        'cName':vm.cName,
                        'dept':vm.dept,
                        'birthday':vm.birthday,
                        'gender':vm.gender1,
                        'national':vm.national,
                        'telPhone':vm.telPhone,
                        'nativePlace':vm.nativePlace,
                        'weixinNumber':vm.weixinNumber,
                      },
                      type: "post",
                      success: function (res) {
                        console.log(res);
                        if(res.message==='操作成功'){
                          vm.$message('修改个人资料成功')
                          document.getElementById('myButton').innerHTML='修改';
                        }
                      },
                      error: function () {
                      }
                    });


                }
            }
          }
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
//              if(res.dataInfo.listData[0].gender===1){
//                res.dataInfo.listData[0].gender='男'
//              }else{
//                res.dataInfo.listData[0].gender='女'
//              }
              vm.cName= res.dataInfo.listData[0].cName;
              vm.cUserNo=res.dataInfo.listData[0].cUserNo;
              vm.gender=res.dataInfo.listData[0].gender;
              vm.dept=res.dataInfo.listData[0].dept;
              vm.national=res.dataInfo.listData[0].national;
              vm.telPhone=res.dataInfo.listData[0].telPhone;
              vm.tel=res.dataInfo.listData[0].tel;
              vm.nativePlace=res.dataInfo.listData[0].nativePlace;
              vm.birthday=res.dataInfo.listData[0].birthday;
              vm.weixinNumber=res.dataInfo.listData[0].weixinNumber;
              vm.uId=res.dataInfo.listData[0].uId;
              vm.cFileId=res.dataInfo.listData[0].cFileId;
              if(!res.dataInfo.listData[0].cmFile){
                vm.fUrl='../assets/icon512.png';
              }else{
                vm.fUrl+=res.dataInfo.listData[0].cmFile.fUrl;
              }
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
        }
      }
    }
</script>

<style scoped lang="scss">

  .file {
    border-radius: 4px;
    overflow: hidden;
    color: black;
    text-decoration: none;
    text-indent: 0;
    display: flex;
    align-items: center;
    text-align: center;
    position: absolute;
    right: 0;
    top:15px;
    background-color: white;
    border: none;


  }
  .file input {
    position: absolute;
    font-size: 20px;
    width: 35px;
    height: 35px;
    top: 0;
    right: 0;
    opacity: 0;
  }
  input:disabled{
    color:#cccccc
  }
  #myDate :disabled{
    color:#cccccc
  }
  .mySex{
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

</style>
