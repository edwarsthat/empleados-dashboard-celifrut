import FormularioSociocultural from '../components/FormularioSociocultural';
import styles from '../styles/Formulario.module.css';

export default function SocioculturalPage() {
    return (
        <div className={styles.formContainer}>
        <div className={styles.infoBanner}>
            <h2 className={styles.sectionTitle}>Registro de Información Sociocultural</h2>
            <p>Le damos una cordial bienvenida a la empresa Celifrut SAS, para proceder con su proceso de vinculación
                y actualizar nuestras bases de datos, solicitamos de su amable colaboración respondiendo las siguientes preguntas,
                las siguientes son de índole personal y familiar, si tiene alguna duda e inquietud no dude en comunicarse con el
                personal de Talento Humano. 
            </p>
                
            <p>
                Ley 1581 de 2012 de protección de datos personales,  es una ley que complementa la regulación vigente para la
                protección del derecho fundamental que tienen todas las personas naturales a autorizar la información personal que es
                almacenada en bases de datos o archivos, así como su posterior actualización y rectificación.
            </p>
        </div>
        <FormularioSociocultural />
        </div>
    );
}