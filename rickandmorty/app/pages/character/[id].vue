<script setup lang="ts">
const route = useRoute()

type CharacterDetail = {
  id: number
  name: string
  status: string
  species: string
  location: {
    name: string
  }
}

const { data, pending, error } = await useFetch<CharacterDetail>(
  `/api/character/${route.params.id}`
)
</script>

<template>
  <div>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error loading character</div>

    <div v-else-if="data">
      <h1>{{ data.name }}</h1>
      <p>Status: {{ data.status }}</p>
      <p>Species: {{ data.species }}</p>
      <p>Location: {{ data.location.name }}</p>
    </div>
  </div>
</template>
