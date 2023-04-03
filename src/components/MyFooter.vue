<template>
  <div class="bigone">
    <el-row justify="center" :gutter="30"
      >
      <el-col 
        ><div class="bottomnav">
          <p>介绍页快速导航</p>
          <ul>
            <li>
              <span
                class="nav-item"
                @mouseenter="goCanSeen(9)"
                @mouseleave="goUnseen(9)"
                @click="goRemoteSense"
                >智慧天眼微介绍</span
              >
            </li>
            <li>
              <span
                @mouseenter="goCanSeen(10)"
                @mouseleave="goUnseen(10)"
                @click="goIntelligent"
                >智慧解译</span
              >
            </li>
            <li>
              <span
                @mouseenter="goCanSeen(11)"
                @mouseleave="goUnseen(11)"
                @click="goTechnology"
                >技术实现</span
              >
            </li>
            <li v-if="!isLogin">
              <span
                @mouseenter="goCanSeen(12)"
                @mouseleave="goUnseen(12)"
                @click="goLogin"
                >登录/注册</span
              >
            </li>
            <li v-else>
              <span
                @mouseenter="goCanSeen(12)"
                @mouseleave="goUnseen(12)"
                @click="logOut"
                >登出</span
              >
            </li>
          </ul>
        </div></el-col
      >
    </el-row
    >
  </div>
  <div class="smallone">
    <span
      ><span class="hidden-sm-and-down">Copyright © 2023.</span> All rights
      reserved.By Xhu-security</span
    >
  </div>
</template>

<script>
import {
  goRemoteSense,
  goIntelligent,
  goTechnology,
  goLogin,
  goDetectChanges,
  goDetectTargets,
  goObtainTargets,
  goClassify,
  goHistory,
} from "@/utils/gosomewhere.js";
export default {
  name: "myfooter",
  data() {
    return {
      isLogin: localStorage.getItem("token"),
    };
  },
  methods: {
    goRemoteSense,
    goIntelligent,
    goTechnology,
    goLogin,
    goDetectChanges,
    goDetectTargets,
    goObtainTargets,
    goClassify,
    goHistory,
    goCanSeen(index) {
      let a = document.querySelectorAll(".jiantou");
      a[index].classList.add("cansee");
    },
    goUnseen(index) {
      let a = document.querySelectorAll(".jiantou");
      a[index].classList.remove("cansee");
    },
    goOtherSite(site){
      window.open(site)
    }
  },
  mounted() {
    document.body.style.overflow = "auto";
  },
};
</script>
 
<style scoped>
.bigone {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  width: 100%;
  height: 200px;
  background-color: rgb(26, 26, 26);
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.smallone {
  letter-spacing: 2px;
  width: 100%;
  height: 60px;
  background-color: black;
  line-height: 60px;
  color: rgb(192, 192, 192);
  font-family: "Poppins", sans-serif;
  text-align: center;
}
.smallone span {
  margin: 0 auto;
}
.bottomnav {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 50px;
  gap: 50px;
}
.bottomnav p {
  font-size: 20px;
  color: white;
  height: 50px;
  width: 35%;
  text-align: center;
  line-height: 50px;
  margin: 0;
  padding: 0;
}
.bottomnav ul {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding: 0;
}
.bottomnav ul li {
  height: 50px;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bottomnav span {
  display: inline-block;
  color: rgb(192, 192, 192);
  font-size: 16px;
  cursor: pointer;
  transition: all 0.6s;
  width: 100%;
}
.bottomnav span:hover {
  color: rgb(54, 54, 243);
}
.qq {
  margin-left: 80px;
  color: rgb(192, 192, 192);
}
ul {
  padding-left: 0;
}
.icon-jiantou {
  font-size: 20px;
  font-weight: bolder;
  color: red;
  opacity: 0;
}
@keyframes cansee {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.cansee {
  animation-duration: 0.8s;
  animation-fill-mode: both;
  animation-name: cansee;
}
.see {
  opacity: 1;
}



</style>
