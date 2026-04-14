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

export default function InfoSocioEconomica({ data }: Props) {
    return (
        <div className={styles.wrapper}>

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
