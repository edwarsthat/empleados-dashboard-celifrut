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


            {/* TODO: reemplazar personalMock por data del servidor */}
            <InfoSocioEconomica data={personalMock} />
        </div>
    );
}