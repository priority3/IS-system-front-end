<template>
  <div :style="{ backgroundImage: 'url(' + bgImg + ')' }">
    <img :src="require('../../assets/image/intelligent/66.png')" class="bg" />
    <div class="title">基于深度学习的智能解译</div>
    <div class="title-en">Intelligent interpretation based on deep learning</div>
     <div class="title-img">     <img
            :src="require('../../assets/image/decoration/47.png')"
            style="width: 350px"
          /></div>
    <MyHeader class="theheader"></MyHeader>
    <Tabinfor
      style="margin-bottom: 40px; margin-top: 30px"
      class="bigcardinfor"
      id="go-big3"
    >
      <template v-slot:mid>
        <span id="subtitle">智慧天眼四大集成模块</span>
        <div class="sub-en">main function</div></template
      >
    </Tabinfor>

    <div class="mainfun">
      <el-row justify="center" :gutter="20" align="middle"
        ><el-col :xs="20" :sm="20" :md="4" :lg="4" :xl="4"
          ><div class="rendr-style">
            <el-divider></el-divider>
            <label>
              <el-row justify="center">
                <el-col id="fade-in2"
                  ><div
                    class="fun"
                    :class="{ 'active-fun': this.ishoverfun == index }"
                    @mouseenter="goThisFun(index)"
                    v-for="(item, index) in fun"
                  >
                    {{ this.fun[index].title }}
                  </div>
                </el-col>
              </el-row>
            </label>
          </div> </el-col
        ><el-col :xs="20" :sm="20" :md="15" :lg="15" :xl="15" id="fade-in3"
          ><el-card
            ><div class="fun-words">
              <div class="words-title">{{ this.fun[funindex].title }}</div>
              <div>{{ this.fun[funindex].words[0] }}</div>
              <div class="words-title">
                {{ this.fun[funindex].subtitle[0] }}：{{
                  this.fun[funindex].words[1]
                }}
              </div>
              <div>
                <el-image
                  :src="`${this.fun[funindex].imgsrc}`"
                  style="height: 400px"
                ></el-image>
              </div>
              <!-- <div class="go-fun-site">
                <span
                  class="fun-click"
                  @click="goFunSite(this.fun[funindex].funurlname)"
                  >点此</span
                >去试一试（需先登录）
              </div> -->
            </div></el-card
          ></el-col
        ></el-row
      >
    </div>


    <Tabinfor
      style="margin-bottom: 40px; margin-top: 20px"
      class="bigcardinfor"
      id="fade-in"
    >
      <template v-slot:mid>
        <span id="subtitle">智慧天眼四大功能优势</span>
        <div class="sub-en">advantage</div></template
      >
    </Tabinfor>
    <div class="bigcard">
      <BigCard
        ><template v-slot:left
          ><div class="card-infor">
            <i class="iconfont icon-kongjianjingdu"></i>
            <div class="feature-words">高精度</div>
            <div class="detail-words">
              利用深度神经网络从计算机视觉角度提取人体特征信息，模型精度可达SOTA级别，大幅度提高目标识别准确率
            </div>
          </div></template
        ><template v-slot:middle
          ><div class="card-infor">
            <i class="iconfont icon-gaoxiao"></i>
            <div class="feature-words">高效率</div>
            <div class="detail-words">
              深度神经网络通过大量训练数据以及深度学习高特征，减少对专家经验的依赖
            </div>
          </div></template
        ><template v-slot:right
          ><div class="card-infor">
            <i class="iconfont icon-sae"></i>
            <div class="feature-words">轻量</div>
            <div class="detail-words">
              结合shufflenetv2等轻量级网络、知识蒸馏工作，使得落地转化的新模型大幅度降低权重，易部署边缘计算设备
            </div>
          </div></template
        ><template v-slot:rright
          ><div class="card-infor">
            <i class="iconfont icon-yingyongzhongxin"></i>
            <div class="feature-words">高集成度</div>
            <div class="detail-words">
              智慧天眼集成可视化宣传页面、可视化监控算法部署界面以及一套完整的边缘计算设备，高度集成AI产品，加速人工智能成果转化。

            </div>
          </div></template
        >
        </BigCard
      >
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import { showFullScreenLoading, hideFullScreenLoading } from "@/utils/loading";
import { getNews } from "@/api/news";
import MyHeader from "@/components/MyHeader";
import Tabinfor from "@/components/Tabinfor";
import BigCard from "@/components/BigCard";
import MyFooter from "@/components/MyFooter";
import funImg1 from "@/assets/image/intelligent/61.jpg";
import funImg2 from "@/assets/image/intelligent/62.jpg";
import funImg3 from "@/assets/image/intelligent/63.gif";
import funImg4 from "@/assets/image/intelligent/64.png";
import bgImg from "@/assets/image/intelligent/75.jpg";
export default {
  name: "intelligent",
  components: {
    MyHeader,
    BigCard,
    Tabinfor,
    MyFooter,
  },
  data() {
    return {
      bgImg,
      page: {
        newsPage: 1,
        industryPage: 1,
        mediaPage: 1,
      },
      ishovermedia: 0,
      ishovernews: 0,
      ishoverfun: 0,
      ishoverindustry: 0,
      funindex: 0,
      fun: [
        {
          title: "跨域跟踪系统",
          words: [
            "通过管理和监控多个相机下的视频数据，利用Reid模型进行行人、车辆跨域跟踪",
            "Reid-Overhaul distillatio && YOLOv5s-Shufflenetv2",
          ],
          imgsrc: funImg1,
          subtitle: ["使用模型"],
          githubsrc: "",
          funurlname: "detectchanges",
        },
        {
          title: "车辆跨域跟踪",
          words: [
            "Reid模型加入跨域跟踪基线SBS Baseline，利用VeRI-Wild车辆跨域数据集训练；同时采用Yolov5s+Plate-RC车牌识别模块，对车辆进行跨域跟踪",
            "Reid-Overhaul distillatio && YOLOv5s-Shufflenetv2 && Plate-RC",
          ],
          imgsrc: funImg3,
          subtitle: ["使用模型"],
          githubsrc: "",
          funurlname: "classify",
        },
        {
          title: "Web管理客户端",
          words: [
            "设计一款界面简洁，功能丰富的监控分析与算法部署界面，可实现一键选择进行算法部署、轨迹路径记录、地图分析、视频日志输出等功能",
            "Django",
          ],
          imgsrc: funImg2,
          subtitle: ["使用框架"],
          githubsrc: "",
          funurlname: "detecttargets",
        },
        {
          title: "边缘计算设备",
          words: [
            "边缘计算设备采用RK1808作为核心开发板，接口丰富、配件价格适中；适配卷积操作的NPU设备处理速度快、精度高",
            "RKNN",
          ],
          imgsrc: funImg4,
          subtitle: ["使用模型"],
          githubsrc: "",
          funurlname: "obtaintargets",
        },
      ],
      news: [],
      industry: [],
      media: [],
    };
  },
  created() {
  //   showFullScreenLoading("#load");
  //   this.getNews(1, 4, 1).then((res) => {
  
  //     this.news.push(...res.data.data);

  //     this.ishovernews = 0;
  //     this.newsGet = true;
  //     hideFullScreenLoading("#load");
  //   });
  //   this.getNews(1, 4, 3).then((res) => {
  //     this.industry = res.data.data;
   
  //     this.industryGet = true;
  //   });
  //   this.getNews(1, 4, 2).then((res) => {
  //     this.media = res.data.data;
     
  //     this.mediaGet = true;
  //   });
  },
  methods: {
    getNews,
    getMoreNews(type) {
      if (type == 1) {
        showFullScreenLoading(".bignews");
        this.page.newsPage++;
        if (this.page.newsPage == 6) {
          this.page.newsPage = 2;
        }
      
        this.getNews(this.page.newsPage, 4, 1).then((res) => {
          // this.news.splice(0,this.news.length)
       
          this.news = res.data.data;
          hideFullScreenLoading(".bignews");
        });
      } else if (type == 2) {
        showFullScreenLoading(".media");
        this.page.mediaPage++;
        if (this.page.mediaPage == 6) {
          this.page.mediaPage = 2;
        }
        this.getNews(this.page.mediaPage, 4, 2).then((res) => {
          this.media = res.data.data;
          hideFullScreenLoading(".media");
        });
      } else if (type == 3) {
        showFullScreenLoading(".industry");
        this.page.industryPage++;
        if (this.page.industryPage == 6) {
          this.page.industryPage = 2;
        }
        this.getNews(this.page.industryPage, 4, 3).then((res) => {
          this.industry = res.data.data;
          hideFullScreenLoading(".industry");
        });
      }
    },
    goPreviewNews(index) {
      this.ishovernews = index;
    },
    goPreviewIndustry(index) {
      this.ishoverindustry = index;
    },
    goPreviewMedia(index) {
      this.ishovermedia = index;
    },

    goThisFun(index) {
      let x = document.querySelectorAll(".fun");
      this.funindex = index;
      x[index].classList.add("active-fun");
      this.ishoverfun = index;
    },
    goFunSite(urlname) {
      this.$router.push(urlname);
    },
    goVisitSite(type, index) {
      if (type == 1) {
        var a = document.createElement("a");
        a.href = this.news[index].url;
        a.target = "_blank";
        a.rel = "noreferrer";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else if (type == 2) {
        window.open(this.media[index].url, "_blank");
      } else if (type == 3) {
        window.open(this.industry[index].url, "_blank");
      }
    },
  },
      beforeRouteEnter(to, from, next) {
    next((vm) => {
      document.querySelector(".el-main").scrollTop = 0;
    });
  },
};
</script>

<style scoped lang="less">
.active-fun {
  background-color: rgb(41, 50, 225) !important;
  color: white !important;
}
.mainfun {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  .fun {
    margin-bottom: 20px;
    line-height: 70px;
    color: rgb(114, 114, 115);
    width: 100%;
    height: 70px;
    cursor: pointer;
    background-color: rgb(245, 246, 249);
    transition: all 0.2s;
    text-align: center;
    font-size: 20px;
  }
  .fun-words {
    padding: 30px;
    height: 550px;
    transition: all 0.6s;
    text-align: center;
    .words-title {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 20px;
    }
    .go-fun-site {
      .fun-click {
        cursor: pointer;
        color: skyblue;
        transition: all 0.3s;
      }
      .fun-click:hover {
        color: red;
      }
    }
  }
}
el-col {
  text-align: center;
}
.icon-shuaxin {
  cursor: pointer;
  transition: all 1s;
  color: rgb(30, 152, 249);
  // transform: rotate(360deg);
}
@keyframes turnZ {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
.icon-shuaxin:hover {
  animation-name: turnZ;
  animation-duration: 1s;
  animation-iteration-count: 1;
  color: white;
}
.news-rough {
  letter-spacing: 0px;
  margin-left: 20px;
  width: 100%;
  height: 110px;
  font-weight: 400;
  .rough-title {
    margin-top: 10px;
    line-height: 40px;
    font-size: 16px;
    color: #333333;
  }
  .rough-words {
    padding-right: 40px;
    font-size: 14px;
    color: #888888;
    margin-top: 10px;
  }
}
.big-databox {
  height: 110px;
  position: relative;
  .triangle {
    width: 0;
    height: 0;
    position: absolute;
    right: 0;
    top: 45px;
  }
}
.activetri {
  border-right: 8px solid rgb(237, 243, 249);
  border-top: 8px solid rgb(55, 163, 250);
  border-left: 8px solid rgb(55, 163, 250);
  border-bottom: 8px solid rgb(55, 163, 250);
  color: white;
}
.activedata {
  background-color: rgb(55, 163, 250);
}
.data {
  display: inline;
  text-align: center;
  width: 100px;
  height: 110px;
}
.day {
  padding-top: 10px;
  letter-spacing: 0px;
  line-height: 60px;
  width: 100%;
  height: 50px;
  font-size: 30px;
  font-family: Bahnschrift;
  font-weight: normal;
  color: #333333;
}
.year-month {
  letter-spacing: 0px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #666666;
}
.news {
  font-family: Microsoft YaHei;
  letter-spacing: 2px;
}
.div-news {
  height: 110px;
}
.div-news:hover {
  background-color: rgb(237, 243, 249);
  cursor: pointer;
}
.span-title {
  font-size: 20px;
  font-weight: 400;
  color: rgb(30, 152, 249);
  letter-spacing: 1px;
}
.mynews {
  padding-bottom: 10px;
  padding-top: 10px;
  margin-top: 15px;
  width: auto;
  height: 440px;
  box-shadow: 0px 1px 16px 0px rgba(47, 47, 47, 0.14);
  border-radius: 8px;
  margin-bottom: 20px;
}
.sub-en {
  margin-top: 10px;
  color: white;
  font-family: Microsoft YaHei;
  letter-spacing: 2px;
}
.bigcardinfor {
  text-align: center;
}
.card-infor {
  font-family: Open Sans, Inter, Roboto, Oxygen, Fira Sans, Helvetica Neue,
    sans-serif;
  padding: 40px;
  .iconfont {
    font-size: 80px;
    color: rgb(241, 77, 93);
  }
  .feature-words {
    font-size: 30px;
  }
  .detail-words {
    line-height: 40px;
    color: rgb(130, 130, 141);
    letter-spacing: 2px;
    margin-top: 20px;
    font-size: 18px;
  }
  .more {
    cursor: pointer;
    margin-top: 33px;
    .iconfont {
      font-size: 15px;
    }
  }
}
#subtitle {
  color: rgb(30, 152, 249);
  font-size: 30px;
  font-family: sans-serif;
}
#subtitle:hover:after {
  left: 0%;
  right: 0%;
  width: 100%;
}
.bg {
  z-index: -1;
  height: 300px;
  background-size: 100%;
  left: 0;
  top: 0;
  width: 100%;
  height: 700px;
  background-size: cover;
}
.bg1 {
  position: absolute;
  z-index: -1;
  background-size: 100%;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
}
.theheader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  color: white;
}
.title {
  font-family: PingfangSC-Light, NotoSansHans-Light, Microsoft Yahei, sans-serif;
  font-weight: 800;
  position: absolute;
  top: 45%;
  left: 60%;
  color: white;
  font-size:30px;
  letter-spacing: 15px;
  
}
.title-en{
  font-family: Microsoft JhengHei UI, sans-serif;
  font-weight: 800;
  position: absolute;
  top: 55%;
  left: 55%;
  color: white;
  font-size:30px;
}
.title-en::after{
  position: absolute;
  left: -8%;
  top: 23%;
  content: "";
  height: 2px;
  width: 50px;
  background: #ffffff;
}
.title-img{
    position: absolute;
  top: 30%;
  left: 60%;
  opacity: .6;
}
</style>
