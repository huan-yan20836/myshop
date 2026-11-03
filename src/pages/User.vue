<template>
  <div v-if="user.isLogin" class="user">
    <van-image round width="64" height="64" :src="user.avatar" />
    <div class="username">{{ user.username }}</div>
    <van-button block round type="danger" @click="logout">退出登录</van-button>
  </div>
  <div v-else class="user">
    <div class="username">您还未登录</div>
    <van-button block round type="primary" @click="goLogin">登录</van-button>
    <van-button block round type="default" @click="goRegister">注册</van-button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import useUser from '../stores/user'
import useToken from '../stores/token'

const router = useRouter()
const { user, removeUser } = useUser()
const { removeToken } = useToken()

const goLogin = () => {
  router.push({ name: 'login' })
}

const goRegister = () => {
  router.push({ name: 'register' })
}

const logout = () => {
  removeToken()
  removeUser()
}
</script>

<style lang="less" scoped>
.user {
  padding: 40px 20px;
  text-align: center;
}
.username {
  margin: 16px 0 24px;
  font-size: 16px;
  color: #333;
}
button + button {
  margin-top: 12px;
}
</style>
