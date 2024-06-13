import router from './index.js'
import { showConfirmDialog } from 'vant'
// 需要登录才可以进入的页面
const list = ['/success', '/myorder', '/path3']
const token = false

router.beforeEach((to, from, next) => {
  if (token) {
    if (to.path === '/login') {
      next({ path: '/home' })
    } else {
      next()
    }
  } else {
    // 没有登录
    if (list.indexOf(to.path) !== -1) {
      showConfirmDialog({
        title: '提示',
        message: '此功能需要登录之后才可使用。',
        confirmButtonText: '去登录',
        confirmButtonColor: '#ee0a24'
      }).then(() => {
        next(`/login?redirect=${to.fullPath}`)
      }).catch(() => {})
    } else {
      next()
    }
  }
})
