<script setup>
defineProps({
  name: String,
  email: String,
  status: String
})
</script>

<template>
  <tr class="bg-gray-100">
    <td class="px-6 py-4 font-bold">
      {{ name }}
    </td>

    <td class="px-6 py-4 text-gray-600">
      {{ email }}
    </td>

    <td class="px-6 py-4 text-green-500">
      {{ status }}
    </td>
  </tr>
</template>