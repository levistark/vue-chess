export type Coordinates = [number, number]
export type Color = ["white", "black"]
 
export interface Square {
  coordinates: [Coordinates]
  id: string
  color: string
}

export interface Piece {
  isWhite?: boolean
  coordinates: [Coordinates]
}

export interface Pawn extends Piece {
  
}

