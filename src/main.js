import './assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/vendor/pswmeter/pswmeter.min.js'
import './assets/js/functions.js'

import './assets/main.css'
import './assets/vendor/font-awesome/css/all.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/OverlayScrollbars-master/css/OverlayScrollbars.min.css'
import './assets/vendor/tiny-slider/dist/tiny-slider.css'
import './assets/vendor/flatpickr/dist/flatpickr.css'
import './assets/vendor/plyr/plyr.css'
import './assets/vendor/zuck.js/dist/zuck.min.css'
import './assets/vendor/glightbox-master/dist/css/glightbox.min.css'
import './assets/vendor/dropzone/dist/min/dropzone.min.css'
import './assets/vendor/choices.js/public/assets/styles/choices.min.css'
import './assets/css/style.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index.js'

const app = createApp(App);

// Router'ı Vue uygulamasına ekleyin
app.use(router);

// Vuex store'unu Vue uygulamasına ekleyin
app.use(store);

app.mount('#app');

