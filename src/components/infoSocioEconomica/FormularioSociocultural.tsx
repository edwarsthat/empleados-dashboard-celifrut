import { useState } from 'react';
import styles from '../../styles/Formulario.module.css';
import { config } from '../../config';

interface Props {
    initialData?: Record<string, string>;
}

export default function FormularioSociocultural({ initialData = {} }: Props) {
    const [formData, setFormData] = useState<Record<string, string>>(initialData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitResult, setSubmitResult] = useState<'success' | 'error' | null>(null);
    const [formKey, setFormKey] = useState(0);

    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const mapPersonasCargo = (val: string): number | undefined => {
        const map: Record<string, number> = { 'Ninguna': 0, '1-2': 1, '3-4': 3, '5+': 5 };
        return map[val];
    };

    const buildPayload = () => {
        const d = formData;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const payload: Record<string, any> = {
            nombre: d.nombre,
            apellido: d.apellido,
            identificacion: d.nroDocumento,
        };
        if (d.tipoDocumento)        payload.tipo_documento              = d.tipoDocumento;
        if (d.rh)                   payload.tipo_sangre                 = d.rh;
        if (d.genero)               payload.genero                      = d.genero;
        if (d.nacionalidad)         payload.nacionalidad                = d.nacionalidad;
        if (d.fechaNacimiento)      payload.fecha_nacimiento            = d.fechaNacimiento;
        if (d.raza)                 payload.raza                        = d.raza;
        if (d.eps)                  payload.eps                         = d.eps;
        if (d.pensiones)            payload.pension                     = d.pensiones;
        if (d.cesantias)            payload.cesantias                   = d.cesantias;
        if (d.celular)              payload.celular                     = d.celular;
        if (d.correo)               payload.correo                      = d.correo;
        if (d.escolaridad)          payload.escolaridad                 = d.escolaridad;
        if (d.titulo)               payload.titulo_obtenido             = d.titulo;
        if (d.departamento)         payload.departamento                = d.departamento;
        if (d.ciudad)               payload.municipio                   = d.ciudad;
        if (d.tipoVivienda)         payload.tipo_vivienda               = d.tipoVivienda;
        if (d.direccion)            payload.direccion                   = d.direccion;
        if (d.estrato)              payload.strato                      = d.estrato;
        if (d.personasCargo) {
            const val = mapPersonasCargo(d.personasCargo);
            if (val !== undefined)  payload.personas_a_cargo            = val;
        }
        if (d.vulnerabilidad)       payload.vulnerabilidad              = d.vulnerabilidad;
        if (d.orientacion)          payload.orientacion_sexual          = d.orientacion;
        if (d.etnia)                payload.pertenencia_etnica          = d.etnia;
        if (d.emergenciaNombre)     payload.contacto_emergencia_nombre  = d.emergenciaNombre;
        if (d.emergenciaTelefono)   payload.contacto_emergencia_telefono= d.emergenciaTelefono;
        if (d.emergenciaParentesco) payload.contacto_emergencia_parentesco = d.emergenciaParentesco;
        if (d.vehiculo)             payload.tiene_vehiculo              = d.vehiculo !== 'No';
        if (d.estadoCivil)          payload.estado_civil                = d.estadoCivil;
        return payload;
    };

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitResult(null);
        try {
            const response = await fetch(`${config.apiUrl}/talento-humano/encuesta-socioeconomica`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(buildPayload()),
            });
            if (!response.ok) throw new Error(`Error ${response.status}`);
            setFormData({});
            setFormKey(k => k + 1);
            setSubmitResult('success');
        } catch {
            setSubmitResult('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.formWrapper}>
            <div className={styles.infoBanner}>
                <img src="/1.webp" alt="Celifrut SAS" className={styles.logo} />
                <h2 className={styles.sectionTitle}>Registro de Información Sociocultural</h2>
                <p>Le damos una cordial bienvenida a la empresa Celifrut SAS, para proceder con su proceso de vinculación
                    y actualizar nuestras bases de datos, solicitamos de su amable colaboración respondiendo las siguientes preguntas,
                    las siguientes son de índole personal y familiar, si tiene alguna duda e inquietud no dude en comunicarse con el
                    personal de Talento Humano.
                </p>
                <p>
                    Ley 1581 de 2012 de protección de datos personales, es una ley que complementa la regulación vigente para la
                    protección del derecho fundamental que tienen todas las personas naturales a autorizar la información personal que es
                    almacenada en bases de datos o archivos, así como su posterior actualización y rectificación.
                </p>
            </div>
            <form key={formKey} className={styles.formContainer} onSubmit={handleSubmit}>
                {/* CATEGORÍA 1: IDENTIFICACIÓN Y DATOS BÁSICOS */}
                <h2 className={styles.sectionTitle}>1. Identificación y Datos Básicos</h2>
                <div className={styles.grid}>
                <div className={styles.field}>
                    <label>Nombre <span className={styles.required}>*</span></label>
                    <input type="text" name="nombre" className={styles.input} onChange={handleChange} required />
                </div>
                <div className={styles.field}>
                    <label>Apellido <span className={styles.required}>*</span></label>
                    <input type="text" name="apellido" className={styles.input} onChange={handleChange} required />
                </div>
                <div className={styles.field}>
                    <label>Tipo de Documento <span className={styles.required}>*</span></label>
                    <select name="tipoDocumento" className={styles.select} onChange={handleChange} required>
                    <option value="">Seleccione...</option>
                    <option value="TI">TI (Tarjeta de identidad)</option>
                    <option value="CC">CC (Cedula de Ciudadania)</option>
                    <option value="CE">CE (Cedula de Extranjeria)</option>
                    <option value="PPT">PPT (Permiso por Proteccion Temporal)</option>
                    </select>
                </div>
                <div className={styles.field}>
                    <label>Nro. de Documento <span className={styles.required}>*</span></label>
                    <input type="text" name="nroDocumento" className={styles.input} placeholder="Sin puntos ni comas" onChange={handleChange} required />
                </div>
                <div className={styles.field}>
                    <label>Género</label>
                    <select name="genero" className={styles.select} onChange={handleChange}>
                    <option value="">Seleccione...</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Indefinido">Indefinido</option>
                    </select>
                </div>
                <div className={styles.field}>
                    <label>Nacionalidad</label>
                    <select name="nacionalidad" className={styles.select} onChange={handleChange}>
                    <option value="">Seleccione...</option>
                    <option value="Colombiano">Colombiano (a)</option>
                    <option value="Venezolano">Venezolano (a)</option>
                    </select>
                </div>
                <div className={styles.field}>
                    <label>Fecha de Nacimiento</label>
                    <input type="date" name="fechaNacimiento" className={styles.input} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                    <label>Edad</label>
                    <input type="number" name="edad" className={styles.input} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                    <label>Tipo de Sangre / RH</label>
                    <input type="text" name="rh" className={styles.input} placeholder="Ej: O+" onChange={handleChange} />
                </div>
                <div className={styles.field}>
                    <label>Raza</label>
                    <select name="raza" className={styles.select} onChange={handleChange}>
                    <option value="">Seleccione...</option>
                    <option value="Mestizo">Mestizo</option>
                    <option value="Afrodescendiente">Afrodescendiente</option>
                    <option value="Blanco">Blanco</option>
                    <option value="Negro">Negro</option>
                    </select>
                </div>
                </div>

                {/* CATEGORÍA 2: SEGURIDAD SOCIAL Y CONTACTO */}
                <h2 className={styles.sectionTitle}>2. Seguridad Social y Contacto</h2>
                <div className={styles.grid}>
                <div className={styles.field}>
                    <label>EPS</label>
                    <input type="text" name="eps" className={styles.input} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                    <label>Fondo de Pensiones</label>
                    <input type="text" name="pensiones" className={styles.input} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                    <label>Fondo de Cesantías</label>
                    <input type="text" name="cesantias" className={styles.input} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                    <label>Celular</label>
                    <input type="tel" name="celular" className={styles.input} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                    <label>Correo Electrónico</label>
                    <input type="email" name="correo" className={styles.input} onChange={handleChange} />
                </div>
                </div>

                {/* CATEGORÍA 3: EDUCACIÓN Y FORMACIÓN */}
                <h2 className={styles.sectionTitle}>3. Educación</h2>
                <div className={styles.grid}>
                <div className={styles.field}>
                    <label>Grado de escolaridad</label>
                    <select name="escolaridad" className={styles.select} onChange={handleChange}>
                    <option value="">Seleccione...</option>
                    <option value="Preescolar">Preescolar</option>
                    <option value="Basica">Basica (1-5)</option>
                    <option value="Secundaria">Secundaria (6-9)</option>
                    <option value="Media">Media (10-11)</option>
                    <option value="Tecnico">Tecnico / Tecnologo</option>
                    <option value="Profesional">Profesional Universitario</option>
                    <option value="Posgrado">Posgrado / Maestria</option>
                    </select>
                </div>
                <div className={styles.field}>
                    <label>Título Obtenido</label>
                    <input type="text" name="titulo" className={styles.input} onChange={handleChange} />
                </div>
                </div>

                {/* CATEGORÍA 4: RESIDENCIA Y ENTORNO */}
                <h2 className={styles.sectionTitle}>4. Residencia y Vivienda</h2>
                <div className={styles.grid}>
                <div className={styles.field}>
                    <label>Departamento</label>
                    <input type="text" name="departamento" className={styles.input} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                    <label>Ciudad</label>
                    <input type="text" name="ciudad" className={styles.input} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                    <label>Tipo de Vivienda</label>
                    <select name="tipoVivienda" className={styles.select} onChange={handleChange}>
                    <option value="">Seleccione...</option>
                    <option value="Propia">Propia</option>
                    <option value="Arrendada">Arrendada</option>
                    <option value="Familiar">Familiar</option>
                    </select>
                </div>
                <div className={styles.field}>
                    <label>Barrio y Dirección</label>
                    <input type="text" name="direccion" className={styles.input} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                    <label>Sector</label>
                    <select name="sector" className={styles.select} onChange={handleChange}>
                    <option value="Urbano">Urbano</option>
                    <option value="Rural">Rural</option>
                    </select>
                </div>
                <div className={styles.field}>
                    <label>Estrato</label>
                    <select name="estrato" className={styles.select} onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4 o mas</option>
                    </select>
                </div>
                </div>

                {/* CATEGORÍA 5: PERFIL SOCIODEMOGRÁFICO */}
                <h2 className={styles.sectionTitle}>5. Perfil Sociodemográfico</h2>
                <div className={styles.grid}>
                <div className={styles.field}>
                    <label>Personas a Cargo</label>
                    <select name="personasCargo" className={styles.select} onChange={handleChange}>
                    <option value="Ninguna">Ninguna</option>
                    <option value="1-2">1 a 2</option>
                    <option value="3-4">3 a 4</option>
                    <option value="5+">5 o más</option>
                    </select>
                </div>
                <div className={styles.field}>
                    <label>Vulnerabilidad</label>
                    <select name="vulnerabilidad" className={styles.select} onChange={handleChange}>
                    <option value="Ninguno">Ninguno</option>
                    <option value="Desplazado">Desplazado</option>
                    <option value="Victima">Victima del Conflicto</option>
                    <option value="Migrante">Poblacion migrante</option>
                    <option value="Cabeza de familia">Cabeza de familia</option>
                    </select>
                </div>
                <div className={styles.field}>
                    <label>Orientación Sexual</label>
                    <select name="orientacion" className={styles.select} onChange={handleChange}>
                    <option value="Heterosexual">Heterosexual</option>
                    <option value="Homosexual">Homosexual</option>
                    <option value="Bisexual">Bisexual</option>
                    </select>
                </div>
                <div className={styles.field}>
                    <label>Pertenencia Étnica</label>
                    <select name="etnia" className={styles.select} onChange={handleChange}>
                    <option value="Ninguno">Ninguno</option>
                    <option value="Afrocolombiano">Afrocolombiano</option>
                    <option value="Indigena">Indigena</option>
                    <option value="Raizal">Raizal</option>
                    </select>
                </div>
                <div className={styles.field}>
                    <label>Estado Civil</label>
                    <select name="estadoCivil" className={styles.select} onChange={handleChange}>
                    <option value="Soltero">Soltero (a) sin hijos</option>
                    <option value="Soltero con hijos">Soltero (a) con hijos</option>
                    <option value="Casado">Casado (a)</option>
                    <option value="Union Libre">Union Libre</option>
                    </select>
                </div>
                <div className={styles.field}>
                    <label>¿Tiene Vehículo?</label>
                    <select name="vehiculo" className={styles.select} onChange={handleChange}>
                    <option value="No">No</option>
                    <option value="Bicicleta">Si: Bicicleta</option>
                    <option value="Motocicleta">Si: Motocicleta</option>
                    <option value="Carro">Si: Carro</option>
                    </select>
                </div>
                </div>

                {/* CATEGORÍA 6: EMERGENCIA */}
                <h2 className={styles.sectionTitle}>6. Contacto de Emergencia</h2>
                <div className={styles.grid}>
                <div className={styles.field}>
                    <label>Nombre de Contacto</label>
                    <input type="text" name="emergenciaNombre" className={styles.input} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                    <label>Parentesco</label>
                    <input type="text" name="emergenciaParentesco" className={styles.input} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                    <label>Teléfono de Contacto</label>
                    <input type="tel" name="emergenciaTelefono" className={styles.input} onChange={handleChange} />
                </div>
                </div>

                {submitResult === 'success' && (
                    <p className={styles.msgSuccess}>Registro guardado exitosamente.</p>
                )}
                {submitResult === 'error' && (
                    <p className={styles.msgError}>Ocurrió un error al guardar. Intente de nuevo.</p>
                )}
                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                    {isSubmitting ? 'Guardando...' : 'Guardar Registro'}
                </button>
            </form>
            </div>
        );
    }