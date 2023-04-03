<template>
  <div>
    <div class="shell">
      <MyHeader class="theheader"></MyHeader>
      <div
        class="image"
        :style="{ backgroundImage: 'url(' + Img1 + ')' }"
        style="height: 130vh"
        id="go-big"
      ></div>

          <div class="wel">  欢迎来到智慧天眼平台</div>
          <div class="wel-en"> Welcome to the intelligent sky eye platform</div>
         <div class="gofun">
           <el-row><el-button  class="gofun-btn btn-animate btn-animate__shiny" @click="goDetectchanges" style="font-size:13px">前往体验</el-button></el-row>
           </div>
      <div class="heading">
        
        <div class="dec-words">
          <h4 class="h4-words hidden-sm-and-down">
            Application of the intelligent sky eye
          </h4>
        </div>
        <div class="header-dec">
          <img
            :src="require('../../assets/image/decoration/47.png')"
            style="width: 350px"
          />
        </div>
        <h2 class="subtitle">
          <span class="hidden-md-and-down">智慧天眼</span>微介绍
        </h2>
      </div>
      <div class="text color-title">
        <img
          :src="require('../../assets/image/remotesense/08.png')"
          class="litimg img1 hidden-md-and-down"
        />
        <img
          :src="require('../../assets/image/remotesense/09.png')"
          class="litimg img2 hidden-md-and-down"
        />
        <img
          :src="require('../../assets/image/remotesense/10.png')"
          class="litimg img3 hidden-md-and-down"
        />
        <el-row justify="center">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <h2 class="animated" style="color:white">
              <i
                class="iconfont icon-wenhao"
                style="font-size: 90px; color: orange"
              ></i
              >何为<span style="color:skyblue">智慧天眼</span>
            </h2>
          </el-col>
        </el-row>
        <el-row justify="center">
          <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
            <h4 style="color: white" class="nor-words">
              智慧“天眼”系统集中管理<span class="color-cha">大数据监控视频</span>，进行失踪人员搜救、嫌疑人追捕，帮助城市旅游景点的管理人流信息，发展旅游业提供安全保障，同时还可以用于智能交通领域，辅助自动驾驶，新零售场景，提供针对用户的个性化服务和精准营销，智慧城市的构建，<span class="color-cha">全场景的人流轨迹还原及人员比对和查询</span>，方便实时管理和调配各种终端资源，节省了大量人力和物力资源。
            </h4>
          </el-col>
        </el-row>
        
      </div>
      <div class="text" style="height: 20vh;width:100%;background: #8b6f48;">
          <h1> 下图为大厦远程视频监控系统</h1>
      </div>
      <div
        class="image"
        :style="{ backgroundImage: 'url(' + Img2 + ')' }"
        style="height: 140vh; margin-top: 20vh"
      ></div>
      
      <div class="heading">
        <div class="header-dec">
          <img
            :src="require('../../assets/image/decoration/60.png')"
            style="width: 350px"
          />
        </div>
      </div>
      <div class="heading">
        <div class="dec-words">
          <h4 class="h4-words hidden-sm-and-down">
            Brief introduction of the intelligent sky eye
          </h4>
        </div>
        <div class="header-dec">
          <img
            :src="require('../../assets/image/decoration/49.png')"
            style="width: 300px"
          />
        </div>
        <h1 style="letter-spacing: 25px">
          <span class="hidden-md-and-down">智慧天眼</span>的应用
        </h1>
      </div>
      <div class="text color-title" style="height: auto">
        <el-row justify="center">
          <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
            <h4>
              将在不同的监控场景下以及在<span class="color-cha">多摄像机网络</span>中拍摄的行人图片之间建立对应关系。通过比对图片可以追踪目标行人对其进行<span class="color-cha">行为分析、属性分析</span>，并在相应的网络地图上绘制各时间节点目标出现的地点、状态
            </h4>
          </el-col>
        </el-row>
        <el-row justify="center" :gutter="40" style="margin-bottom: 20px">
          <el-col :xs="22" :sm="20" :md="8" :lg="8" :xl="8">
            <div class="animate-card animate-card-32">
              <div class="animate-card__layer">
                <img :src="require('../../assets/image/remotesense/13.jpg')" />
                <div class="words">刑侦破案</div>
              </div>

              <div class="animate-card__sublayer">
                <h3>刑侦破案</h3>
                <div>
                  利用智慧天眼技术快速从海量视频监控中锁定嫌疑人，减少时间成本的损耗，并串联起其行动轨迹，对刑事案件的侦破有很大的帮助
                </div>
              </div>
            </div>
          </el-col>
          <el-col :xs="22" :sm="20" :md="8" :lg="8" :xl="8">
            <div class="animate-card animate-card-32">
              <div class="animate-card__layer">
                <img :src="require('../../assets/image/remotesense/15.jpg')" />
                <div class="words">智能寻人</div>
              </div>

              <div class="animate-card__sublayer">
                <h3>智能寻人</h3>
                <span
                  >利用遥感图像处理技术可大量瞬间静态图像信息，这些图像信息既可用于监测动态变化，也可用于规模性的重复用观测活动。</span
                >
              </div>
            </div>
          </el-col>
          <el-col :xs="22" :sm="20" :md="8" :lg="8" :xl="8">
            <div class="animate-card animate-card-32">
              <div class="animate-card__layer">
                <img :src="require('../../assets/image/remotesense/22.jpg')" />
                <div class="words">大型商场</div>
              </div>

              <div class="animate-card__sublayer">
                <h3>大型商场</h3>
                <span
                  >利用遥感图像处理技术可大量瞬间静态图像信息，这些图像信息既可用于监测动态变化，也可用于规模性的重复用观测活动。</span
                >
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row justify="center" :gutter="40" style="margin-bottom: 20px">
          <el-col :xs="22" :sm="20" :md="8" :lg="8" :xl="8">
            <div class="animate-card animate-card-32">
              <div class="animate-card__layer">
                <img :src="require('../../assets/image/remotesense/20.jpg')" />
                <div class="words">无人超市</div>
              </div>

              <div class="animate-card__sublayer">
                <h3>无人超市</h3>
                <div>
                  基于地物光谱的特性，并通过遥感图像判读，可将具体地貌、波谱特征、地表情况及位置分布等充分反映出来，从而为地质测绘提供可靠的信息基础。
                </div>
              </div>
            </div>
          </el-col>
          <el-col :xs="22" :sm="20" :md="8" :lg="8" :xl="8">
            <div class="animate-card animate-card-32">
              <div class="animate-card__layer">
                <img :src="require('../../assets/image/remotesense/21.jpg')" />
                <div class="words">野生动物保护</div>
              </div>

              <div class="animate-card__sublayer">
                <h3>野生动物保护</h3>
                <span
                  >利用遥感图像处理技术可大量瞬间静态图像信息，这些图像信息既可用于监测动态变化，也可用于规模性的重复用观测活动。</span
                >
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div
        class="image"
        :style="{ backgroundImage: 'url(' + Img3 + ')' }"
        style="margin-top: 10vh"
      ></div>
      <div class="heading">
        <div class="dec-words">
          <h4 class="h4-words hidden-sm-and-down">
            Processing of the intelligent sky eye
          </h4>
        </div>
        <div class="header-dec">
          <img
            :src="require('../../assets/image/decoration/50.png')"
            style="width: 300px"
          />
        </div>
        <h1 style="letter-spacing: 25px">
          <span class="hidden-md-and-down">企业</span>合作
        </h1>
      </div>
      <div class="text" style="height:60vh;background-color: #fff;color:#000">
        <el-row justify="center">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <h2 class="animated" >
              基于<span style="color:skyblue">视频信息</span>
            </h2>
          </el-col>
        </el-row>
        <el-row justify="center">
          <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
            <h4 class="nor-wowrds" style="color:#000">
             加油站场景人员分类识别算法模型
同时收集多个相机视角信息，<span class="color-cha">对加油站相关工作人员进行跟踪分析</span>，识别定位到具体的工作人员，输出其当天的路程以及在监控视角下的存在时间，加油站可根据管理软件的<span class="color-cha">统计信息和员工作业记录表现</span>，以友好的界面展示绩效考核情况，以实现加油人员透明管理考核，效果斐然
            </h4>
          </el-col>
        </el-row>
        <el-row justify="center" :gutter="20" style="width:100%;" >
          <el-col :xs="20" :sm="20" :md="6" :lg="6" :xl="6">
            <div>
              <img :src="require('../../assets/image/remotesense/video_1.gif')" style="width:350px;height:200px">
            </div>
          </el-col>
          <el-col :xs="20" :sm="20" :md="6" :lg="6" :xl="6">
            <div>
              <img :src="require('../../assets/image/remotesense/video_2.gif')" style="width:350px;height:200px">
            </div>
          </el-col>
          <el-col :xs="20" :sm="20" :md="6" :lg="6" :xl="6">
            <div>
              <img :src="require('../../assets/image/remotesense/video_3.gif')" style="width:350px;height:200px">
            </div>
          </el-col>
          <el-col :xs="20" :sm="20" :md="6" :lg="6" :xl="6">
            <div>
              <img :src="require('../../assets/image/remotesense/video_4.gif')" style="width:350px;height:200px">
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="text color-title" style="height: 15vh">
        <h1>传统解译与基于深度学习的智能解译</h1>
      </div>
      <el-row style="margin-top: 50px" justify="center">
        <el-col :xs="20" :sm="20" :md="10" :lg="10" :xl="10"
          ><h3 class="nor-words">
            由于监控设备数目的大量增加使得监控视频的数据量变得日益庞大，仅仅依靠传统的<span class="color-cha">人工处理监控数据</span>的方式已经远远不能满足需要，因此<span class="color-cha">智能视频监控技术</span>迅速成为一个研究热点，因此设计研发一套基于人工智能技术来辅助工作人员进行视频分析的软件系统是非常必要的。
          </h3></el-col
        >
        <el-col :xs="20" :sm="20" :md="10" :lg="10" :xl="10"
          ><img :src="require('../../assets/image/remotesense/22.png')"
        /></el-col>
        
      </el-row>
      <el-row style="margin-top: 50px" justify="center">
        <el-col :xs="20" :sm="20" :md="10" :lg="10" :xl="10"
          ><img :src="require('../../assets/image/remotesense/20.png')"
        /></el-col>
        <el-col :xs="20" :sm="20" :md="10" :lg="10" :xl="10"
          ><h3 class="nor-words">
            随着<span class="color-cha">人工智能技术</span>的兴起，特别是基于深度学习的<span class="color-cha">行人重识别方法</span>获得了极大的发展，虽然大多数模型都能够达到SOTA的精度，但是大多都停留在实验的理论结论，<span class="color-cha">算法的边缘极限基本达到饱和</span>，因此将现有的算法落地到实际应用中成为了当务之急，在保证精度损失可控的范围内，将行人重识别系统算法集成一套完整的AI产品，<span class="color-cha">提供一站式的Web可视化监控和产品宣传页以及边缘计算设备</span>，打通上下游产业链，冲击人工智能市场，加速人工智能成功落地转化，打造人工智能智慧城市。
            <h4>
              <span @click="goIntelligent" class="gointelligent">点我</span>
                前往下一界面了解更多智慧天眼——多任务跨域跟踪系统的内容

            </h4>
          </h3>
          <br />
        </el-col>
      </el-row>

      <MyFooter></MyFooter>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import BigCard from "@/components/BigCard";
import BackTop from "@/components/BackTop";
import MyFooter from "@/components/MyFooter";
import Img1 from "@/assets/image/remotesense/16.png";
import Img2 from "@/assets/image/remotesense/11.png";
import Img3 from "@/assets/image/remotesense/50.png";
import Img4 from "@/assets/image/remotesense/59.jpg";
export default {
  name: "remotesenseense",
  components: {
    MyHeader,
    BigCard,
    BackTop,
    MyFooter,
  },
  data() {
    return {
      Img1: Img1,
      Img2: Img2,
      Img3: Img3,
      Img4: Img4,
    };
  },
  mounted() {
    document.body.style.overflow = "auto";
  },
  methods: {
    goIntelligent() {
      this.$router.push("intelligent");
    },
    goDetectchanges(){
 
      if(!localStorage.getItem('token')){
        this.$message('请先注册登录')
      }
      this.$router.push('detectchanges')
    }
  },
};
</script>

<style scoped>
.color-cha{
  color: rgb(64,158,255);
}
.nor-words{
  font-family: SimHei sans-serif;
  line-height: 35px;
}
.remote-history {
  position: relative;
  font-family: SimHei sans-serif;
  line-height: 35px;
}
.remote-topwords,
.remote-downwords {
  line-height: 20vh;
  height: 20vh;
  border-left: 3px solid;
  color: black;
  position: absolute;
}
.words1 {
  top:-1.5vh;
  left: 12vw;
}
.words2 {
  top: 10vh;
  left: 24vw;
}
.words3 {
  top: 2vh;
  left: 37vw;
}
.words4 {
  top: 21.5vh;
  left: 48vw;
}
.words5 {
  top:0.5vh;
  left: 60vw;
}
.words6 {
  top:18.5vh;
  left: 72vw;
}
.remote-hiswords{
  font-size: 22px;
   font-family: SimHei sans-serif;
   font-weight: 700;
   line-height: 40px;
}
.remote-topwords::after {
  width: 15px;
  height: 15px;
  background-color: black;
  display: block;
  content: "";
  border-radius: 50%;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: -9px;
}
.remote-downwords::after {
  width: 15px;
  height: 15px;
  background-color: black;
  display: block;
  content: "";
  border-radius: 50%;
  text-align: center;
  position: absolute;
  top: 0;
  left: -9px;
}
.dec-words {
  font-size: 14px;
  position: absolute !important;
  left: 40%;
  top: -20%;
}
.h4-words::after {
  position: absolute;
  left: -20%;
  top: 50%;
  content: "";
  height: 2px;
  width: 50px;
  background: #ffffff;
}
.header-dec {
  left: 30%;
  top: -70%;
  position: absolute !important;
  width: 200px;
  height: 200px;
  opacity: 0.5;

  box-shadow: #000 12px solid;
}
.gointelligent {
  cursor: pointer;
  color: rgb(64,158,255);
  transition: all 0.6s;
}
.gointelligent:hover {
  color: red;
}
.el-main {
  --el-main-padding: 0px;
}
.shell {
  height: 100vh;
  overflow-x: hidden;
  perspective: 3px;
}
.shell div {
  position: relative;
  display: flex;

  align-items: center;
  font-style: 30px;
  letter-spacing: 2px;
}
.image {
  transform: translateZ(-1px) scale(1.65);
  background-size: cover;
  height: 100vh;
  z-index: -1;
}
.text {
  font-family: SimHei sans-serif;
  font-size: 20px;
  flex-direction: column;
  justify-content: center;
  height: 53vh;
}
.text h1 {
  justify-content: center;
  color: #fff;
}
.text h4 {
  color: #fff;
  text-align: center;
}
.heading {
  position: relative;
  justify-content: center;
  z-index: -1;
  transform: translateY(-30vh) translateZ(1px);
  color: #fff;
  font-size: 30px;
  font-family: SimHei sans-serif;
}
.cards {
  margin: 0 auto;
  justify-content: space-evenly;
  opacity: 1 !important;
  flex: auto;
}
.theheader {
  height: 90px;
  color: skyblue;
}
.subtitle {
  margin-left: 25px;
  letter-spacing: 25px;
  font-family: SimHei sans-serif;
}
.coporate-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
.coporate-box h3{
  width: 80%;
  text-align: center;
  margin: 0;
  padding: 0;
}
.color-title {
  background-image: linear-gradient(135deg,#232526,#414345);
}
/* .color-title2 {
  background-image: linear-gradient(135deg,#232526,#414345);
} */
.color {
  background-image: linear-gradient(135deg, #130cb7 15%, #43e97b 100%);
}
.color2 {
  background-image: linear-gradient(135deg, #70f570 10%, #fffeff 100%);
}
.color3 {
  background-image: linear-gradient(135deg, #feb692 10%, #ea5455 100%);
}
.litimg {
  position: absolute;
  border: 10px solid;
  border-image: linear-gradient(135deg,#232526,#414345) 1;
  clip-path: inset(0 round 10px);
  transition: all 0.5s;
  transform: rotate(30deg);
  -moz-transform: rotate(10deg);
  -webkit-transform: rotate(10deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
}
.img1 {
  left: 80px;
  top: 40px;
  width: 150px;
}
.img2 {
  left: 200px;
  top: 40px;
  width: 200px;
}
.img3 {
  left: 380px;
  top: 40px;
  width: 200px;
}
.img1:hover,
.img2:hover,
.img3:hover {
  z-index: 100;
}
.litimg:hover {
  transform: scale(1.8);
}
.animated:hover {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: shakeX;
}

@keyframes shakeX {
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
}

.shakeX {
  animation-name: shakeX;
}
.des {
  position: absolute;
  top: -120%;
}
.animate-card {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.animate-card-32 {
  z-index: 10;
}
.animate-card-32 .animate-card__layer {
  width: 50%;
  height: 100%;
  transition: 0.5s;
  transform: rotate(360deg) scale(1, 1);
  position: relative;
}
.animate-card-32 .animate-card__layer > img {
  border: 10px solid;
  border-image: linear-gradient(135deg,#232526,#414345) 1;
  clip-path: inset(0 round 10px);
  width: 120%;
  height: 120%;
}
.animate-card-32 .animate-card__sublayer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: rotate(0deg) scale(0, 0);
  text-align: center;
  background-color: #fff;
  color: #fff;
  opacity: 0;
  transition: 0.5s;
  border-radius: 5px;
  background-image: linear-gradient(135deg,#232526,#414345);
}
.animate-card-32:hover .animate-card__layer {
  transform: rotate(0deg) scale(0, 0);
}
.animate-card-32:hover .animate-card__sublayer {
  transform: rotate(360deg) scale(1, 1);
  opacity: 1;
}

.words {
  font-size: 30px;
  right: -120px;
  position: absolute;
  color:#fff;
}
.gofun{
   position: relative;
  justify-content: center;
  z-index: -1;
  transform: translateY(-95vh) translateZ(1px) translateX(-11vw);
}
.wel{
  position: relative;
  justify-content: center;
  z-index: -1;
  transform: translateY(-100vh) translateZ(1px) translateX(-10vw);
  letter-spacing: 10px!important;
  font-size:20px!important;
  font-family:   PingfangSC-Light,NotoSansHans-Light,Microsoft Yahei,sans-serif;
  font-weight: 800;
  color: #fff
}
.wel-en{
    position: relative;
  justify-content: center;
  z-index: -1;
  transform: translateY(-98vh) translateZ(1px) translateX(-10vw);
  font-size:12px!important;
   font-family: Microsoft JhengHei UI, sans-serif;
  font-weight: 800;
  color: white;
}

.gofun-btn{
  font-family: PingfangSC-Light,NotoSansHans-Light,Microsoft Yahei,sans-serif;
  width:100px;
  height: 30px;
  transition: all .5s;
  color: black;
  background-color: rgb(76, 192, 238);
  border-color: rgb(76, 192, 238);
  letter-spacing: 3px;
  font-weight: 500;
}
.gofun-btn:hover{
  background-color: rgb(135,206,235,.5);
  color: white;
  border-color: transparent
}
</style>
