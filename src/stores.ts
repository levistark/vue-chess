import { ref } from "vue";
import type { ChessBoard, Coordinates, Square } from "./types";

export const chessBoard = ref<ChessBoard>([[]])
export const isWhiteToMove = ref(true)
export const isKingInCheck = ref(false)
export const moveCount = ref(0)
export const possibleSquares = ref<Array<Coordinates>>([])
export const selectedSquare = ref<Square>()

export function movePiece(fromSquare: Square, toSquare: Square) {
  const fromX = fromSquare.squareCoordinates[0]
  const fromY = fromSquare.squareCoordinates[1]
  const toX = toSquare.squareCoordinates[0]
  const toY = toSquare.squareCoordinates[1]

  try {
    // Add piece to destination square
    chessBoard.value[toX][toY].currentPiece.class = fromSquare.currentPiece.class

    // Remove piece from origin square
    chessBoard.value[fromX][fromY].currentPiece.class = ''
    
  } catch (error) {
    console.log(error)
  } finally {
    // Clear possibleSquares and selectedSquare
    isWhiteToMove.value = !isWhiteToMove.value
    possibleSquares.value = []
    selectedSquare.value = undefined
  }
}