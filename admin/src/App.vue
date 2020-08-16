<template>
  <div id="app">
    <topBar></topBar>
    <siderBar></siderBar>
    <router-view></router-view>
  </div>
</template>

<script>
import topBar from './components/topBar/index'
import siderBar from './components/siderBar/index'
export default {
  components: {
    topBar,
    siderBar
  }
}
</script>

<style lang="less">

</style>
