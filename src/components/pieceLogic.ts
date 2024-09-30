import type { ChessBoard, Coordinates, Piece } from "@/types"

export function movePiece(toCoordinate: Coordinates) {

}

export function isWhiteToMove(): boolean {
  return false
}

export function isKingInCheck(): boolean {
  return false
}



export function knightSquares(piece: Piece, chessBoard: ChessBoard) : Array<Coordinates> {
  const possibleSquares: Array<Coordinates> = []    
  const whiteToMove = isWhiteToMove()
  const kingInCheck = isKingInCheck()
  const isWhite = piece.class.includes('w')
  
  
  // Check if turn is correct
  if ((whiteToMove && isWhite) || (!whiteToMove && !isWhite)) {
    console.log('hej')
    const y = piece.coordinates[0]
    const x = piece.coordinates[1]
    const allSquares: Array<Coordinates> = [[y+2, x+1], [y+2, x-1], [y-2, x-1], [y-2, x+1]]

    if (kingInCheck) {
      // Check if it is possible to block check with knight

    } else {
      // Check all possible squares

      // Filtrera ut array från chessBoard --DENNA FUNKAR INTE--
      const squares = chessBoard.filter((row, rowIndex) => row.filter((square, squareIndex) => {

        // Kolla om rutorna innehåller pjäser med samma färg
        if (isWhite) {
          if (!square.includes('w')) {
            return square
          }
        } else {
          if (!square.includes('b')) {
            return square
          }
        }
      }))

      console.log(squares)
    }
  }
  
  return possibleSquares
}