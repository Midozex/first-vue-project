import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'

import TemplateUsers from './pages/Users/TemplateUsers.vue'
import IndexUser from './pages/Users/IndexUser.vue'
import ShowUser from './pages/Users/ShowUser.vue'

import TemplatePost from './pages/Posts/TemplatePost.vue'
import IndexPost from './pages/Posts/IndexPost.vue'
import ShowPost from './pages/Posts/ShowPost.vue'
import CreatePost from './pages/Posts/CreatePost.vue'
import EditPost from './pages/Posts/EditPost.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/users',
    name: 'usersTemplate',
    component: TemplateUsers,
    children: [
      { path: '', name: 'users', component: IndexUser },
      { path: ':id', name: 'userId', component: ShowUser }
    ]
  },
  {
    path: '/posts',
    name: 'postTemplate',
    component: TemplatePost,
    children: [
      { path: '', name: 'posts', component: IndexPost },
      { path: ':id', name: 'postId', component: ShowPost },
      { path: 'create', name: 'createPost', component: CreatePost },
      { path: 'edit/:id', name: 'editPost', component: EditPost }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
