import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/Home/Home'
import Profile from './components/Profile/profile'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(require('vue-moment'));

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/profile', component: Profile },
    {path: '/', redirect: '/home'}
  ]
})
new Vue({
  router,
  render: h => h(App) 
}).$mount('#app')
