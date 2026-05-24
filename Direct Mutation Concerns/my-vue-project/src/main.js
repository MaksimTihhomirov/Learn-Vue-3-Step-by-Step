import { createApp, reactive } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const counter = reactive({
  count: 0
})

const Home = {
  template: `<div></div>`
}

const About = {
  setup() {
    return { counter }
  },
  template: `
    <p>
      About Page. The current count is
      <strong>{{ counter.count }}</strong>
    </p>
  `
}

const Counter = {
  setup() {
    function increment() {
      counter.count++
    }

    return { counter, increment }
  },
  template: `
    <div>
      <h1>{{ counter.count }}</h1>

      <button @click="increment">
        Increment
      </button>
    </div>
  `
}

const Contact = {
  template: `<div></div>`
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/counter', component: Counter },
    { path: '/contact', component: Contact }
  ]
})

createApp(App).use(router).mount('#app')