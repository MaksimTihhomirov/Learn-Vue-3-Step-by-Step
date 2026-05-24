<template>
  <main class="page">
    <nav class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/counter">Counter</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>

    <RouterView />
  </main>
</template>

<style>
body {
  margin: 0;
  background: white;
  font-family: Arial, sans-serif;
}

#app {
  width: 100%;
  min-height: 100vh;
}
</style>

<style scoped>
.page {
  width: 70%;
  margin: 40px auto;
}

.nav {
  display: flex;
  gap: 35px;
  padding-bottom: 18px;
  margin-bottom: 35px;
  border-bottom: 1px solid #ddd;
}

.nav a {
  color: #42b883;
  text-decoration: none;
}

.nav a.router-link-active {
  color: black;
  font-weight: bold;
}
</style>