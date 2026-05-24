<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const showSuccess = ref(false)

function showPopup() {
  showSuccess.value = true
}
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <button @click="showPopup" class="click-btn">
      Click Me
    </button>
  </main>

  <transition name="fade">
    <div v-if="showSuccess" class="overlay">
      <div class="modal">

        <div class="circle">
          <span class="check">✓</span>
        </div>

        <h2>Success!</h2>
        <p>It Works!</p>

        <button class="ok-btn" @click="showSuccess = false">
          OK
        </button>

      </div>
    </div>
  </transition>
</template>

<style scoped>
main {
  display: grid;
  place-items: center;
  margin-top: 40px;
}

.click-btn {
  padding: 10px 20px;
  cursor: pointer;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.35);

  display: grid;
  place-items: center;
}

.modal {
  width: 420px;
  background: white;
  border-radius: 8px;
  padding: 40px;
  text-align: center;

  animation: popup 0.35s ease;
}

.circle {
  width: 90px;
  height: 90px;

  margin: 0 auto 24px;

  border-radius: 50%;
  border: 3px solid #dff0d8;

  display: grid;
  place-items: center;

  animation: spin 0.8s ease;
}

.check {
  color: #7ac142;
  font-size: 54px;

  animation: bounce 0.6s ease;
}

.ok-btn {
  margin-top: 24px;
  padding: 10px 28px;
  background: #7ed6ff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

/* animations */

@keyframes popup {
  from {
    transform: scale(0.7);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes spin {
  from {
    transform: rotate(-180deg);
    opacity: 0;
  }

  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }

  60% {
    transform: scale(1.3);
  }

  100% {
    transform: scale(1);
  }
}

/* fade */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>