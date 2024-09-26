<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Square, Coordinates } from '../types'
import ChessSquare from './ChessSquare.vue'
import WhitePawn from './WhitePawn.vue'
import WhiteQueen from './WhiteQueen.vue'
import WhiteKing from './WhiteKing.vue'
import WhiteRook from './WhiteRook.vue'
import WhiteBishop from './WhiteBishop.vue'
import WhiteKnight from './WhiteKnight.vue'
import BlackPawn from './BlackPawn.vue'
import BlackQueen from './BlackQueen.vue'
import BlackKing from './BlackKing.vue'
import BlackRook from './BlackRook.vue'
import BlackBishop from './BlackBishop.vue'
import BlackKnight from './BlackKnight.vue'

const selectedSquare = ref(0)

const squares = ref<Square[]>([])

function createSquares() {
  const columns = [0, 1, 2, 3, 4, 5, 6, 7]
  const rows = [0, 1, 2, 3, 4, 5, 6, 7]

  const columnLetters = columns.map((column, index) => {
    return String.fromCharCode(65 + index)
  })

  const rowNumbers = rows.map((row, index) => {
    return index + 1
  })

  function getSquareIds() {
    let ids: Array<string> = []
    columnLetters.forEach((column) => {
      rowNumbers.forEach((row) => {
        let id = column + row
        ids.push(id)
      })
    })
    return ids
  }

  function getCoordinates() {
    const coordinates: Array<Coordinates> = []
    rows.forEach((row, rowIndex) => {
      columns.forEach((column, columnIndex) => {
        coordinates.push([rowIndex, columnIndex])
      })
    })
    return coordinates
  }

  function getSquareColors() {
    const colorArray: boolean[] = []

    rows.forEach((row, rowIndex) => {
      columns.forEach((column, columnIndex) => {
        let isOnOddRow = false

        let square: Square = {
          isWhite: true,
          squareCoordinates: [0, 0],
          squareId: 'A1'
        }
        
        // For every other row
        if (rowIndex % 2 === 0) {
          if (columnIndex % 2 === 0) {
            colorArray.push(false)
          } else {
            colorArray.push(true)
          }
        } else {
          if (columnIndex % 2 === 0) {
            colorArray.push(true)
          } else {
            colorArray.push(false)
          }
        }
      })
    })

    return colorArray
  }  

  const ids = getSquareIds()
  const coordinates = getCoordinates()
  const colors = getSquareColors()

  for (let i = 0; i < 64; i++) {
    let square: Square = {
      isWhite: true,
      squareCoordinates: [0, 0],
      squareId: 'A1'
    }
    square.squareId = ids[i]
    square.squareCoordinates = coordinates[i]
    square.isWhite = colors[i] 
    squares.value.push(square)
  }
}

onMounted(() => {
  createSquares()
})
</script>

<template>
  <div class="chess-board">
    <ChessSquare
      v-for="(square, index) in squares"
      :key="index"
      :is-white="square.isWhite"
      :square-coordinates="square.squareCoordinates"
      :square-id="square.squareId"
    />
  </div>
</template>

<style scoped>
.chess-board {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}
</style>
