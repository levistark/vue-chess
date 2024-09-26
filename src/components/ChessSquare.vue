<template>
  <div class="square" :class="{ white: isWhite, black: !isWhite }">
    <span class="coordinate">{{ props.squareCoordinates }}</span>
    <span class="id">{{ props.squareId }}</span>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import {defineProps, onMounted, ref} from 'vue'
  import type {Square, Coordinates, Piece} from '../types'

  const props = defineProps<Square>()
  const currentPiece = ref<Piece>()

  onMounted(() => {
    
  })
</script>


<style scoped>
.square {
  width: 70px;
  height: 70px;
  border: solid 1px white;
  padding: 5px;    
  position: relative;

  span {
    position: absolute;
    font-size: 8pt;
    color: black;
    left: 17px;
  }
  .coordinate {
    top: 1px;
  }
  .id {
    bottom: 1px;
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