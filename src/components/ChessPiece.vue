<template>
  <BlackPawn
    v-if="props.class === 'bp'"
    :class="props.class"
    :coordinates="props.coordinates"
    @piece-clicked="handlePieceClick"
  />
  <BlackKing
    v-if="props.class === 'bk'"
    :class="props.class"
    :coordinates="props.coordinates"
    @piece-clicked="handlePieceClick"
  />
  <BlackQueen
    v-if="props.class === 'bq'"
    :class="props.class"
    :coordinates="props.coordinates"
    @piece-clicked="handlePieceClick"
  />
  <BlackKnight
    v-if="props.class === 'bn'"
    :class="props.class"
    :coordinates="props.coordinates"
    @piece-clicked="handlePieceClick"
  />
  <BlackRook
    v-if="props.class === 'br'"
    :class="props.class"
    :coordinates="props.coordinates"
    @piece-clicked="handlePieceClick"
  />
  <BlackBishop
    v-if="props.class === 'bb'"
    :class="props.class"
    :coordinates="props.coordinates"
    @piece-clicked="handlePieceClick"
  />
  <WhitePawn
    v-if="props.class === 'wp'"
    :class="props.class"
    :coordinates="props.coordinates"
    @piece-clicked="handlePieceClick"
  />
  <WhiteKnight
    v-if="props.class === 'wn'"
    :class="props.class"
    :coordinates="props.coordinates"
    @piece-clicked="handlePieceClick"
  />
  <WhiteKing
    v-if="props.class === 'wk'"
    :class="props.class"
    :coordinates="props.coordinates"
    @piece-clicked="handlePieceClick"
  />
  <WhiteQueen
    v-if="props.class === 'wq'"
    :class="props.class"
    :coordinates="props.coordinates"
    @piece-clicked="handlePieceClick"
  />
  <WhiteRook
    v-if="props.class === 'wr'"
    :class="props.class"
    :coordinates="props.coordinates"
    @piece-clicked="handlePieceClick"
  />
  <WhiteBishop
    v-if="props.class === 'wb'"
    :class="props.class"
    :coordinates="props.coordinates"
    @piece-clicked="handlePieceClick"
  />
</template>

<script setup lang="ts">
import type { Coordinates, Piece, pieceClickObjectType } from '@/types'
import { onMounted, useTemplateRef } from 'vue'
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

const props = defineProps<Piece>()

function showAvailableMoves(pieceClickObject: pieceClickObjectType) {}

function handlePieceClick(pieceClickObject: pieceClickObjectType) {
  console.log(pieceClickObject)
}

</script>

<style scoped></style>
