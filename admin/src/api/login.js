import request from '@/utils/request.js'

// 登录方法
// export function login(username, password, code, uuid) {
//   const data = {
//     username,
//     password,
//     code,
//     uuid
//   }
//   return request({
//     url: '/login',
//     method: 'post',
//     data: data
//   })
// }
export function login (account, password) {
  const data = {
    account,
    password
  }
  return request({
    url: '/admin/system/login?' + 'account=' + data.account + '&password=' + data.password,
    method: 'get'
  })
}

// 获取用户详细信息
export function getInfo () {
  return request({
    url: '/getInfo',
    method: 'get'
  })
}

// 退出方法
export function logout () {
  return request({
    url: '/admin/system/logout',
    method: 'post'
  })
}

// 获取验证码
export function getCodeImg () {
  return request({
    url: '/captchaImage',
    method: 'get'
  })
}
