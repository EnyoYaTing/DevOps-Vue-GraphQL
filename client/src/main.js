// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import 'tachyons'
import Vue from 'vue'
import VueApollo from 'vue-apollo'
import BootstrapVue from 'bootstrap-vue'

import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/main.css'

// svg-icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faFutbol, faMars, faSignal, faPaw } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// svg-icon
library.add(faHome)
library.add(faFutbol)
library.add(faMars)
library.add(faSignal)
library.add(faPaw)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false


Vue.use(BootstrapVue)
Vue.config.productionTip = false

// Server URL
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:4000/graphql'
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  provide: apolloProvider.provide(),
  components: { App }
})
