import { defineStore } from 'pinia'
import { ref } from 'vue'

const useToken = defineStore('token', () => {
  const token = ref(null)
  const updateToken = newToken => token.value = newToken // 更新 token
  const removeToken = () => token.value = null // 清除 token
  return { token, updateToken, removeToken }
}, {
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'token', // 存储键名
        storage: localStorage // 存储方式
      }
    ]
  }
})

export default useToken
