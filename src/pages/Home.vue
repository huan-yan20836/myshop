<template>
    <van-search v-model="keyword" placeholder="2026240401075-冯灿" @search="onSearch" @cancel="onCancel" show-action shape="round" />
    <HomeSwiper />
    <HomeGrid @click="toggleProduct" />
    <HomeProduct v-show="showProduct" />
</template>

<script setup>
import { showToast } from 'vant';
import { ref } from 'vue'
import HomeSwiper from '../components/HomeSwiper.vue';
import HomeGrid from '../components/HomeGrid.vue';
import HomeProduct from '../components/HomeProduct.vue';

const keyword = ref('')
const showProduct = ref(false)

const toggleProduct = () => {
  showProduct.value = !showProduct.value
}
// console.log(keyword.value)

const onSearch = (value) => {
  // console.log('搜索:', value)
  showToast("搜索内容："+value)
}

const onCancel = ()=>{
  showToast("取消")
}
</script>