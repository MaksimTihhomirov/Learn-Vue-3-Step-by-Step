<script setup>
import { ref, watch } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const food = ref(localStorage.getItem('food') || '')
const age = ref(localStorage.getItem('age') || '')

watch(food, value => {
  localStorage.setItem('food', value)
})

watch(age, value => {
  localStorage.setItem('age', value)
})
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main class="form-box">
    <label>
      <span>What is your favorite food?</span>
      <input v-model="food" placeholder="" />
    </label>

    <label>
      <span>How old are you?</span>
      <input v-model="age" placeholder="" />
    </label>
  </main>
</template>

<style scoped>
.form-box {
  display: grid;
  gap: 14px;
  font-size: 15px;
}

label {
  display: flex;
  align-items: center;
  gap: 10px;
}

span {
  font-weight: 500;
}

input {
  width: 220px;
  padding: 10px 12px;
  border: 1px solid #bbb;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
}

input:focus {
  border-color: #42b883;
  box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.2);
}
</style>