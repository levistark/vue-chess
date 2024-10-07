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
      <button class="btn-draw">Draw</button>
    </div>
  
  </div>
</template>


<style scoped>
.game-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgb(70, 70, 70);
  padding-top: 2rem;
  margin-top: 2rem;

  .btn-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .turn {
    max-width: 30%;
    text-align: center;
  }
}

@media only screen and (min-width: 992px) {
  .game-info {
    flex-direction: column;
    margin-top: 0;
    border-top: none;
    padding-top: 0;
    border-left: 1px solid rgb(70, 70, 70);
    padding-left: 2rem;
  }
}
</style>