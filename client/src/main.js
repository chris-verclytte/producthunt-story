import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'
import App from './App.vue'

Vue.config.productionTip = false

// Add Apollo
Vue.use(VueApollo)

const apolloClient = new ApolloClient({
  uri: process.env.VUE_APP_PRODUCTHUNT_STORY_API
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})
new Vue({
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
