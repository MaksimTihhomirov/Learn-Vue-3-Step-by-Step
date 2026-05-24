<script setup>
import { ref } from 'vue'

const question = ref('')
</script>

<template>
  <main class="page">
    <nav class="nav">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>

    <section class="quiz">
      <header class="quiz-header">
        <h1>Quiz Header</h1>

        <p>
          Welcome to your first quiz. How do you think you'll do?
        </p>
      </header>

      <textarea
        v-model="question"
        class="quiz-box"
        placeholder="Quiz Question"
      ></textarea>

      <footer class="quiz-footer">
        <p>Quiz Footer</p>

        <a href="#">My First Quiz</a>

        <ul>
          <li>Get a Job</li>
          <li>Contact Us</li>
        </ul>
      </footer>
    </section>
  </main>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background: #f8f8f8;
  min-width: 100%;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

#app {
  width: 100%;
  min-height: 100vh;
}
</style>

<style scoped>
.page {
  width: 100%;
  min-height: 100vh;
  padding-top: 40px;
}

.nav {
  width: 70%;
  margin: 0 auto 60px;
  display: flex;
  gap: 35px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 16px;
}

.nav a {
  text-decoration: none;
  color: #42b883;
  font-size: 16px;
}

.quiz {
  width: 70%;
  margin: 0 auto;
}

.quiz-header {
  margin-bottom: 110px;
}

.quiz-header h1 {
  font-size: 42px;
  font-weight: 400;
  color: #333;
  margin-bottom: 10px;
}

.quiz-header p {
  color: #333;
  font-size: 16px;
}

.quiz-box {
  width: 100%;
  height: 300px;
  background: #ddd;
  border: none;
  padding: 16px;
  font-size: 16px;
  resize: none;
  outline: none;
  box-sizing: border-box;
  margin-bottom: 25px;
}

.quiz-footer {
  color: #333;
}

.quiz-footer a {
  color: #42b883;
  text-decoration: none;
}

.quiz-footer ul {
  margin-top: 8px;
}
</style>