<script setup lang="ts">
import type { CharacterListItem } from '~/server/api/characters.get'

const { data, pending, error } = await useFetch<CharacterListItem[]>(
  '/api/characters'
)
</script>

<template>
  <div>
    <h1>Characters</h1>

    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Failed to load</div>

    <ul v-else>
      <li v-for="char in data" :key="char.id">
        <NuxtLink :to="`/character/${char.id}`">
          {{ char.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
