<template>
    <van-grid class="home-product" :column-num="2" :gutter="2" :border="false" square>
        <van-grid-item v-for="item in brandList" :key="item.id" @click="goDetails(item)">
            <div class="home-product__box">
                <img class="home-product__img" :src="item.pic_url" alt="" />
                <div class="home-product__label">{{ item.name }}</div>
            </div>
        </van-grid-item>
    </van-grid>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goDetails = (item) => {
  router.push({
    name: 'proDetails',
    params: { id: item.id },
    query: { pic_url: item.pic_url },
  })
}
const brandList = [
  { id: 1, name: '直播', pic_url: '/images/product1.png' },
  { id: 2, name: '推荐', pic_url: '/images/product2.png' },
  { id: 3, name: '补贴', pic_url: '/images/product3.png' },
  { id: 4, name: '分享', pic_url: '/images/product4.png' },
]
</script>
<style lang="less" scoped>
.home-product {
  :deep(.van-grid-item__content) {
    padding: 0;
  }
  &__box {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  &__img {
    width: 110%;
    display: block;
  }
  &__label {
    position: absolute;
    left: 10px;
    top: 10px;
    color: #fff;
    font-weight: bold;
    font-size: 0.8em;
    background: red;
    border-radius: 10%;
    padding: 2px 6px;
  }
}
</style>
