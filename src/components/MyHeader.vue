<template>
  <el-row type="flex" justify="center">
    <el-col :span="3" @click="goRemoteSense"
      ><span id="subtitle"
        ><span class="hidden-md-and-down">智慧天眼</span>介绍</span
      ></el-col
    >
    <el-col :span="5" @click="goIntelligent"
      ><span id="subtitle"
        ><span class="hidden-md-and-down">基于深度学习的</span>智能解译</span
      ></el-col
    >
      <el-col :span="2" class="hidden-md-and-down"
        ><img id="logo" :src="require('../assets/image/logo/8.png')" title="hello" width="200" height="100"
      /></el-col>
    <el-col :span="5" @click="goTechnology"
      ><span id="subtitle">技术实现</span></el-col
    >
    <el-col :span="3" @click="goLogin" v-if="!isLogin"
      ><span id="subtitle"
        >登录<span class="hidden-md-and-down">/注册</span></span
      ></el-col
    >
    <el-col :span="3" v-else
      ><span id="subtitle" @click="logOut">登出</span></el-col
    >
  </el-row>
</template>

<script>
import {
  goRemoteSense,
  goIntelligent,
  goTechnology,
  goLogin,
  goDetectChanges
} from "@/utils/gosomewhere";
export default {
  name: "myheader",
  methods: {
    goRemoteSense,
    goIntelligent,
    goTechnology,
    goLogin,
    goDetectChanges,
    logOut() {
      document.body.style.overflow = "hidden";
      this.$confirm("是否确定登出?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          document.body.style.overflow = "auto";
          
          localStorage.setItem('name','abc')
          localStorage.setItem("token", "");
          this.$message.success("登出成功！");
          this.$router.push("login");
        })
        .catch(() => {
          document.body.style.overflow = "auto";
          this.$message({
            type: "info",
            message: "已取消操作",
          });
        });
    },
  },
  data() {
    return {
      isLogin: localStorage.getItem("token"),
    };
  },
};
</script>

<style lang="less" scoped>
body {
  padding-right: 0 !important;
}
.el-col {
  line-height: 150px;
  text-align: center;
  height: 150px;
  font-weight: 700;
  font-family: SimHei sans-serif;
}
#logo {
  margin-top: 20px;
  height: 100px;
}
#subtitle {
  font-size: 16px;
  position: relative;
  display: inline;
  padding-bottom: 3px;
  letter-spacing: 2px;
  cursor: pointer;
}
#subtitle::after {
  content: "";
  width: 0px;
  height: 3px;
  background: #007ee6;
  position: absolute;
  top: 100%;
  left: 50%;
  right: 50%;
  transition: all 0.5s;
}
#subtitle:hover:after {
  left: 0%;
  right: 0%;
  width: 100%;
}

</style>
