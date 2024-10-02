import type { ChessBoard, Coordinates, Piece } from '@/types'
export function movePiece(toCoordinate: Coordinates) {}

export function isWhiteToMove(): boolean {
  return false
}

export function isKingInCheck(): boolean {
  return false
}

function trimArray(
  array: Array<Coordinates>,
  lowestValue: number,
  highestValue: number
): Array<Coordinates> {
  return array.filter(
    (c) => c[0] < highestValue && c[0] >= lowestValue && c[1] < highestValue && c[1] >= lowestValue
  )
}

export function knightSquares(piece: Piece, chessBoard: ChessBoard): Array<Coordinates> {
  const possibleSquares: Array<Coordinates> = []
  const whiteToMove = isWhiteToMove()
  const kingInCheck = isKingInCheck()
  const isWhite = piece.class.includes('w')

  // If turn is correct
  if ((whiteToMove && isWhite) || (!whiteToMove && !isWhite)) {
    const y = piece.coordinates[0]
    const x = piece.coordinates[1]
    const calculatedCoordinates: Array<Coordinates> = [
      [y + 2, x + 1],
      [y + 2, x - 1],
      [y - 2, x - 1],
      [y - 2, x + 1],
      [y + 1, x + 2],
      [y + 1, x - 2],
      [y - 1, x + 2],
      [y - 1, x - 2]
    ]
    const limitedCoordinates = trimArray(calculatedCoordinates, 0, 8)

    if (kingInCheck) {
      // Check if it is possible to block check with knight
    } else {
      // Add squares if they are not the same color as the players turn
      // And if it is included in the allSquares array,
      limitedCoordinates.forEach((c) => {
        if (isWhite) {
          if (!chessBoard[c[0]][c[1]].currentPiece.class.includes('w')) {
            possibleSquares.push(c)
          }
        } else {
          if (!chessBoard[c[0]][c[1]].currentPiece.class.includes('b')) {
            possibleSquares.push(c)
          }
        }
      })
    }
  }

  return possibleSquares
}
