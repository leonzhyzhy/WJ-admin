<template>
  <div>
    <div class="siderBar">
      <div class="top-bar">
        <div class="logo">
          <img src="../../assets/logo1.png" alt="">
        </div>
        <div class="logo-name">商业联盟管理系统</div>
      </div>
      <el-collapse accordion class="parentMenu">
        <el-collapse-item  v-for="item in menus" :key="item.menuId">
          <template slot="title">
            <i class="header-icon el-icon-info"></i>
            <span>{{item.name}}</span>
          </template>
          <div v-for="(subItem, index) in item.subMenus" :key="index" @click="routerClick">{{subItem.name}}</div>
        </el-collapse-item>
        <!-- <el-collapse-item title="反馈 Feedback" >
          <template slot="title">
            <i class="header-icon el-icon-info"></i>
            <span>{{}}</span>
          </template>
          <div>系统管理</div>
          <div>
            <el-collapse class="subMenu" accordion>
              <el-collapse-item title="系统管理">
                <div>系统管理</div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-collapse-item> -->
      </el-collapse>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      menus: []
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created () {
    this.menus = this.user.menusList
  },
  methods: {
    aaa () {
      console.log(2122)
    },
    routerClick () {
      this.$router.push('/roles')
    }
  }
}
</script>

<style lang="less" scoped>
.siderBar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 200px;
  background-color: #304156;
  .top-bar {
    background-color: #2b2f3a;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo {
      margin-right: 10px;
      img {
        width: 32px;
        height: 32px;
      }
    }
    .logo-name {
      font-weight: 600;
      color: #ffffff;
    }
  }
}
</style>
<style>
.siderBar .el-collapse {
  border: none;
}
.siderBar /deep/ .el-collapse-item__header {
  background-color: #304156;
  height: 60px;
  line-height: 60px;
  color: #bfcbd9;
  border: none;
  padding: 0 10px;
  padding-left: 20px;
}
.siderBar /deep/ .el-collapse-item__wrap {
  border: none;
}
.siderBar /deep/ .el-collapse-item__content {
  background-color: #1f2d3d;
  color: #bfcbd9;
  padding-left: 30px;
  line-height: 60px;
  font-size: 12px;
  padding-bottom: 0;
  cursor: pointer;
}
.siderBar /deep/ .el-collapse.subMenu .el-collapse-item__header {
  background-color:  #1f2d3d;;
}
</style>
