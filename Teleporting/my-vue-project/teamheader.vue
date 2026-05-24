<script setup>
defineProps({
  team: Object
})
</script>

<template>
  <header class="flex justify-between items-center mb-10">
    <button
      class="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
      :disabled="team.members.length === team.spots"
    >
      Add Member ({{ team.spots - team.members.length }} Spots Left)
    </button>

    <h1 class="text-3xl">
      😊 {{ team.name }} Team
      <span class="text-sm bg-green-500 text-white rounded-full px-2">
        {{ team.members.length }}
      </span>
    </h1>
  </header>
</template>