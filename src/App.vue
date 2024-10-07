<script setup lang="ts">
import ChessBoard from './components/ChessBoard.vue'
import ChessInfo from './components/ChessInfo.vue'

</script>

<template>
  
  <div class="wrapper">
    <h1 class="green">Chess made in vue</h1>
    <div class="game">
      <ChessBoard />
      <ChessInfo />
    </div>
  </div>
</template>

<style scoped>

.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 10rem 0;

  .game {
    display: flex;
    flex-direction: column;
    gap: 2rem
  }

  @media only screen and (min-width: 600px) {
    /* */
  }

  @media only screen and (min-width: 768px) {
    /* CSS rules for medium devices */
  }

  @media only screen and (min-width: 992px) {
    .game {
      flex-direction: row;
    }
  }
  
}
</style>
