<template>
    <van-swipe class="home-swiper" :autoplay="3000" lazy-render indicator-color="#FF8000">
        <van-swipe-item v-for="item in banners" :key="item">
            <img class="home-swiper__img" :src="item" alt="" />
        </van-swipe-item>
    </van-swipe>
</template>

<script setup>
const banners = [
  '/images/banner1.jpg',
  '/images/banner2.jpg',
]
</script>

<style lang="less" scoped>
.home-swiper {
  width: 100%;

  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  :deep(.van-swipe__track) {
    height: auto;
  }

  :deep(.van-swipe-item) {
    height: auto;
  }
}
</style>
