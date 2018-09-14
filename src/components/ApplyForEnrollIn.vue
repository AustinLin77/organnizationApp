<template>
  <div style="overflow: scroll">
    <div style="overflow: scroll;position: absolute;top: 0;bottom: 40px;width: 100%">
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
        <div style="flex: 1">
          <input style="border: none;width: 100%;height: 40px;text-align: right;background-color: white" v-model="gender" :disabled="flag"/>
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
        <div style="width: 100px;display: flex;align-items: center">出生年月 : </div>
        <div style="flex: 1">
          <input style="border: none;width: 100%;height: 40px;text-align: right;background-color: white" v-model="birthday" :disabled="flag" />
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
          <a class="file" @change="changeImg($event)">
            <img :src="'http://appinter.sunwoda.com'+cmUrl" style="height: 35px;width: 35px;" id="myImg"/>
            <input type="file" name="" id="file" accept="image/*" multiple="multiple" :disabled="flag">
          </a>
        </div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      <div style="width: 100%;height: 60px;padding: 0 15px;display: flex;align-items: center" >
        <div style="width: 100px;display: flex;align-items: center">职位 : </div>
        <div style="flex: 1;display: flex;justify-content: flex-end">
          {{jName}}
        </div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      <div class="hobby">
        <div class="title">兴趣爱好 : </div>
        <div class="contentaaaa">
          <textarea style="height: 100%;width: 100%;border: none" placeholder="请输入个人兴趣爱好" v-model="hobby"/>
        </div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      <div class="hobby" style="min-height: 30px">
        <div class="title" style="min-height: 30px">参加社团名称 : </div>
        <div class="contentaaaa" style="min-height: 30px">
          <input placeholder="请输入社团名称" style="height: 100%;width: 100%;border: none" v-model="name"/>
        </div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      <div class="note">
        <mu-icon :size="24" value="star" color="red"></mu-icon>
        <span style="font-size: 10px;display: flex;align-items: center;color: darkgrey">简述自己的爱好，特长，获得的奖励，组织或参加过的活动</span>
      </div>
      <div class="hobby">
        <div class="title">个人简历 : </div>
        <div class="contentaaaa">
          <textarea style="height: 100%;width: 100%;border: none" placeholder="请填写个人简历" v-model="selfFile"/>
        </div>
      </div>
      <mu-divider style="margin-left: 14px;margin-right: 14px"></mu-divider>
      <div class="note">
        <mu-icon :size="24" value="star" color="red"></mu-icon>
        <span style="font-size: 10px;display: flex;align-items: center;color: darkgrey">对所报社团的认识与态度</span>
      </div>
      <div class="hobby">
        <div class="title">自荐理由 : </div>
        <div class="contentaaaa">
          <textarea style="height: 100%;width: 100%;border: none" placeholder="请填写自荐理由" v-model="reason"/>
        </div>
      </div>
      <div style="height: 30px;line-height:30px;width: 100%;background-color: #eeeeee;color:darkgrey;padding-left: 20px">选择审核人</div>
      <div>
        <div style="height: 60px;margin: 10px;display: flex;border-bottom: solid 1px #eeeeee" v-for="i in 1">
          <div style="width: 50px;height:60px;display: flex;align-items: center;justify-content: center">
            <mu-checkbox v-model="normal.checkbox" @change="haha"></mu-checkbox>

          </div>
          <div style="height: 60px;flex: 1" >
            <div style="width: 100%;height: 30px;line-height: 30px;font-weight: bold;font-size: 16px">
              黄治文
            </div>
            <div style="height: 30px;line-height: 30px;font-size: 14px;color: #666666">
              170711129
              <span style="margin-left: 10px;font-size: 14px;color:#666666">信息中心</span>
              <span style="margin-left: 10px;font-size: 14px;color: #666666">13652452157</span>
            </div>
          </div>

        </div>
      </div>


    </div>
    <div style="height: 40px;width: 100%;line-height: 40px;text-align: center;position: absolute;bottom: 0;background-color: deepskyblue;color: white" @click="comfirm">
      提交
    </div>
  </div>

</template>

<script>
    export default {

        data: function () {
            return {
              isClick:false,
              name:'',
              uId:'',
              cUserNo:'',
              cName:'',
              cmUrl:'',
              gender:'',
              dept:'',
              national:'',
              telPhone:'',
              tel:'',
              nativePlace:'',
              birthday:'',
              weixinNumber:'',
              pic:'',
              cId:'',
              flag:true,
              files:[],
              gender1:'',
              flaga:false,
              cFileId:0,
              fUrl:'',
              reason:'',
              hobby:'',
              selfFile:'',
              normal: {
               checkbox:false,
              },
              jId:'',
              jName:''
            }
        },
        created() {
          const vm=this;
          vm.name=this.$route.query.name;
          vm.cId=this.$route.query.id;
        },
      mounted(){
        this.getUserInfo();
        this.getJid()
      },
      methods:{
        getJid(){
          let vm = this;
          $.ajax({
            url: vm.path + 'findCMJob.json',
            dataType: "json",
            data: {
              'cId': vm.cId,
              'pageSize': -1,
            },
            type: "post",
            success: function (res) {
              console.log(res);
              vm.jId=res.dataInfo.listData[0].jId;
              vm.jName=res.dataInfo.listData[0].jName;
              console.log(vm.jName);
            },
            error: function () {

            }
          });
        },
        comfirm(){
          const vm=this;
          if(this.isClick){
            vm.$message("请勿重复提交")
          }else{
            this.isClick=true;
            if(vm.uId===0){
              vm.$message("请先完善个人资料");
              setTimeout(function(){
                vm.$router.push('/myProfile')
              },4000);
//            if(!vm.files||!vm.cUserNo||!vm.cName||!vm.dept||!vm.birthday||!vm.gender||!vm.national||!vm.telPhone||!vm.nativePlace||!vm.weixinNumber||!vm.hobby||!vm.selfFile||!vm.reason||!vm.name){
//              vm.$message("请正确填写以上信息，以上内容皆为必填(短号除外)")
//            }
//            if(vm.gender==='男'){
//              vm.gender1=1
//            }else{
//              vm.gender1=2
//            }
//            var formDataa = new FormData();
//            formDataa.append('uId',vm.uId);
//            formDataa.append('fGroupName','社团系统');
//            formDataa.append('fGroupId',2);
//            formDataa.append('cId',vm.cId);
//            formDataa.append('jId',2);
//            formDataa.append('pId',1);
//            formDataa.append('file',vm.files);
//            formDataa.append('cUserNo',vm.cUserNo);
//            formDataa.append('cName',vm.cName);
//            formDataa.append('dept',vm.dept);
//            formDataa.append('birthday',vm.birthday);
//            formDataa.append('gender',vm.gender1);
//            formDataa.append('national',vm.national);
//            formDataa.append('telPhone',vm.telPhone);
//            formDataa.append('nativePlace',vm.nativePlace);
//            formDataa.append('weixinNumber',vm.weixinNumber);
//            formDataa.append('hobby',vm.hobby);
//            formDataa.append('introduction',vm.selfFile);
//            formDataa.append('recommendation',vm.reason);
//            $.ajax({
//              url: vm.path+'addUserJobByUser.jsonn',
//              type: "post",
//              data: formDataa,
//              cache: false,
//              contentType: false,
//              processData: false,
//              mimeType: "multipart/form-data",
//              success: function (res) {
//                console.log(res);
//              },
//              error: function () {
//              }
//            });
            }else{
              if(vm.gender==='男'){
                vm.gender1=1
              }else{
                vm.gender1=2
              }
              $.ajax({
                url: vm.path+'addUserJobByUser.json',
                dataType: "json",
                data: {
                  'uId':vm.uId,
//                'fGroupName':'社团系统',
//                'fGroupId':2,
                  'cUserNo':vm.cUserNo,
                  'cId':vm.cId,
                  'jId':vm.jId,
                  'pId':1,
                  'hobby':vm.hobby,
                  'introduction':vm.selfFile,
                  'recommendation':vm.reason
                },
                type: "post",
                success: function (res) {
                  console.log(res);
                  if(res.message=='操作成功'){
                    vm.$message(res.message);
                  }

                  setTimeout(function () {
                    this.$router.push({
                      path: '/introduce',
                      query: {
                        name:vm.name
                      }
                    })
                  },3000)



                },
                error: function () {
                }
              });
            }

          }

        },
        changeImg(e){
          const vm=this;
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
        haha(){
          const vm=this;
          console.log(this.normal.checkbox)
        },
        getUserInfo(){
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
              if(res.dataInfo.listData[0].gender===1){
                res.dataInfo.listData[0].gender='男'
              }else {
                res.dataInfo.listData[0].gender='女'
              }
              vm.cName= res.dataInfo.listData[0].cName;
              vm.cUserNo=res.dataInfo.listData[0].cUserNo;
              vm.gender=res.dataInfo.listData[0].gender;
              vm.dept=res.dataInfo.listData[0].dept;
              vm.national=res.dataInfo.listData[0].national;
              vm.telPhone=res.dataInfo.listData[0].telPhone;
              vm.tel=res.dataInfo.listData[0].tel;
              vm.nativePlace=res.dataInfo.listData[0].nativePlace;
              vm.cmUrl=res.dataInfo.listData[0].cmFile.fUrl;
              vm.birthday=res.dataInfo.listData[0].birthday;
              vm.weixinNumber=res.dataInfo.listData[0].weixinNumber;
              vm.uId=res.dataInfo.listData[0].uId;
              if(vm.uId===0){
                vm.flag=false;
                vm.$message("请先完善个人资料");
                setTimeout(function(){
                  vm.$router.push('/myProfile')
                },4000);
              }




            },
            error: function () {
            }
          });
        }
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
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    font-family: 微软雅黑;
  }
  .contentaaaa{
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

</style>
