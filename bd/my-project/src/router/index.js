import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

function lazyload (component) {
  return () => System.import(`../view/${component}`)
}


export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'helloworld',
      component: lazyload('HelloWorld')
    }
  ]
})
