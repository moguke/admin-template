import fetch from '@/utils/fetch'

export function getList(params) {
  return fetch({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}
