import axios from 'axios'
import store from '~/store/index'
import { setInterceptors } from './common/interceptors'

const API_END_POINT = 'http://13.209.30.200:5000'

function createInstance() {
  const instance = axios.create({
    // AxiosRequestConfig = axios 공통 설정란
    baseURL: API_END_POINT, //process.env.API_ENDPOINT
  })

  return setInterceptors(instance)
}

const instance = createInstance()

// login, signup
function registerUser(userData) {
  const registerUrl = 'signup'
  return instance.post(`${registerUrl}`, userData) //어떤서버로 요청할지 url
}

function loginUser(userData) {
  return instance.post('login', userData)
}

// postContent
function readPost(postId) {
  const readPostUrl = `posts/${postId}`
  return instance.post(readPostUrl)
}

function createComment(userData) {
  const createCommentUrl = 'comments/create'
  return instance.post(createCommentUrl, userData)
}

function deleteComment(commentId) {
  const deleteCommentUrl = 'comments/delete'
  return instance.post(deleteCommentUrl, commentId)
}

// userDetailInfo
function userDetailInfo(userId) {
  console.log('userid:', `users/${userId}`)
  return instance.get(`/users/${userId}`)
}

//loginForm
export {
  registerUser,
  loginUser,
  readPost,
  createComment,
  deleteComment,
  userDetailInfo,
}
