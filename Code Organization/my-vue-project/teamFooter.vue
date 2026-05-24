<script setup>
defineProps({
  team: Object
})
</script>

<template>
  <footer class="bg-gray-100 text-center font-bold p-4 mt-10">
    {{ team.name }} - {{ team.spots }} Member Team
  </footer>
</template>