<template>
  <div>
    <topBar></topBar>
    <siderBar></siderBar>
    <div class="home">
      首页
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import topBar from '../components/topBar/index'
import siderBar from '../components/siderBar/index'
export default {
  components: {
    topBar,
    siderBar
  }
}
</script>

<style lang="less" scoped>
.home {
  margin:5px 0 0 200px;
}
</style>
