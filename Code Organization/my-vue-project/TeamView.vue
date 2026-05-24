<script setup>
import TeamHeader from './teamHeader.vue'
import TeamMembers from './teamMembers.vue'
import TeamFooter from './teamFooter.vue'

const team = {
  name: 'Smiley',
  spots: 5,
  members: [
    { name: 'John Doe', email: 'john@doe.com', status: 'Active' },
    { name: 'Sarah Doe', email: 'sarah@doe.com', status: 'Active' },
    { name: 'Steve Doe', email: 'steve@doe.com', status: 'Active' },
    { name: 'Jen Doe', email: 'jen@doe.com', status: 'Active' },
    { name: 'Joe Doe', email: 'joe@doe.com', status: 'Active' }
  ]
}
</script>

<template>
  <main class="p-10">
    <TeamHeader :team="team" />
    <TeamMembers :team="team" />
    <TeamFooter :team="team" />
  </main>
</template>