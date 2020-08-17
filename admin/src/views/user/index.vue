<template>
  <div>
    <topBar></topBar>
    <siderBar></siderBar>
    <div class="user">
      用户页
    </div>
  </div>
</template>

<script>
import topBar from '../../components/topBar/index'
import siderBar from '../../components/siderBar/index'
export default {
  components: {
    topBar,
    siderBar
  }
}
</script>

<style lang="less" scoped>
.user {
  margin: 5px 0 0 200px;
}
</style>
