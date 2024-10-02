import { ref } from "vue";
import type { ChessBoard, Coordinates } from "./types";

export const chessBoard = ref<ChessBoard>([[]])
export const whiteToMove = ref(true)
export const kingInCheck = ref(false)
export const moveCount = ref(0)
export const possibleSquares = ref<Array<Coordinates>>([])
export const selectedSquare = ref<Coordinates>()