<template>
    <div>
      <el-row>
        <el-col>
            <el-carousel indicator-position="inside">
              <el-carousel-item v-for="item in 4" :key="item">
                <img src="@/assets/images/111.jpg" alt="" class="img">
              </el-carousel-item>
            </el-carousel>
        </el-col>
      </el-row>
     


    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped="true">
.el-carousel{
    height:300px;
}
.img{
  height:300px;
  width:100%;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
