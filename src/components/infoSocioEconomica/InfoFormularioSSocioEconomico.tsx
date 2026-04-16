import { useNavigate } from 'react-router-dom';
import type { Personal } from '../../types/personal';
import styles from '../../styles/InfoSocioEconomica.module.css';

interface Props {
    data: Personal;
}

function Campo({ label, value }: { label: string; value?: string | number | boolean }) {
    const display = value !== undefined && value !== null && value !== ''
        ? String(value)
        : undefined;
    return (
        <div className={styles.field}>
            <span className={styles.label}>{label}</span>
            <span className={display ? styles.value : `${styles.value} ${styles.empty}`}>
                {display ?? '—'}
            </span>
        </div>
    );
}

function mapPersonasCargoToForm(val?: number): string {
    if (val === 0) return 'Ninguna';
    if (val === 1) return '1-2';
    if (val === 3) return '3-4';
    if (val === 5) return '5+';
    return '';
}

function buildInitialData(data: Personal): Record<string, string> {
    const d: Record<string, string> = {};
    if (data.nombre)                      d.nombre              = data.nombre;
    if (data.apellido)                    d.apellido            = data.apellido;
    if (data.tipoDocumento)               d.tipoDocumento       = data.tipoDocumento;
    if (data.identificacion)              d.nroDocumento        = data.identificacion;
    if (data.genero)                      d.genero              = data.genero;
    if (data.nacionalidad)                d.nacionalidad        = data.nacionalidad;
    if (data.fechaNacimiento)             d.fechaNacimiento     = data.fechaNacimiento;
    if (data.tipoSangre)                  d.rh                  = data.tipoSangre;
    if (data.raza)                        d.raza                = data.raza;
    if (data.eps)                         d.eps                 = data.eps;
    if (data.pension)                     d.pensiones           = data.pension;
    if (data.cesantias)                   d.cesantias           = data.cesantias;
    if (data.celular)                     d.celular             = String(data.celular);
    if (data.correo)                      d.correo              = data.correo;
    if (data.escolaridad)                 d.escolaridad         = data.escolaridad;
    if (data.tituloObtenido)              d.titulo              = data.tituloObtenido;
    if (data.departamento)                d.departamento        = data.departamento;
    if (data.municipio)                   d.ciudad              = data.municipio;
    if (data.tipoVivienda)                d.tipoVivienda        = data.tipoVivienda;
    if (data.direccion)                   d.direccion           = data.direccion;
    if (data.strato)                      d.estrato             = data.strato;
    if (data.personasACargo !== undefined) d.personasCargo      = mapPersonasCargoToForm(data.personasACargo);
    if (data.vulnerabilidad)              d.vulnerabilidad      = data.vulnerabilidad;
    if (data.orientacionSexual)           d.orientacion         = data.orientacionSexual;
    if (data.pertenenciaEtnica)           d.etnia               = data.pertenenciaEtnica;
    if (data.estadoCivil)                 d.estadoCivil         = data.estadoCivil;
    if (data.tieneVehiculo !== undefined) d.vehiculo            = data.tieneVehiculo ? '' : 'No';
    if (data.contactoEmergenciaNombre)    d.emergenciaNombre    = data.contactoEmergenciaNombre;
    if (data.contactoEmergenciaTelefono)  d.emergenciaTelefono  = String(data.contactoEmergenciaTelefono);
    if (data.contactoEmergenciaParentesco) d.emergenciaParentesco = data.contactoEmergenciaParentesco;
    return d;
}

export default function InfoSocioEconomica({ data }: Props) {
    const navigate = useNavigate();
    return (
        <div className={styles.wrapper}>
            <div className={styles.headerActions}>
                <button
                    className={styles.editBtn}
                    onClick={() => navigate('/registro-socioeconomico', { state: { initialData: buildInitialData(data) } })}
                    title="Editar información"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                    Editar
                </button>
            </div>

            {/* 1. Identificación y Datos Básicos */}
            <h2 className={styles.sectionTitle}>1. Identificación y Datos Básicos</h2>
            <div className={styles.grid}>
                <Campo label="Tipo de Documento"   value={data.tipoDocumento} />
                <Campo label="Nro. de Documento"   value={data.identificacion} />
                <Campo label="Género"              value={data.genero} />
                <Campo label="Nacionalidad"        value={data.nacionalidad} />
                <Campo label="Fecha de Nacimiento" value={data.fechaNacimiento} />
                <Campo label="Tipo de Sangre / RH" value={data.tipoSangre} />
                <Campo label="Raza"                value={data.raza} />
            </div>

            {/* 2. Seguridad Social y Contacto */}
            <h2 className={styles.sectionTitle}>2. Seguridad Social y Contacto</h2>
            <div className={styles.grid}>
                <Campo label="EPS"                  value={data.eps} />
                <Campo label="Fondo de Pensiones"   value={data.pension} />
                <Campo label="Fondo de Cesantías"   value={data.cesantias} />
                <Campo label="Celular"              value={data.celular} />
                <Campo label="Correo Electrónico"   value={data.correo} />
            </div>

            {/* 3. Educación */}
            <h2 className={styles.sectionTitle}>3. Educación</h2>
            <div className={styles.grid}>
                <Campo label="Grado de Escolaridad" value={data.escolaridad} />
                <Campo label="Título Obtenido"      value={data.tituloObtenido} />
            </div>

            {/* 4. Residencia y Vivienda */}
            <h2 className={styles.sectionTitle}>4. Residencia y Vivienda</h2>
            <div className={styles.grid}>
                <Campo label="Departamento"       value={data.departamento} />
                <Campo label="Municipio"          value={data.municipio} />
                <Campo label="Tipo de Vivienda"   value={data.tipoVivienda} />
                <Campo label="Barrio y Dirección" value={data.direccion} />
                <Campo label="Estrato"            value={data.strato} />
            </div>

            {/* 5. Perfil Sociodemográfico */}
            <h2 className={styles.sectionTitle}>5. Perfil Sociodemográfico</h2>
            <div className={styles.grid}>
                <Campo label="Personas a Cargo"   value={data.personasACargo} />
                <Campo label="Vulnerabilidad"     value={data.vulnerabilidad} />
                <Campo label="Orientación Sexual" value={data.orientacionSexual} />
                <Campo label="Pertenencia Étnica" value={data.pertenenciaEtnica} />
                <Campo label="Estado Civil"       value={data.estadoCivil} />
                <Campo label="¿Tiene Vehículo?"   value={data.tieneVehiculo !== undefined ? (data.tieneVehiculo ? 'Sí' : 'No') : undefined} />
            </div>

            {/* 6. Contacto de Emergencia */}
            <h2 className={styles.sectionTitle}>6. Contacto de Emergencia</h2>
            <div className={styles.grid}>
                <Campo label="Nombre de Contacto"   value={data.contactoEmergenciaNombre} />
                <Campo label="Parentesco"           value={data.contactoEmergenciaParentesco} />
                <Campo label="Teléfono de Contacto" value={data.contactoEmergenciaTelefono} />
            </div>

        </div>
    );
}
