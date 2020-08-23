import { createApp } from 'vue'
import App from './App.vue'

function getRole() {
  return Promise.reject('路由不存在')
}

import router from './router/idnex'
import { store } from './store/index'
router.beforeEach((to, from, next) => {
  if (to.path === '/nomatch') {
    return getRole()
  } else {
    next()
  }
  // throw new Error()
  // return Promise.reject(new Error())
  next()
})

const app = createApp(App)
app
  .use(router)
  .use(store)
  .mount('#app')
// app.component
// app.minix
// app.directive
