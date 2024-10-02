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

function isFirstPawnMove(piece: Piece): boolean {
  if (piece.class.split('')[0] === 'w' && piece.coordinates[1] === 6) {
    return true
  } else if (piece.class.split('')[0] === 'b' && piece.coordinates[1] === 1) {
    return true
  } else {
    return false
  }
}

function checkPawnCaptures(piece: Piece , chessBoard: ChessBoard): Array<Coordinates> {
  const availableCaptures: Array<Coordinates> = []
  const isWhite = piece.class.split('')[0].includes('w')
  const c = piece.coordinates

  if (isWhite) {
    const upperLeftC = [c[0]-1, c[1]-1]
    const upperRightC = [c[0]+1, c[1]-1]
    
    // Om brädet innehåller en svart pjäs vid den övre vänstra/högra rutan
    if (chessBoard[upperLeftC[0]][upperLeftC[1]].currentPiece.class.includes('b')) {
      availableCaptures.push(upperLeftC as Coordinates)
    } else if (chessBoard[upperRightC[0]][upperRightC[1]].currentPiece.class.includes('b')) {
      // FORTSÄTT HÄR
    }
  } else {
    // FORSÄTT SEDAN MED SVARTS LOGIK
  }
  
  
  return availableCaptures
}

export function pawnSquares(piece: Piece, chessBoard: ChessBoard): Array<Coordinates> {
  const possibleSquares: Array<Coordinates> = []
  const whiteToMove = isWhiteToMove()
  const kingInCheck = isKingInCheck()
  const isWhite = piece.class.includes('w')
  const isFirstMove = isFirstPawnMove(piece)
  const canCapturePiece = checkPawnCaptures(piece, chessBoard)

  if ((whiteToMove && isWhite) || (!whiteToMove && !isWhite)) {
    let y = piece.coordinates[0]
    let x = piece.coordinates[1]
    
    if (isFirstMove && isWhite) 
      y -= 2 
    else if (isWhite)
      y -= 1

    if (isFirstMove && !isWhite) 
      y += 2
    else if (!isWhite)
      y += 1

    if (canCapturePiece)


    // let calculatedCoordinates: Array<Coordinates> = []

    // if (isWhite) {
    //   calculatedCoordinates = [
    //     [x, y-1]
    //   ]
    // }
    // const limitedCoordinates = trimArray(calculatedCoordinates, 0, 8)

    // if (kingInCheck) {
    //   // Check if it is possible to block check with knight
    // } else {
    //   // Add squares if they are not the same color as the players turn
    //   // And if it is included in the allSquares array,
    //   limitedCoordinates.forEach((c) => {
    //     if (isWhite) {
    //       if (!chessBoard[c[0]][c[1]].currentPiece.class.includes('w')) {
    //         possibleSquares.push(c)
    //       }
    //     } else {
    //       if (!chessBoard[c[0]][c[1]].currentPiece.class.includes('b')) {
    //         possibleSquares.push(c)
    //       }
    //     }
    //   })
    // }

    if (isFirstMove) {
      // Check if first move and change available squares
    }
  }

  return possibleSquares
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
