import axios from 'axios'

const API = axios.create({ baseURL: 'https://michi1008-travel-japan-mern-app-4889.zeet.app/'})

// to make middleware to work:
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
  }

  return req
})

export const fetchPosts = () => API.get('/posts')
export const createPost = newPost => API.post('/posts', newPost)
export const updatePost = (id, updatedPost) => API.patch(`posts/${id}`, updatedPost)
export const deletePost = id => API.delete(`/posts/${id}`)
export const likePost = id => API.patch(`/posts/${id}/likePost`)

export const signIn = formData => API.post('/users/signin', formData)
export const signUp = formData => API.post('/users/signup', formData)