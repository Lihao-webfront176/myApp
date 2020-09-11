const personalBind = () =>
  import ('@/components/vueStudy/personalBind/personalBind')
const vuexStudy = () =>
  import ('@/components/vueStudy/vuexStudy/vuexStudy')

export default [{
  path: '/personalBind',
  name: 'personalBind',
  component: personalBind
}, {
  path: '/vuexStudy',
  name: 'vuexStudy',
  component: vuexStudy
}]