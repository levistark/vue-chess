import type { ChessBoard, Coordinates, Piece } from '@/types'
import { isWhiteToMove, isKingInCheck } from '@/stores'

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

export function getPawnSquares(piece: Piece, chessBoard: ChessBoard): Array<Coordinates> {
  const possibleSquares: Array<Coordinates> = []
  let calculatedCoordinates: Array<Coordinates> = []
  const isWhite = piece.class.includes('w')
  const isFirstMove = isFirstPawnMove(piece)
  const availableCaptures = getPawnCaptures(piece, chessBoard)
  
  // If  turn is correct
  if ((isWhiteToMove.value && isWhite) || (!isWhiteToMove.value && !isWhite)) {
    const x = piece.coordinates[0]
    const y = piece.coordinates[1]

    // If white
    if (isFirstMove && isWhite) {
      calculatedCoordinates = [
        [x, y-1], [x, y-2]
      ]
    } else if (isWhite) {
      calculatedCoordinates = [
        [x, y-1]
      ]
    }

    // If black
    if (isFirstMove && !isWhite) {
      calculatedCoordinates = [
        [x, y+1], [x, y+2]
      ]
    } else if (!isWhite) {
      calculatedCoordinates = [
        [x, y+1]
      ]
    }

    if (isKingInCheck.value) {
      // Check if it is possible to block/capture with pawn
      // ...
    } else {
      // Add squares if they do not have blocking pieces of either color
      calculatedCoordinates.forEach((c) => {
        if (chessBoard[c[0]][c[1]].currentPiece.class.split('').length === 0) {
          possibleSquares.push(c)
        }
      })
    }
  }

  const allMoves = [...possibleSquares, ...availableCaptures]
  return allMoves 
}

function getPawnCaptures(piece: Piece , chessBoard: ChessBoard): Array<Coordinates> {
  const availableCaptures: Array<Coordinates> = []
  const isWhite = piece.class.split('')[0].includes('w')
  const c = piece.coordinates

  if (isWhite) {
    let upperLeftC: any[] = []
    let upperRightC: any[] = []
    
    if (c[0] > 0) upperLeftC = [c[0]-1, c[1]-1]
    if (c[0] < 7) upperRightC = [c[0]+1, c[1]-1]    

    if (upperLeftC.length > 0) {
      // Om rutan uppe i vänstra/högra övre hörnet innehåller en svart pjäs
      if (chessBoard[upperLeftC[0]][upperLeftC[1]].currentPiece.class.includes('b')) 
        availableCaptures.push(upperLeftC as Coordinates)  
    }
    if (upperRightC.length > 0) {
      if (chessBoard[upperRightC[0]][upperRightC[1]].currentPiece.class.includes('b')) 
        availableCaptures.push(upperRightC as Coordinates)
    }    
  } else {
    let lowerLeftC: any[] = []
    let lowerRightC: any[] = []
    
    if (c[0] > 0) lowerLeftC = [c[0]-1, c[1]+1]
    if (c[0] < 7) lowerRightC = [c[0]+1, c[1]+1]

    if (lowerLeftC.length > 0) {
      // Om rutan i vänstra/högra nedre hörnet innehåller en vit pjäs 
      if (chessBoard[lowerLeftC[0]][lowerLeftC[1]].currentPiece.class.includes('w'))
        availableCaptures.push(lowerLeftC as Coordinates)
    }
    
    if (lowerRightC.length > 0) {
      if (chessBoard[lowerRightC[0]][lowerRightC[1]].currentPiece.class.includes('w')) 
        availableCaptures.push(lowerRightC as Coordinates)
    }
  }
  return availableCaptures
}



export function getBishopSquares(piece: Piece, chessBoard: ChessBoard): Array<Coordinates> {
  const possibleSquares: Array<Coordinates> = []
  const isWhite = piece.class.includes('w')

  if ((isWhiteToMove.value && isWhite) || (!isWhiteToMove.value && !isWhite)) {
    const x = piece.coordinates[0]
    const y = piece.coordinates[1]
    const calculatedCoordinates: Array<Coordinates> = []
    const n = 8

    // Upper left
    for (let i = 0; i < (x > y ? y : x+1); i++) {
      calculatedCoordinates.push([x-i, y-i])
      if (chessBoard[x-i][y-i].currentPiece.class !== '') chessBoard[x-i][y-i].currentPiece.class
    }

    // Upper right
    for (let i = 0; i < (y > n-x ? n-x : y); i++) {
      calculatedCoordinates.push([x+i, y-i])
      if (chessBoard[x+i][y-i].currentPiece.class !== '') i = n
    }

    // Lower right
    for (let i = 0; i < (n-x > n-y ? n-y : n-x); i++) {
      calculatedCoordinates.push([x+i, y+i])
      if (chessBoard[x+i][y+i].currentPiece.class !== '') i = n
    }

    // Lower left
    for (let i = 0; i < (x > n-y ? n-y : x+1); i++) {
      calculatedCoordinates.push([x-i, y+i])
      if (chessBoard[x-i][y+i].currentPiece.class !== '') chessBoard[x-i][y-i].currentPiece.class
    }
    
    const color = isWhite ? 'w' : 'b'

    calculatedCoordinates.forEach((c) => {
      if (!chessBoard[c[0]][c[1]].currentPiece.class.includes(color)) {
        possibleSquares.push(c)
      }
    })

    console.log(calculatedCoordinates.length)
    console.log(possibleSquares.length)
  }

  return possibleSquares
}

function getBishopCaptures(piece: Piece, chessBoard: ChessBoard) : Array<Coordinates> {
  const availableCaptures: Array<Coordinates> = []
  return availableCaptures
}





export function getKnightSquares(piece: Piece, chessBoard: ChessBoard): Array<Coordinates> {
  const possibleSquares: Array<Coordinates> = []
  const isWhite = piece.class.includes('w')

  // If turn is correct
  if ((isWhiteToMove.value && isWhite) || (!isWhiteToMove.value && !isWhite)) {
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

    if (isKingInCheck.value) {
      // Check if it is possible to block/capture with knight
      // ...
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
