<script setup lang="ts">
import ChessBoard from './components/ChessBoard.vue'

</script>

<template>
  
  <div class="wrapper">
    <h1 class="green">Vue Chess</h1>
    <ChessBoard />
  </div>
</template>

<style scoped>

.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 7rem 0;
}
</style>
