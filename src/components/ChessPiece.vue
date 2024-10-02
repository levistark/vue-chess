<script setup lang="ts">
import type { Coordinates, Piece } from '@/types'
import { toValue } from 'vue'
import WhitePawn from './Pieces/WhitePawn.vue'
import WhiteQueen from './Pieces/WhiteQueen.vue'
import WhiteKing from './Pieces/WhiteKing.vue'
import WhiteRook from './Pieces/WhiteRook.vue'
import WhiteBishop from './Pieces/WhiteBishop.vue'
import WhiteKnight from './Pieces/WhiteKnight.vue'
import BlackPawn from './Pieces/BlackPawn.vue'
import BlackQueen from './Pieces/BlackQueen.vue'
import BlackKing from './Pieces/BlackKing.vue'
import BlackRook from './Pieces/BlackRook.vue'
import BlackBishop from './Pieces/BlackBishop.vue'
import BlackKnight from './Pieces/BlackKnight.vue'
import { knightSquares } from './pieceLogic'
import { chessBoard, possibleSquares } from '../stores'

const props = defineProps<Piece>()


function handlePieceClick() {
  const targetSquares = showPossibleMoves(props)

  if (targetSquares.length > 0) {
    possibleSquares.value = targetSquares
  }
}


function showPossibleMoves(piece: Piece) : Array<Coordinates> {
  let pieceClass = piece.class.split('')[1]

  switch (pieceClass) {
    case 'p': { // Pawn
    }
      break;
    case 'k': { // King
    }
      break;
    case 'q': { // Queen
    }
      break;
    case 'r': { // Rook
    }
      break;
    case 'b': { // Bishop
    }
      break;
    case 'n': { // Knight
      return knightSquares(piece, toValue(chessBoard))  
    }
  }
}
</script>

<template>
  <BlackPawn
    v-if="props.class === 'bp'"
    @click="handlePieceClick"
  />
  <BlackKing
    v-if="props.class === 'bk'"
    @click="handlePieceClick"
  />
  <BlackQueen
    v-if="props.class === 'bq'"
    @click="handlePieceClick"
  />
  <BlackKnight
    v-if="props.class === 'bn'"
    @click="handlePieceClick"
  />
  <BlackRook
    v-if="props.class === 'br'"
    @click="handlePieceClick"
  />
  <BlackBishop
    v-if="props.class === 'bb'"
    @click="handlePieceClick"
  />
  <WhitePawn
    v-if="props.class === 'wp'"
    @click="handlePieceClick"
  />
  <WhiteKnight
    v-if="props.class === 'wn'"
    @click="handlePieceClick"
  />
  <WhiteKing
    v-if="props.class === 'wk'"
    @click="handlePieceClick"
  />
  <WhiteQueen
    v-if="props.class === 'wq'"
    @click="handlePieceClick"
  />
  <WhiteRook
    v-if="props.class === 'wr'"    
    @click="handlePieceClick"
  />
  <WhiteBishop
    v-if="props.class === 'wb'"
    @click="handlePieceClick"
  />
</template>

<style scoped>

</style>


