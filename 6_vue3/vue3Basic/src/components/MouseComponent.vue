<template>
Mouse position is at: {{ x }}, {{ y }}
</template>

<script setup lang="ts">
// import { useMouse } from '../composables/mouse.js'
import { useMouse } from '@/composables/mouse.js'

const {x, y} = useMouse()

</script>

<style scoped>

</style>