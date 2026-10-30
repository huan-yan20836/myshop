<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const brandList = [
  { id: 1, name: '直播', pic_url: '/images/product1.png' },
  { id: 2, name: '推荐', pic_url: '/images/product2.png' },
  { id: 3, name: '补贴', pic_url: '/images/product3.png' },
  { id: 4, name: '分享', pic_url: '/images/product4.png' },
]

</script>

<template>
  <van-grid :column-num="2" square :gap="2" :border="false">
    <van-grid-item v-for="item in brandList" :key="item.id" :to="{name:'proDetails',params:{id:item.id}}">
      <img :src="item.pic_url" />
      <div>{{ item.name }}</div>
    </van-grid-item>
  </van-grid>
</template>

<style lang="less" scoped>
.van-grid-item {
  position: relative;

  img {
    width: 110%;
  }

  div {
    position: absolute;
    left: 10px;
    top: 10px;
    color: #fff;
    font-weight: bold;
    font-size: 0.8em;
    background: red;
    border-radius: 10%;
    padding: 1px 3px;
  }
}
</style>