import fetch from '@/utils/fetch'

export function login(data) {
  return fetch({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return fetch({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return fetch({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
