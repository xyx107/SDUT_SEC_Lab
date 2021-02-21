<template>
  <div class="about">
    <el-container class="container">
        <el-scrollbar class="scroll" style=" height: 100%;">
        <el-aside  class="sidebar" width="220px">
          <el-menu
            :default-openeds="['1']"
            background-color="#384a28"
            text-color="#fff"
            active-text-color="#ffd04b"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
          >
            <el-menu-item index="1"><i class="el-icon-user"></i> 个人中心</el-menu-item>
            <el-menu-item index="2"><i class="el-icon-folder"></i>资源中心</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-date"></i> 值日安排</el-menu-item>
            <el-menu-item index="4"><i class="el-icon-date"></i>课表安排</el-menu-item>
            <el-menu-item index="5"><i class="el-icon-share"></i>技术分享</el-menu-item>
            <el-submenu index="6">
              <template slot="title"><i class="el-icon-setting"></i> 系统管理</template>
              <el-menu-item index="3-1">权限管理</el-menu-item>
              <el-menu-item index="3-2">题库</el-menu-item>
              <el-menu-item index="3-3">器材管理</el-menu-item>
              <el-menu-item index="3-4">资源管理</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
      </el-scrollbar>
      <el-container class="main-header">
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px; color: #fff;"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>主页</el-dropdown-item>
              <el-dropdown-item>切换用户</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        <div>
            <el-breadcrumb separator="/" class="breadcrumb">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/' }"><a href="/">活动管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-main>
          <el-scrollbar style="height: 100%;">
            <div v-if="this.$route.path == '/admin'">
              <mian/>
            </div>
            <router-view></router-view>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item),
      isCollapse: false
    }
  },
  mounted () {
    console.log('111', process.env.NODE_ENV)
  }
}
</script>

<style lang="scss" scoped>
 .el-header {
  background-color: rgba(0, 0, 0, .3);
  color: #fff;
  line-height: 60px;
}
.breadcrumb{
  padding: 10px;
  border-top: 1px solid #ccc;
  background-color: #fff;
}
.el-menu-vertical-header:not(.el-menu--collapse) {
  // width: 200px;
}
.container{
  height: calc(100vh);
}
.sidebar {
  height: calc(100vh);
  padding: 0;
  // border: 1px solid #9aa4ac;
  background-color: #384a28;
  // border-top: none;
  // border-bottom: none;
}
.sidebar /deep/ .el-aside {
  padding: 0;
  color: #333;
  background-color: rgb(238, 241, 246);
}
.sidebar /deep/ .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
