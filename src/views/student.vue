<template>
  <div class="back">
    <headers/>
    <el-col :span="3.5">
      <el-row>
        <div class="grid-content bg-purple-dark">
      <h1 style="color: #eaeaea" align="center">学生门户</h1>
        </div>
      </el-row>
      <el-menu
          class="menu-nav"
          router
          :default-active="currentPath"
          :default-openeds="openeds"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>我的选课</span>
          </template>
          <el-menu-item-group>
            <template slot="title">开课情况</template>
            <el-menu-item index="/student/ClassScheduleCard">课表查看</el-menu-item>
            <el-menu-item index="/student/ClassOpening">选课情况</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>我的成绩</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/student/StudentAchievement">成绩查看</el-menu-item>
            <el-menu-item index="2-2">成绩排名查看</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>学籍信息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">学生学籍卡片</el-menu-item>
            <el-menu-item index="3-2">个人信息核对</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>公告信息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">全校总课表</el-menu-item>
            <el-menu-item index="4-2">全校培养方案</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
    <router-view/>
  </div>
</template>
<script>
import Headers from "../common/header";
export default {
  name: "student",
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      currentPath: location.pathname,
      openeds: ['1','2','3','4'],
      uniqueOpened: false,
      isRouterAlive: true
    }
  },
  components: {
    Headers
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.back {
  background-color: #eaeaea;
}
.el-menu {
  border: none;
}
.menu-nav:not(.el-menu--collapse) {
  width: 200px;
  min-height: 200px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple-dark {
  background: #545c64;
}
</style>