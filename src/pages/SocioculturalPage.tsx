import { useEffect, useState } from 'react';
import { config } from '../config';
import InfoSocioEconomica from '../components/infoSocioEconomica/InfoFormularioSSocioEconomico';
import FormularioSociocultural from '../components/infoSocioEconomica/FormularioSociocultural';
import styles from '../styles/Formulario.module.css';
import type { Personal } from '../types/personal';

export default function SocioculturalPage() {
    const [data, setData] = useState<Personal | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    async function fetchFichaSociocultural() {
        const url = `${config.apiUrl}/talento-humano/encuesta-socioeconomica`;
        try {
            const res = await fetch(url, { credentials: 'include' });
            if (res.status === 404) { setData(null); return; }
            if (!res.ok) throw new Error(`Error ${res.status}`);
            const data = await res.json();
            console.log('Respuesta de la API:', data);
            setData(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => { fetchFichaSociocultural(); }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className={styles.formContainer}>
            {data?.fecha_formulario_sociodemografico
                ? <InfoSocioEconomica data={data} />
                : <FormularioSociocultural />
            }
        </div>
    );
}