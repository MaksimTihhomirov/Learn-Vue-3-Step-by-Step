import { reactive } from 'vue'

export const counter = reactive({
  count: 0,

  increment() {
    if (this.count < 10) {
      this.count++
    }
  },

  get remaining() {
    return 10 - this.count
  }
})
