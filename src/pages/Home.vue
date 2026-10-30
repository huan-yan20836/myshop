<script setup>
import { ref } from 'vue'
import { showToast } from 'vant'
import HomeSwiper from '../components/HomeSwiper.vue'
import HomeGrid from '../components/HomeGrid.vue'
import HomeProduct from '../components/HomeProduct.vue'
import HomeNew from '../components/HomeNew.vue'
import HomeTop from '../components/HomeTop.vue'

const searchValue = ref('')
const showProduct = ref(false)

const onSearch = (value) => {
  showToast('搜索：' + value)
}

const onCancel = () => {
  showToast('搜索取消')
}
</script>

<template>
  <van-search v-model="searchValue" placeholder="请输入搜索关键词" shape="round" show-action @search="onSearch"
    @cancel="onCancel" />
  <HomeSwiper />
  <HomeGrid @click="showProduct = !showProduct" />
  <HomeProduct v-show="showProduct" />
  <HomeNew />
  <HomeTop />
</template>