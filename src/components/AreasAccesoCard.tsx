import useAuthStore from '../store/useAuthStore'
import useDataStore from '../store/useDataStore'
import s from '../styles/AreasAccesoCard.module.css'

type propsType = {
  tipo?: 'areasAcceso' | 'areasAccesoParcial'
}

export default function AreasAccesoCard({ tipo = 'areasAcceso' }: propsType) {
  const areasAcceso = useDataStore((s) => s.areasAcceso)
  const user = useAuthStore((s) => s.personal)
  return (
    <div className={s.card}>
      <h3 className={s.title}>{tipo === 'areasAcceso' ? 'Áreas de acceso' : 'Áreas de acceso parcial'}</h3>

      {areasAcceso.length === 0 ? (
        <p className={s.empty}>Sin áreas asignadas</p>
      ) : (
        <ul className={s.list}>
          {areasAcceso.filter((a) => user?.cargo?.[tipo]?.includes(a._id)).map((area) => (
            <li key={area._id} className={s.item}>
              <span className={s.dot} />
              <div className={s.itemInfo}>
                <span className={s.nombre}>{area.nombre}</span>
                <span className={s.sede}>{area.sede}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
