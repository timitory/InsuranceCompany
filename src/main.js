import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './index.css'
import VueWow from 'vue-wow'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAlignLeft, faAngleLeft, faEye, faCheck, faEyeSlash, faTimes, faBars, faPlusSquare, faCircle, faAngleDown, faTrash, faPlayCircle, faPlus, faUserPlus, faTimesCircle, faTags, faArrowRight, faArrowLeft, faCalendarAlt, faGlobeAfrica, faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAnalytics from 'vue-analytics';

library.add(faAlignLeft, faAngleLeft, faEye, faCheck, faEyeSlash, faTimes, faBars, faPlusSquare, faCircle, faAngleDown, faTrash, faPlayCircle, faPlus, faUserPlus, faTimesCircle, faTags, faArrowRight, faArrowLeft, faCalendarAlt, faGlobeAfrica, faFacebook, faTwitter, faLinkedin, faCheckCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)



//when building, it should change to production
//when not building, it should remain in staging

var baseURL = "https://stage.paddycover.com/v1";

  if(process.env.NODE_ENV === "development"){
    baseURL = "https://stage.paddycover.com/v1"
  }else {
      baseURL = "https://stage.paddycover.com/v1" //api.paddycover.com/v1
  }
 




//After login, on page refresh, set authorization header
const token = localStorage.getItem('user-token')
if(token){
  store.state.userState = 'logged in'
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

Vue.config.productionTip = false


// Configuration VueAnalytics
Vue.use(VueAnalytics, {
	id: 'UA-137027779-1',
  router
});

Vue.use(VueWow)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



export default baseURL
