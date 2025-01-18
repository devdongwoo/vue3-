import { posts } from '.'

export function getPosts(params) {
  return posts.get('/', { params })
}

export function getPost(id) {
  return posts.get(`/${id}`)
}

export function patchPost(id, params) {
  return posts.patch(`/${id}`, params)
}

export function createPost(data) {
  return posts.post('', data)
}

export function deletePost(id) {
  return posts.delete(`/${id}`)
}
