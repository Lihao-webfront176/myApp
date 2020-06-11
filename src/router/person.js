const index = () =>
  import ('@/components/index')
const register = () =>
  import ('@/components/personCenter/register/register')
const login = () =>
  import ('@/components/personCenter/login/login')
const userDetail = () =>
  import ('@/components/personCenter/userDetail/userDetail')

// form vuex test
const formTry = () =>
  import ('@/components/personCenter/formTry/formTry')

export default [{
  path: '/',
  name: 'index',
  component: index
}, {
  path: '/index',
  name: 'index',
  component: index
}, {
  path: '/register',
  name: 'register',
  component: register
}, {
  path: '/login',
  name: 'login',
  component: login
}, {
  path: '/userDetail',
  name: 'userDetail',
  component: userDetail
}, {
  path: '/formTry',
  name: 'formTry',
  component: formTry
}]