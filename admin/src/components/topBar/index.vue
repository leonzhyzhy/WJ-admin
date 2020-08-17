<template>
  <div class="topbar">
    <div class="left">
      <div class="openSiderbar">
        <span class="el-icon-s-fold"></span>
      </div>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right">
      <div class="demo-input-suffix">
        <el-input
          placeholder="请输入内容"
          >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <span class="img">
            <img src="../../assets/avatar.jpg" alt="">
          </span>
          <i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('LogOut').then(res => {
        sessionStorage.clear()
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.topbar {
  height: 50px;
  display: flex;
  align-items: center;
  margin-left: 200px;
  background-color: #fff;
  justify-content: space-between;
  white-space: nowrap;
  padding-right: 20px;
  box-shadow: 0px 5px 10px -4px rgba(0, 0, 0, 0.2);
  .left {
    display: flex;
    align-items: center;
    .el-breadcrumb {
      display: flex;
    }
    .openSiderbar {
      padding: 0 20px;
      height: 100%;
      display: flex;
      align-items: center;
      .el-icon-s-fold {
        font-size: 26px;
        color: gainsboro;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    .el-dropdown-link {
      cursor: pointer;
    }
    .img {
      display: inline-flex;
      width: 50px;
      height: 100%;
      align-items: center;
      padding: 5px;
      margin-left: 10px;
      img {
        width: 45px;
        height: 45px;
        border-radius: 5px;
      }
    }
  }
}
</style>
