<template>
  <div
    class="square"
    :class="{ white: isWhite, black: !isWhite, selected: isSelected }"
    @mousedown="handleClick"
  >
    <span class="coordinate">{{ props.squareCoordinates }}</span>
    <span class="rank">{{ props.squareId[0] }}</span>
    <span class="file">{{ props.squareId[1] }}</span>
    <div class="possible" :class="{ hidden: !isPossibleSquare }">
      <div class="circle"></div>
    </div>
    <ChessPiece :coordinates="props.currentPiece.coordinates" :class="props.currentPiece.class" />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { Square } from '../types'
import ChessPiece from './ChessPiece.vue'
import { possibleSquares, selectedSquare, movePiece } from '@/stores'

const props = defineProps<Square>()

const isSelected = computed(() => selectedSquare.value?.squareCoordinates === props.squareCoordinates)

const isPossibleSquare = computed(() => {
  if (possibleSquares.value.length > 0) {
    const result = possibleSquares.value.some(
      (c) =>
        c.length === props.squareCoordinates.length &&
        c.every((n, index) => n === props.squareCoordinates[index])
    )
    return result
  } else {
    return false
  }
})

function handleClick() {
  if (isPossibleSquare.value) {
    const toSquare = props

    if (selectedSquare.value && selectedSquare.value.currentPiece.class !== '') {
      movePiece(selectedSquare.value, toSquare)
    }
    return 
  } 
  
  if (possibleSquares.value.length > 0) {
    selectedSquare.value = undefined
    possibleSquares.value = []
    return
  } 
    selectedSquare.value = props
}
</script>

<style scoped>
.square {
  width: 45px;
  height: 45px;
  padding: 3px;
  position: relative;

  .white {
    background-color: #f0d9b5;
  }

  .black {
    background-color: #b58863;
  }

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
    left: 45%;
    bottom: -25px;
    z-index: -1;
  }

  @media (min-width: 992px) {
    .rank {
      bottom: -50px;
    } 
  }

  .file {
    color: white;
    z-index: -1;
    left: -20px;
    bottom: 42%
  }
  
  @media (min-width: 992px) {
    .file {
      left: -50px;
    }
  }
  .possible {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;

    .circle {
      width: 11px;
      height: 11px;
      background-color: rgb(66, 66, 66);
      border-radius: 50%;
    }
  }

  .piece {
    z-index: 1;
  }
}

@media (min-width: 600px) {
  .square {
    width: 50px;
    height: 50px;
  }
}

@media (min-width: 992px) {
  .square {
    width: 70px;
    height: 70px;
    padding: 5px;  

    .possible {
      .circle {
        width: 15px;
        height: 15px;
      }
    }
  }
}


.square.selected {
  background-color: rgb(145, 145, 145);
}
</style>
