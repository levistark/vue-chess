<script setup lang="ts">
import { ref, onMounted, useTemplateRef } from 'vue'
import type { Square, Coordinates } from '../types'
import ChessSquare from './ChessSquare.vue'
import ChessPiece from './ChessPiece.vue'

const chessboard = ref<Square[][]>([[]])

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

function createSquares(): Square[] {
  const columns = [0, 1, 2, 3, 4, 5, 6, 7]
  const rows = [0, 1, 2, 3, 4, 5, 6, 7]
  let squares: Square[] = []

  function getSquareIds() {
    let ids: Array<string> = []

    const columnLetters = columns.map((column, index) => {
      return String.fromCharCode(65 + index)
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
  let matrix = new Array(8)
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
      let square = chessSquares.find((i) => arraysEqual(i.squareCoordinates, coordinates))

      if (square) {
        matrix[i][j] = {
          isWhite: square.isWhite,
          squareCoordinates: square.squareCoordinates,
          squareId: square.squareId,
          currentPiece: {
            class: initialBoard[i][j],
            coordinates: square.squareCoordinates
          }
        }
        
      } else {
        throw new Error('Square info was not found')
      }
    }
  }

  let rotatedMatrix = matrix[0].map((val: Square[], index: number) => matrix.map((row) => row[index]).reverse())
  chessboard.value = rotatedMatrix
}

const squares = useTemplateRef('squares')

onMounted(() => {
  createChessBoard()
})


</script>

<template>
  <div class="chess-board">
    <div class="square" v-for="(row, index) in chessboard" :key="index">
      <ChessSquare
        v-for="(square, index) in row"
        :key="index"
        :is-white="square.isWhite"
        :square-coordinates="square.squareCoordinates"
        :square-id="square.squareId"
        :current-piece="square.currentPiece"
        ref="squares"
      >
        <ChessPiece :class="square.currentPiece.class" :coordinates="square.currentPiece.coordinates" />
      </ChessSquare>
    </div>
  </div>
</template>

<style scoped>
.chess-board {
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  .item {
    width: 100px;
    height: 100px;
    background-color: white;
    border: 1px solid black;
    color: black;
  }
}
</style>
