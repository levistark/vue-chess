<template>
  <div class="square" :class="{ white: isWhite, black: !isWhite }">
    <span>{{ props.squareCoordinates }}</span>
    <slot name="pieceSlot"></slot>
  </div>
</template>

<script setup lang="ts">
  import {defineProps} from 'vue'
  import {Coordinates, Color} from '../types'

  interface Props {
    isWhite: boolean
    squareCoordinates: [Coordinates]
    squareId: string
  }
  const props = defineProps<Props>()

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
    top: 5px;
    left: 5px;
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