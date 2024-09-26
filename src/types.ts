export type Coordinates = [number, number]

export interface Square {
  isWhite: boolean
  squareCoordinates: Coordinates
  squareId: string
}

export interface Piece {
  isWhite?: boolean
  coordinates: Coordinates 
}

export interface Pawn extends Piece {
  availableMoves(coordinates: Coordinates): Array<Coordinates> 
  value: number
}
export interface Knight extends Piece {
  availableMoves(coordinates: Coordinates): Array<Coordinates> 
  value: number
}
export interface Rook extends Piece {
  availableMoves(coordinates: Coordinates): Array<Coordinates> 
  value: number
}
export interface Bishop extends Piece {
  availableMoves(coordinates: Coordinates): Array<Coordinates> 
  value: number
}
export interface King extends Piece {
  availableMoves(coordinates: Coordinates): Array<Coordinates> 
  value: number
}
export interface Queen extends Piece {
  availableMoves(coordinates: Coordinates): Array<Coordinates> 
  value: number
}
