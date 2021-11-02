import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';

Vue.use(Router)

import routes from './router';

Vue.config.productionTip = false;

const router = new Router({
    // esModule:false,
    // mode:'history',
    // routes:routes.map(item => {
    //     return{
    //         path:item,
    //         component:(resolve)=>require([`./router/${item}.vue`],resolve)
    //     }
        
    // })
    routes:routes
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
