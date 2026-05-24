<script setup>
import { counter } from '../stores/CounterStore'
</script>

<template>
  <div class="counter-page">
    <h1>{{ counter.count }}</h1>

    <button @click="counter.increment">
      Increment ({{ counter.remaining }} Remaining)
    </button>
  </div>
</template>

<style scoped>
.counter-page {
  margin-top: 40px;
}

h1 {
  font-size: 52px;
  margin-bottom: 10px;
  font-weight: 300;
}

button {
  padding: 8px 14px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  border-radius: 6px;
}

button:hover {
  background: #f5f5f5;
}
</style>