<script setup>
// 导入Vue Router的useRoute和useRouter钩子
import { useRoute, useRouter } from 'vue-router'
// 导入Vue的computed函数
import { computed } from 'vue'
// 获取当前路由信息
const route = useRoute()
// 获取路由实例
const router = useRouter()
// 从路由参数中获取产品ID
const proId = route.params.id
const brandList = [
  { id: 1, name: '直播', pic_url: '/images/product1.png' },  
  { id: 2, name: '推荐', pic_url: '/images/product2.png' },  
  { id: 3, name: '补贴', pic_url: '/images/product3.png' },  
  { id: 4, name: '分享', pic_url: '/images/product4.png' },  
]
// 计算属性：根据产品ID获取对应的图片URL
const picUrl = computed(() => {
  // 在品brandList中查找ID匹配的产品
  const item = brandList.find(item => item.id === Number(proId))
  // 如果找到匹配项，返回其pic_url，否则返回空字符串
  return item ? item.pic_url : ''
})
</script>

<template>
  <div class="header">
    <van-icon name="arrow-left" @click="router.back()" />
    <div>商品详情</div>
  </div>
  <div class="content">
    <div>商品{{ proId }}</div>
    <img :src="picUrl" />
  </div>
</template>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  padding: 12px;
  background: #ff8000;
  color: #fff;

  .van-icon {
    font-size: 20px;
  }

  div {
    flex: 1;
    text-align: center;
    font-size: 16px;
  }
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;

  div {
    font-size: 16px;
  }

  img {
    width: 80%;
  }
}
</style>