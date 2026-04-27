<script setup>
const { data, refresh } = await useFetch('/api/hello', { server:true })
</script>

<template>
  <div>
  Hola hola
    <h1>Aplicación híbrida simple</h1>

    <p><strong>Mensaje:</strong> {{ data?.message }}</p>
    <p><strong>Hora:</strong> {{ data?.time }}</p>

    <button @click="refresh">
      Refrescar (desde el cliente)
    </button>
  </div>
</template>
