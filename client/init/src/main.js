import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// function myxx () {
// 	console.log(66661111)
// 	var x=200
// 	// console.log(this)
// 	Vue.prototype.$x=x
// }
// Vue.use(myxx)

axios.defaults.baseURL = " http://192.168.3.144:7001/"
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
