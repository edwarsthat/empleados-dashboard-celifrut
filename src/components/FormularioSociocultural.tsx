import React, { useState } from 'react';
import styles from '../styles/Formulario.module.css'; 

export default function FormularioSociocultural() {
    const [formData, setFormData] = useState({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.formWrapper}>
            <form className={styles.formContainer}>
                {/* CATEGORÍA 1: IDENTIFICACIÓN Y DATOS BÁSICOS */}
                <h2 className={styles.sectionTitle}>1. Identificación y Datos Básicos</h2>
                <div className={styles.grid}>
                <div className={styles.field}>
                    <label>Tipo de Documento</label>
                    <select name="tipoDocumento" className={styles.select} onChange={handleChange}>
                    <option value="">Seleccione...</option>
                    <option value="TI">TI (Tarjeta de identidad)</option>
                    <option value="CC">CC (Cedula de Ciudadania)</option>
                    <option value="CE">CE (Cedula de Extranjeria)</option>
                    <option value="PPT">PPT (Permiso por Proteccion Temporal)</option>
                    </select>
                </div>
                <div className={styles.field}>
                    <label>Nro. de Documento</label>
                    <input type="text" name="nroDocumento" className={styles.input} placeholder="Sin puntos ni comas" onChange={handleChange} />
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

                <button type="submit" className={styles.submitBtn}>
                Guardar Registro
                </button>
            </form>
            </div>
        );
    }