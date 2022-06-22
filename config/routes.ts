export default [
  {
    path: '/',
    redirect: '/home',
  },
  { path: '/login', layout: false, component: './login' },
  {
    name: '首页',
    path: '/home',
    component: './Home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
  },
]
