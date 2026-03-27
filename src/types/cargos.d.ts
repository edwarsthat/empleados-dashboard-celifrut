export type CargoColor = '#7EBA27' | '#FFCD00' | '#F3930D'

export interface Cargo {
  _id: string
  nombre: string
  areas: string[]  
  color: CargoColor
}
