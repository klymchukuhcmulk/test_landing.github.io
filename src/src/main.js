import Vue from 'vue'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'
import 'normalize.css'

Vue.use(VueClipboard)
Vue.config.productionTip = false

function parallax (event) {
  if (document.body.offsetWidth > 450) {
    this.querySelectorAll('.layer').forEach(layer => {
      const speed = layer.dataset.speed
      layer.style.transform = `translate(${speed * event.clientX / 500}px, ${speed * event.clientY / 100}px)`
    })
  } else {
    this.querySelectorAll('.layer').forEach(layer => {
      layer.style.transform = 'translate(0px, 0px)'
    })
  }
}
document.addEventListener('mousemove', parallax)
new Vue({
  render: h => h(App)
}).$mount('#app')
