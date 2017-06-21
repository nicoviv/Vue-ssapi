// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//先引入依赖的模块
// import flexible from './assets/js/flexible.js';
import Vue from 'vue';
import App from './App';//不区分大小写
import css from './assets/css/reset.css';
import vueRouter from 'vue-router';
import router from './router';
// 引入数据请求插件
import resource from 'vue-resource';
// 引入ydUI插件
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
// 引入muse
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(YDUI);
Vue.use(MuseUI);
Vue.use(resource);

// store 仓库
const store = new Vuex.Store({
	// state 存储的状态
	state: {
		showState: false
	},
	// 行为，对状态进行改变，是静态行为
	mutations: {
		changeState(state){
			state.showState = !state.showState;
		}
	},
	// 行为，对状态进行改变，异步行为
	actions: {

	}
});


new Vue({
  el: '#app',
  render:h=>h(App),
  resource,
  YDUI,
  MuseUI,
  store,
  router
  
})
