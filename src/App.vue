<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from 'vue-router'
import { getUser } from "./api";
import useUser from "./stores/user";

const route = useRoute()
const router = useRouter()
const { user, updateUser } = useUser();

const onClickLeft = () => {
  router.push({ name: 'Home' })
}

onMounted(() => {
  if (user.isLogin) {
    loadUser();
  }
});

const loadUser = async () => {
  const data = await getUser();
  if (data) {
    updateUser({
      isLogin: true,
      username: data.username,
      avatar: data.avatar,
    });
  }
};
</script>

<template>
  <van-nav-bar
    v-if="route.meta.isShowNav"
    :title="route.meta.title"
    fixed
    placeholder
    :left-arrow="route.meta.isShowBack"
    @click-left="onClickLeft"
  />
  <router-view />
  <van-tabbar route fixed placeholder active-color="#FF8000">
    <van-tabbar-item :to="{ name: 'Home' }" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item :to="{ name: 'Category' }" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item :to="{ name: 'Message' }" icon="chat-o">消息</van-tabbar-item>
    <van-tabbar-item :to="{ name: 'Cart' }" icon="shopping-cart-o">购物车</van-tabbar-item>
    <van-tabbar-item :to="{ name: 'User' }" icon="user-o">用户</van-tabbar-item>
  </van-tabbar>
</template>

<style>
.van-nav-bar {
  --van-nav-bar-height: 46px;
  --van-nav-bar-background: #ff8000;
  --van-nav-bar-title-text-color: #fff;
  --van-nav-bar-icon-color: #fff;
}
</style>
