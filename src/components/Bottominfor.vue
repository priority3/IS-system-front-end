<template>
  <el-header height="60px" >
    <el-row >
      <el-col :xs="12" :sm="12" :md="16" :lg="16" :xl="16" class="hidden-sm-and-down" style="margin-left:30px"> web developement based on vue3 + elememnt ui + axios</el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="4" style="margin-left:30px">more details please click <a @click="goTechnology">here<i class="iconfont icon-dianji1" style="font-size:28px"></i></a></el-col>
    </el-row>
  </el-header>
</template>

<script>
import {goTechnology} from "@/utils/gosomewhere.js"
export default {
  name: "bottominfor",
  methods:{
    goTechnology
  }
};
</script>

<style scoped>
.el-header {
  margin-top: 30px;
  line-height: 60px;
  position: relative;
  left: -37px;
  width: 120%;
  color: rgb(157,164,168);
  font-size: 15px;
  font-family: sans-serif;
  overflow: hidden;
}
a{
  color: rgba(255, 0, 128, 0.979);
  cursor: pointer;
  transition: all .4s;
}
a:hover{
  color: skyblue;
}
</style>
