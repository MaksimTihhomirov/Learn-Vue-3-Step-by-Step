<script setup>
import { counter } from '../stores/counterStore'
</script>

<template>
  <p>
    About Page. The current count is
    <strong>{{ counter.count }}</strong>
  </p>
</template>