import request from '../utils/request'

// 登录接口
export function login(data) {
  return request.post('/home/login', data)
}

// 用户信息接口
export function getUser() {
  return request.get('/home/user')
}

// 注册接口
export function register(data) {
  return request.post('/home/register', data)
}
