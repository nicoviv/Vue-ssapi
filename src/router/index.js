import Vue from 'vue';
import Router from 'vue-router';
import home from '../components/home/home';
import camera from '../components/camera/camera';
import tools from '../components/tools/tools';
import life from '../components/life/life';
import hard from '../components/hard/hard';
import set from '../components/set/set';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/camera',
      name: 'camera',
      component: camera
    },
    {
      path: '/tools',
      name: 'tools',
      component: tools
    },
    {
      path: '/life',
      name: 'life',
      component: life
    },
    {
      path: '/hard',
      name: 'hard',
      component: hard
    },
    {
      path: '/set',
      name: 'set',
      component: set
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
