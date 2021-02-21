<template>
  <div class="home">
    <!-- <HelloWorld msg='Welcome to Your Vue.js App'/> -->
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-header"
          mode="horizontal"
          @select="handleSelect"
          background-color="#384a28"
          text-color="#fff"
          active-text-color="#fff"
        >
          <el-menu-item index="1"><img src="http://ehall.sdut.edu.cn/new/portal/custom/img/logo/logo-mini.png" alt=""></el-menu-item>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-user-solid"></i>{{ UserName }}</template>
            <el-menu-item index="2-1" >
              <router-link to="dashbord" style="color: white;">
                <i class="el-icon-set-up"></i>
                控制台
              </router-link>
            </el-menu-item>
            <el-menu-item index="2-2"><i class="el-icon-news"></i> 消息</el-menu-item>
            <el-menu-item index="2-3"
              ><div @click="signIn">签到</div>
            </el-menu-item>
            <el-menu-item index="2-4">退出登录</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-main class="main">
        <div class="title"><h1>网络与信息安全创新实验室</h1></div>
        <div class="title-en">
          <h3>Network and Information Security Innovation Lab</h3>
        </div>
        <div class="main-article">
          <div class="article-left"></div>
          <div class="article-center"></div>
          <div class="article-right"></div>
        </div>
        <!-- <div class="container">
          <div v-for="item in pngs" :key="item.index">
            <img v-lazy="item" alt="">
          </div>
        </div> -->
      </el-main>
    </el-container>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      UserName: '星宇',
      activeIndex: '1',
      activeIndex2: '1',
      pngs: [
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    signIn () {
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
.home /deep/ .el-header {
  padding: 0;
}
.home /deep/ .el-main {
  padding-top: 100px;
}
.el-menu-header{
  display: flex;
  justify-content: flex-start;
  padding: 10px;
}
.title, .title-en {
  margin: 0 auto;
}

// 三栏布局
.main-article{
  display: flex;
  line-height: 10px;
  height: 10px;
  .article-left{
    background-color: #0b6303;
    width: 200px;
  }
  .article-right{
    background-color: #0b6303;
    width: 200px;
  }
  .article-center{
    background-color: #0b6303;
    // width: 100%;
    flex-grow: 1;
  }
}
</style>
