<template>
    <div class="pro-details">
        <div class="pro-details__header">
            <van-icon name="arrow-left" class="pro-details__back" @click="goBack" />
            <span class="pro-details__title">商品详情</span>
        </div>
        <div class="pro-details__section">商品{{ route.params.id }}</div>
        <div class="pro-details__section">
            <img class="pro-details__img" :src="route.query.pic_url" alt="" />
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<style lang="less" scoped>
.pro-details {
  &__header {
    display: flex;
    align-items: center;
    height: 46px;
    padding: 0 10px;
    background: orange;
    color: #fff;
  }

  &__back {
    font-size: 20px;
  }

  &__title {
    flex: 1;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    margin-right: 20px;
  }

  &__section {
    padding: 10px;
  }

  &__img {
    display: block;
    width: 80%;
  }
}
</style>
