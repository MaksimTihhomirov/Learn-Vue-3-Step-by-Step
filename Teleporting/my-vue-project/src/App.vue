<script setup>
import { ref, computed } from 'vue'

const team = ref({
  name: 'Smiley',
  spots: 5,
  members: [
    { name: 'John Doe', email: 'john@doe.com', status: 'Active', avatar: 'https://i.pravatar.cc/80?img=12' },
    { name: 'Sarah Doe', email: 'sarah@doe.com', status: 'Active', avatar: 'https://i.pravatar.cc/80?img=32' },
    { name: 'Steve Doe', email: 'steve@doe.com', status: 'Active', avatar: 'https://i.pravatar.cc/80?img=5' },
    { name: 'Jen Doe', email: 'jen@doe.com', status: 'Active', avatar: 'https://i.pravatar.cc/80?img=47' }
  ]
})

const showModal = ref(false)
const email = ref('')

const spotsLeft = computed(() => team.value.spots - team.value.members.length)

function addMember() {
  if (!email.value || spotsLeft.value <= 0) return

  const name = email.value.split('@')[0]

  team.value.members.push({
    name: name.charAt(0).toUpperCase() + name.slice(1) + ' Doe',
    email: email.value,
    status: 'Active',
    avatar: `https://i.pravatar.cc/80?u=${email.value}`
  })

  email.value = ''
  showModal.value = false
}
</script>

<template>
  <div class="app">
    <aside class="sidebar">
      <h2>Demo</h2>

      <div class="side-box"></div>
      <div class="side-box"></div>
      <div class="side-box"></div>
      <div class="side-box"></div>
      <div class="side-box"></div>
    </aside>

    <main class="content">
      <header class="top">
        <button
          class="add-button"
          :disabled="spotsLeft === 0"
          @click="showModal = true"
        >
          Add Member ({{ spotsLeft }} Spots Left)
        </button>

        <h1>
          <svg class="smiley" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" stroke-width="2" />
            <circle cx="14" cy="16" r="2" fill="currentColor" />
            <circle cx="26" cy="16" r="2" fill="currentColor" />
            <path d="M12 23c3 6 13 6 16 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>

          {{ team.name }} Team

          <span class="badge">{{ team.members.length }}</span>
        </h1>
      </header>

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
              <img :src="member.avatar" alt="" />
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

      <footer>
        {{ team.name }} - {{ team.spots }} Member Team
      </footer>
    </main>

    <div v-if="showModal" class="overlay">
      <div class="modal">
        <p>Need to add a new member to your team?</p>

        <div class="input-row">
          <input
            v-model="email"
            type="email"
            placeholder="Email Address..."
            @keyup.enter="addMember"
          />

          <button @click="addMember">Add</button>
        </div>

        <button class="close" @click="showModal = false">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  background: #ffffff;
  font-family: Arial, sans-serif;
  color: #111827;
}

.sidebar {
  width: 245px;
  background: #f3f4f6;
  padding: 36px 34px;
}

.sidebar h2 {
  font-size: 30px;
  margin: 0 0 55px;
}

.side-box {
  width: 66px;
  height: 66px;
  background: #e5e7eb;
  border-radius: 7px;
  margin: 0 auto 28px;
}

.content {
  flex: 1;
  padding: 38px 55px 50px;
}

.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 42px;
}

.add-button {
  background: #16a34a;
  color: white;
  border: 0;
  border-radius: 5px;
  padding: 14px 28px;
  font-size: 17px;
  cursor: pointer;
}

.add-button:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

h1 {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 31px;
  font-weight: 500;
  margin: 0;
}

.smiley {
  width: 32px;
  height: 32px;
  color: #374151;
}

.badge {
  background: #22c55e;
  color: white;
  font-size: 13px;
  border-radius: 999px;
  padding: 3px 8px;
  margin-left: -5px;
}

table {
  width: 78%;
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 8px;
}

th {
  text-align: left;
  padding: 8px 26px;
  font-size: 16px;
}

td {
  background: #f1f1f1;
  padding: 18px 26px;
  font-size: 17px;
}

.person {
  display: flex;
  align-items: center;
  gap: 16px;
}

.person img {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  object-fit: cover;
}

.person strong {
  font-size: 22px;
}

.status {
  color: #22c55e;
}

.message {
  width: 78%;
  margin: 18px auto;
  text-align: right;
  color: #666;
  font-style: italic;
}

footer {
  width: 90%;
  margin: 45px auto 0;
  background: #f1f1f1;
  text-align: center;
  padding: 20px;
  font-weight: bold;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 540px;
  background: white;
  border-radius: 7px;
  padding: 28px 26px 18px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
}

.modal p {
  margin: 0 0 22px;
  font-size: 18px;
  color: #444;
}

.input-row {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  margin-bottom: 18px;
}

.input-row input {
  flex: 1;
  border: 0;
  outline: 0;
  padding: 14px 0;
  font-size: 17px;
}

.input-row button {
  border: 0;
  background: white;
  color: #555;
  font-size: 16px;
  cursor: pointer;
}

.close {
  border: 0;
  background: #eeeeee;
  padding: 8px 15px;
  border-radius: 999px;
  color: #555;
  cursor: pointer;
}
</style>