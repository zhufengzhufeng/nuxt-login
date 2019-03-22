<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="3">
          <img src="@/assets/images/logo.png" width="116px" height="43px">
        </el-col>
        <el-col :span="15">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/profile">个人中心</el-menu-item>
        </el-menu>
        </el-col>
        <el-col :span="6">
          <ul class="right-nav" >
            <li><nuxt-link to="/login">登录</nuxt-link></li>
            <li><nuxt-link to="/reg">注册</nuxt-link></li>
          </ul>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer>
      尾部
    </el-footer>
  </el-container>
</template>
<script>
export default {
  watch:{
    $route(){
      this.activeIndex = this.$route.path
    }
  },
  
  data(){
    return {activeIndex:'/'}
  },
  methods:{
    handleSelect(){

    }
  }
}
</script>
<style scoped="true">
.el-main{
    padding: 0;
    min-height: calc(100vh - 120px);     
}
img{
  margin-top: 8.5px;
}
.right-nav{
  width: 150px;
  float:right;
}
.right-nav li{
  width: 50px;
  text-align: center;
  display: inline-block;
  line-height: 60px;
}
.el-footer{
  color:#ffff;
  text-align: center;
  line-height: 60px;
  background: #2a2a2a;
}
</style>
