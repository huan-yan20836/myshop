<script setup>
const banner = ['/images/banner1.jpg', '/images/banner2.jpg']
</script>

<template>
  <van-swipe :autoplay="3000" lazy-render indicator-color="#FF8000">
    <van-swipe-item v-for="(item, index) in banner" :key="index">
      <img :src="item" alt="" />
    </van-swipe-item>
  </van-swipe>
</template>

<style lang="less" scoped>
.van-swipe {
  width: 100%;

  img {
    width: 100%;
  }
}
</style>