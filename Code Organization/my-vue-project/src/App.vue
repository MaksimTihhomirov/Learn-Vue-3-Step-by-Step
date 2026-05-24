<script setup>
import { ref, computed } from 'vue'

const team = ref({
  name: 'Smiley',
  spots: 5,
  members: [
    { name: 'John Doe', email: 'john@doe.com', status: 'Active', avatar: 'https://i.pravatar.cc/80?img=12' },
    { name: 'Sarah Doe', email: 'sarah@doe.com', status: 'Active', avatar: 'https://i.pravatar.cc/80?img=32' },
    { name: 'Steve Doe', email: 'steve@doe.com', status: 'Active', avatar: 'https://i.pravatar.cc/80?img=5' },
    { name: 'Jen Doe', email: 'jen@doe.com', status: 'Active', avatar: 'https://i.pravatar.cc/80?img=47' },
    { name: 'Joe Doe', email: 'joe@doe.com', status: 'Active', avatar: 'https://i.pravatar.cc/80?img=14' }
  ]
})

const showForm = ref(false)
const newName = ref('')
const newEmail = ref('')

const spotsLeft = computed(() => team.value.spots - team.value.members.length)

function addMember() {
  if (!newName.value || !newEmail.value || spotsLeft.value <= 0) return

  team.value.members.push({
    name: newName.value,
    email: newEmail.value,
    status: 'Active',
    avatar: `https://i.pravatar.cc/80?u=${newEmail.value}`
  })

  newName.value = ''
  newEmail.value = ''
  showForm.value = false
}
</script>

<template>
  <div class="layout">
    <aside class="sidebar">
      <h2>Demo</h2>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </aside>

    <main class="page">
      <header class="header">
        <button
          class="button"
          :disabled="spotsLeft === 0"
          @click="showForm = !showForm"
        >
          Add Member ({{ spotsLeft }} Spots Left)
        </button>

        <h1>
          😊 {{ team.name }} Team
          <span>{{ team.members.length }}</span>
        </h1>
      </header>

      <form v-if="showForm" class="form" @submit.prevent="addMember">
        <input v-model="newName" placeholder="Name" />
        <input v-model="newEmail" placeholder="Email" />
        <button>Add</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="member in team.members" :key="member.email">
            <td class="person">
              <img :src="member.avatar" />
              <strong>{{ member.name }}</strong>
            </td>
            <td>{{ member.email }}</td>
            <td class="status">{{ member.status }}</td>
          </tr>
        </tbody>
      </table>

      <p v-if="spotsLeft === 0" class="message">
        There are no remaining team spots. Upgrade to add more.
      </p>

      <footer>{{ team.name }} - {{ team.spots }} Member Team</footer>
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
  background: white;
  font-family: Arial, sans-serif;
}

.sidebar {
  width: 230px;
  background: #f3f4f6;
  padding: 35px;
}

.sidebar h2 {
  font-size: 28px;
  margin-bottom: 40px;
}

.box {
  width: 64px;
  height: 64px;
  background: #e5e7eb;
  border-radius: 6px;
  margin: 25px auto;
}

.page {
  flex: 1;
  padding: 40px 55px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
}

.button {
  background: #6b7280;
  color: white;
  padding: 13px 25px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

h1 {
  font-size: 32px;
  font-weight: 600;
}

h1 span {
  background: #22c55e;
  color: white;
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 999px;
}

.form {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
}

.form input {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.form button {
  background: #22c55e;
  color: white;
  border: 0;
  padding: 12px 22px;
  border-radius: 6px;
  cursor: pointer;
}

table {
  width: 85%;
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 8px;
}

th {
  text-align: left;
  padding: 10px 25px;
}

td {
  background: #f1f1f1;
  padding: 20px 25px;
  font-size: 17px;
}

.person {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 21px;
}

.person img {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  object-fit: cover;
}

.status {
  color: #22c55e;
}

.message {
  width: 85%;
  margin: 18px auto;
  text-align: right;
  color: #666;
  font-style: italic;
}

footer {
  margin-top: 45px;
  background: #f1f1f1;
  text-align: center;
  padding: 20px;
  font-weight: bold;
}
</style>