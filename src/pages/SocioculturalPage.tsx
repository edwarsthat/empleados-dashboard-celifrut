// import { useEffect, useState } from 'react';
// import { config } from '../config';
import InfoSocioEconomica from '../components/infoSocioEconomica/InfoFormularioSSocioEconomico';
import styles from '../styles/Formulario.module.css';
import { personalMock } from '../mock/personalMock';

export default function SocioculturalPage() {
    // const [data, setData] = useState<Personal | null>(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState<string | null>(null);

    // async function fetchFichaSociocultural() {
    //     const url = `${config.apiUrl}/talento-humano/encuesta-socioeconomica`;
    //     try {
    //         const res = await fetch(url, { credentials: 'include' });
    //         if (res.status === 404) { setData(null); return; }
    //         if (!res.ok) throw new Error(`Error ${res.status}`);
    //         setData(await res.json());
    //     } catch (err) {
    //         setError(err instanceof Error ? err.message : 'Error desconocido');
    //     } finally {
    //         setLoading(false);
    //     }
    // }

    // useEffect(() => { fetchFichaSociocultural(); }, []);

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
                    Ley 1581 de 2012 de protección de datos personales, es una ley que complementa la regulación vigente para la
                    protección del derecho fundamental que tienen todas las personas naturales a autorizar la información personal que es
                    almacenada en bases de datos o archivos, así como su posterior actualización y rectificación.
                </p>
            </div>

            {/* TODO: reemplazar personalMock por data del servidor */}
            <InfoSocioEconomica data={personalMock} />
        </div>
    );
}