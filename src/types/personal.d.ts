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
  estrato?: string
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

  factor_vulnerabilidad?: string
  pertenencia_etnica?: string

  //informacion familiar
  nombre_conyugue?: string
  apellido_conyugue?: string
  telefono_conyugue?: string
  tiempo_conviviendo?: number
  tiene_hijos?: boolean
  cuantos_hijos?: number
  edad_hijos?: number[]

  //dotacion
  camisa?: string
  pantalon?: string
  calzado?: string
}
