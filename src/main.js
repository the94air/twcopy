import Vue from 'vue';
import App from './App';
import WebFont from 'webfontloader';
import VueClipboard from 'vue-clipboard2';

WebFont.load({
  custom: {
    families: [ 'Inter:n4,n7' ],
    urls: ['/fonts/fonts.css']
  }
});

Vue.use(VueClipboard);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
})
.$mount('#app');
