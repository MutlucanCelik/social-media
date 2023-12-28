import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '@/views/Register.vue'
import ForgotPassword from '@/views/ForgotPassword.vue'
import Index from '@/views/Index.vue'
import Profil from '@/views/Profil.vue'
import Message from '@/views/Message.vue'
import Settings from '@/views/Settings.vue'
import Notifications from '@/views/Notifications.vue'
import Reports from '@/views/Reports.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/forgot-password',
      name: 'ForgotPassword',
      component: ForgotPassword
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/profil',
      name: 'Profil',
      component: Profil
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/reports',
      name: 'Reports',
      component: Reports
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: Notifications
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('tokenKey');

  if (to.path === '/' || to.path === '/register' || to.path === '/forgot-password') {
    if (token !== null) {
      next('/index'); // veya başka bir sayfa
    } else {
      next(); // Devam et
    }
  } else {
    // Diğer sayfalara geçerken token kontrolü
    if (token === null) {
      next('/'); // veya başka bir sayfa
    } else {
      next(); // Devam et
    }
  }
});


export default router
