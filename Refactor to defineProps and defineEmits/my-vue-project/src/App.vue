<script setup>
import { ref } from 'vue'

const message = ref('it works!')
</script>

<template>
  <main class="page">
    <section class="left">
      <h1>You did it!</h1>

      <p>
        You've successfully created a project with
        <span>Vite + Vue 3.</span>
      </p>

      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </section>

    <section class="right">
      <textarea v-model="message"></textarea>

      <div class="preview">
        {{ message }}
      </div>
    </section>
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 110px;
  font-family: Arial, sans-serif;
}

.left {
  width: 430px;
}

h1 {
  color: #42b883;
  font-size: 48px;
}

p {
  font-size: 20px;
  color: #333;
}

span,
a {
  color: #42b883;
}

nav {
  display: flex;
  gap: 24px;
  margin-top: 32px;
}

a {
  text-decoration: none;
}

.right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

textarea {
  width: 520px;
  height: 240px;
  padding: 16px;
  font-size: 18px;
  border: 2px solid #4663ff;
  border-radius: 4px;
  resize: none;
}

.preview {
  font-size: 20px;
  font-weight: 600;
}
</style>