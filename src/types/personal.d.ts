import type { Cargo } from "./cargos"

export interface Personal {
  PE: number
  nombre: string
  cargo: Cargo | null        
  identificacion: string
  tipoDocumento: string
  foto?: string
  tipoSangre?: string
  urlIdentificacion: string
  urlFotoCarnet: string
  estado: boolean
  carnet: string | null       
}
