<script setup lang="ts">
import { onMounted, useTemplateRef, reactive } from 'vue'
import type { Square, Coordinates } from '../types'
import ChessSquare from './ChessSquare.vue'
import { chessBoard } from '../stores'

const initialBoard = [
  ['wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr'],
  ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
  ['br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br'],
]
const rotatedInitialBoard = initialBoard[0].map((val, index) => initialBoard.map((row) => row[index]).reverse())

function createSquares(): Square[] {
  const columns = [0, 1, 2, 3, 4, 5, 6, 7]
  const rows = [0, 1, 2, 3, 4, 5, 6, 7]
  let squares: Square[] = []

  function getSquareIds() {
    let ids: Array<string> = []

    const columnLetters = columns.map((column, index) => {
      return String.fromCharCode(72 - index)
    })

    const rowNumbers = rows.map((row, index) => {
      return index + 1
    })

    columnLetters.forEach((column) => {
      rowNumbers.forEach((row) => {
        let id = column + row
        ids.push(id)
      })
    })
    return ids.reverse()
  }

  function getCoordinates() {
    const coordinates: Array<Coordinates> = []
    for (let i = 0; i < 8; i++) {  // Start from 7 and go down to 0
      for (let j = 0; j < 8; j++) {
        coordinates.push([i, j])
      }
    }
    return coordinates
  }

  function getSquareColors() {
    const colorArray: boolean[] = []

    rows.forEach((row, rowIndex) => {
      columns.forEach((column, columnIndex) => {
        // For every other row
        if (rowIndex % 2 === 0) {
          if (columnIndex % 2 === 0) {
            colorArray.push(true)
          } else {
            colorArray.push(false)
          }
        } else {
          if (columnIndex % 2 === 0) {
            colorArray.push(false)
          } else {
            colorArray.push(true)
          }
        }
      })
    })

    return colorArray
  }

  for (let i = 0; i < 64; i++) {
    let square: Square = {
      isWhite: true,
      squareCoordinates: [0, 0],
      squareId: 'A1',
      currentPiece: {
        class: '',
        coordinates: [0,0]
      }
    }
    const ids = getSquareIds()
    const coordinates = getCoordinates()
    const colors = getSquareColors()

    square.squareId = ids[i]
    square.squareCoordinates = coordinates[i]
    square.isWhite = colors[i]
    square.currentPiece!.class = ''  

    
    squares.push(square)
  }

  return squares
}

function createChessBoard() {
  let matrix = reactive(new Array(8))
  const chessSquares = createSquares()

  for (let i = 0; i < 8; i++) {
    matrix[i] = new Array(8)
  }

  function arraysEqual(arr1: number[], arr2: number[]) {
    if (arr1.length !== arr2.length) return false
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false
    }
    return true
  }

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let coordinates: Coordinates = [i, j]
      let square = chessSquares.find((s) => arraysEqual(s.squareCoordinates, coordinates))

      if (square) {
        matrix[i][j] = {
          isWhite: square.isWhite,
          squareCoordinates: coordinates, 
          squareId: square.squareId,
          currentPiece: {
            class: rotatedInitialBoard[i][j],
            coordinates: coordinates
          }
        }
      }
    }
  }

  chessBoard.value = matrix
}

const squares = useTemplateRef('squares')

onMounted(() => {
  createChessBoard()
})

</script>

<template>
  <div class="chess-board">
    <div class="square" v-for="(row, index) in chessBoard" :key="index">
      <ChessSquare
        v-for="(square, index) in row"
        :key="index"
        :is-white="square.isWhite"
        :square-coordinates="square.squareCoordinates"
        :square-id="square.squareId"
        :current-piece="square.currentPiece"
        ref="squares"
      />
    </div>
  </div>
</template>

<style scoped>
.chess-board {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}
</style>
