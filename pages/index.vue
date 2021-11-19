<script setup>
import { ref } from 'vue'
const html = ref('<h1>...</h1><a href="/foo">INTERNAL</a><br><a target="_self" href="https://example.com" rel="noopener">EXTERNAL</a>')
</script>

<template>
  <div v-interpolation v-html="html" />
</template>