<script setup lang="ts">
import ChessClock from './ChessClock.vue';
import {isWhiteToMove, isKingInCheck} from '../stores'

</script>

<template>
  <div class="game-info">
    <ChessClock />
    <div class="turn">
      <p v-if="isWhiteToMove">White to move</p>
      <p v-if="!isWhiteToMove">Black to move</p>
    </div>
    <div class="btn-container">
      <button class="btn-resign">Resign</button>
      <button class="btn-draw">Offer draw</button>
    </div>
  
  </div>
</template>


<style scoped>
.game-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 1px solid rgb(70, 70, 70);
  padding-left: 2rem;

  .btn-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>