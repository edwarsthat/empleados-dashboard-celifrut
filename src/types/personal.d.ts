import type { Cargo } from "./cargos"

export interface Personal {
  PE: number
  nombre: string
  apellido: string
  cargo: Cargo | null
  identificacion: string
  tipoDocumento: string
  foto?: string
  tipoSangre?: string
  urlIdentificacion: string
  urlFotoCarnet: string
  estado: boolean
  carnet: string | null

  // Ficha sociocultural
  genero?: string
  nacionalidad?: string
  fechaNacimiento?: string
  raza?: string
  eps?: string
  pension?: string
  cesantias?: string
  celular?: string
  correo?: string
  escolaridad?: string
  tituloObtenido?: string
  departamento?: string
  municipio?: string
  tipoVivienda?: string
  direccion?: string
  strato?: string
  personasACargo?: number
  vulnerabilidad?: string
  orientacionSexual?: string
  pertenenciaEtnica?: string
  contactoEmergenciaNombre?: string
  contactoEmergenciaTelefono?: string
  contactoEmergenciaParentesco?: string
  tieneVehiculo?: boolean
  estadoCivil?: string
  fecha_formulario_sociodemografico?: string
}
