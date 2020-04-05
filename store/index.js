import axios from 'axios'
import { API_ROOT_URL } from '~/constants'

export const state = () => ({
  loginUserId: 0,
  loginUserName: '',
  loginUserAdmin: false,
  isLogin: false,
  userList: [],
  userPostList: [],
  postList: []
})

export const mutations = {
  login(state, user) {
    if (user) {
      state.loginUserId = user.id
      state.loginUserName = user.name
      state.loginUserAdmin = user.admin
      state.isLogin = true
    } else {
      state.isLogin = false
    }
  },
  logout(state) {
    if (state.isLogin) {
      state.loginUserId = 0
      state.loginUserName = ''
      state.loginUserAdmin = false
      state.isLogin = false
    }
  },
  getUsers(state, data) {
    state.userList = data.users
    state.userPostList = data.posts
  },
  getPosts(state, data) {
    state.postList = data.posts
  },
  addPost(state, user, post) {
    state.postList.pust(post)
    state.userPostList[state.userList.indexOf(user)].push(post)
  },
  updatePost(state, targetPost) {
    state.postList = state.postList.map(post => {
      let p = undefined
      if (post.id === targetPost.id) {
        p = targetPost
      } else {
        p = post
      }
      return p
    })
  },
  deletePost(state, post) {
    state.postList.splice(state.postList.indexOf(post), 1)
  }
}

export const actions = {
  getUsers(state) {
    axios.get(`${API_ROOT_URL}/users.json`).then(response => {
      state.commit("getUsers", response.data)
    })
  },
  getPosts(state) {
    axios.get(`${API_ROOT_URL}/posts.json`).then(response => {
      state.commit("getPosts", response.data)
    })
  },
}