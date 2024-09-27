<template>
  <div class="square" :class="{ white: isWhite, black: !isWhite }">
    <span class="coordinate">{{ props.squareCoordinates }}</span>
    <span class="rank">{{ props.squareId[0] }}</span>
    <span class="file">{{ props.squareId[1] }}</span>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import {defineProps, onMounted, ref} from 'vue'
  import type {Square, Coordinates, Piece} from '../types'

  const props = defineProps<Square>()
  const currentPiece = ref<Piece>()

</script>


<style scoped>
.square {
  width: 70px;
  height: 70px;
  padding: 5px;    
  position: relative;

  span {
    position: absolute;
    font-size: 8pt;
    color: black;
    left: 17px;
    color: white;
  }
  .coordinate {
    top: 1px;
    color: black;
    display: none;
  }
  .rank {
    top: 35%;
    left: -50px;
    z-index: -1;
  }
  .file {
    bottom: -50px;
    left: 30px;
    color: white;
    z-index: -1;
  }

  svg {
    border: 1px solid red;
  }
}

.square.white {
  background-color: #f0d9b5;
}
.square.black {
  background-color: #b58863;
}

</style>