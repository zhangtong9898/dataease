import request from '@/config/axios'

export interface Font {
  id: string
  name: string
  fileName: string
  isDefault: boolean
  isBuiltin?: boolean
}

export const list = (data = {}) => {
  return request.post({ url: '/typeface/listFont', data }).then(res => {
    return res?.data
  })
}

export const create = (data = {}) => {
  return request.post({ url: '/typeface/create', data }).then(res => {
    return res?.data
  })
}

export const edit = (data = {}) => {
  return request.post({ url: '/typeface/edit', data }).then(res => {
    return res?.data
  })
}

export const changeDefault = (data = {}) => {
  return request.post({ url: '/typeface/changeDefault', data }).then(res => {
    return res?.data
  })
}

export const deleteById = id => {
  return request.post({ url: '/typeface/delete/' + id, data: {} }).then(res => {
    return res?.data
  })
}
