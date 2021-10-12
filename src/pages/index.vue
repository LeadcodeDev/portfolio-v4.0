<template>
  Test {{ count }}
  <button @click.prevent="add()">Ajouter 1</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)

function add () {
  count.value++
}

const router = useRouter()
console.log(router.getRoutes().map((route) => route.path))
</script>