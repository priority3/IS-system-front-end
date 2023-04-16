import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const LogReg = () => import('@/views/LogReg.vue')

const Intro = () => import('@/views/introduce/Intro.vue')
const RemoteSense = () => import('@/views/introduce/RemoteSense.vue')
const Intelligent = () => import('@/views/introduce/Intelligent.vue')
const Technology = () => import('@/views/introduce/Technology.vue')

const NotFound = () => import('@/views/NotFound.vue')
let whiteList = ['login', 'remotesense', 'intelligent', 'introduce', 'technology']
const routes = [
  {
    path: '/',
    redirect: '/remotesense'
  },
  {

    path: '/login',
    name: 'login',
    component: LogReg
  },
  {
    path: '/introduce',
    // redirect:'/intelligent',
    name: 'introduce',
    component: Intro,
    children: [{
      path: '/remotesense',
      name: 'remotesense',
      component: RemoteSense
    }, {
      path: '/intelligent',
      name: 'intelligent',
      component: Intelligent
    }, {
      path: '/technology',
      name: 'technology',
      component: Technology
    },

    ]
  },
  {
    path: "/:pathMatch(.*)*",
      name: 'notfound',
      component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('token')
//   if (whiteList.indexOf(to.name) == -1 && !token)
//    { next({ path: '/remotesense' })}
//   else {next()}
// })
export default router
