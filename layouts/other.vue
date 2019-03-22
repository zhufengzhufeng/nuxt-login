<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="3">
          <img src="@/assets/images/logo.png" width="116px" height="43px">
        </el-col>
        <el-col :span="6" :offset="15">
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
.el-header{
  box-shadow: 1px 0 1px 1px #e1e1e1
}
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
