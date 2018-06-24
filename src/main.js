// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

// ECharts
import ECharts from 'vue-echarts/components/ECharts.vue'
import 'echarts'

// Font-Awesome 5.1 library
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons/faHandHoldingUsd'
import { faBoxes } from '@fortawesome/free-solid-svg-icons/faBoxes'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons/faMoneyBill'
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock'
import { faMale } from '@fortawesome/free-solid-svg-icons/faMale'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHandHoldingUsd, faBoxes, faMoneyBill, faClock, faMale)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('chart', ECharts)

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
