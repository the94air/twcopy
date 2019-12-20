import Vue from 'vue';
import App from './App';
import WebFont from 'webfontloader';
import VueClipboard from 'vue-clipboard2';

let font = process.env.NODE_ENV === 'production' ? 'twcopy/fonts/fonts.css' : 'fonts/fonts.css';

WebFont.load({
  custom: {
    families: [ 'Inter:n4,n7' ],
    urls: [font]
  }
});

Vue.use(VueClipboard);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
})
.$mount('#app');
