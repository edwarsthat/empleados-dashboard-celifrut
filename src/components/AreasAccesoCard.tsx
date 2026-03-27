import useAuthStore from '../store/useAuthStore'
import useDataStore from '../store/useDataStore'
import s from '../styles/AreasAccesoCard.module.css'

export default function AreasAccesoCard() {
  const areas = useDataStore((s) => s.areas)
  const user = useAuthStore((s) => s.personal)  
  console.log(areas)
  console.log(user)
  return (
    <div className={s.card}>
      <h3 className={s.title}>Áreas de acceso</h3>

      {areas.length === 0 ? (
        <p className={s.empty}>Sin áreas asignadas</p>
      ) : (
        <ul className={s.list}>
          {areas.filter((a) => user?.cargo?.areas.includes(a._id)).map((area) => (
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
