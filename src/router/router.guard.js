import router from './index'
// import store from '../store/index'
import { isEmpty } from '../utils/index'

// can access without accessToken
// const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  document.title = isEmpty(to.meta.title) ? 'Vue Storyboard' : `Vue Storyboard | ${to.meta.title}`

  next()
})
