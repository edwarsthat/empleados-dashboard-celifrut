import s from '../styles/UserCard.module.css'
import useAuthStore from '../store/useAuthStore'
import { config } from '../config'

export default function UserCard() {
  const { personal } = useAuthStore()

  if (!personal) return null

  const initials = personal.nombre
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  const cargoColor = personal.cargo?.color ?? '#7EBA27'

  return (
    <div className={s.card}>

      {/* Avatar */}
      <div className={s.avatarWrap}>
        {personal.urlFotoCarnet ? (
          <img src={`${config.apiUrl}/media/foto/${personal.urlFotoCarnet}`} alt={personal.nombre} className={s.avatarImg} />
        ) : (
          <div className={s.avatarFallback} style={{ background: cargoColor }}>
            {initials}
          </div>
        )}
        <span className={`${s.estadoBadge} ${personal.estado ? s.activo : s.inactivo}`} />
      </div>

      {/* Info principal */}
      <div className={s.info}>
        <h2 className={s.nombre}>{personal.nombre}</h2>

        {personal.cargo && (
          <span className={s.cargoBadge} style={{ background: personal.cargo.color + '22', color: personal.cargo.color, borderColor: personal.cargo.color + '55' }}>
            {personal.cargo.nombre}
          </span>
        )}

        {/* Detalles */}
        <dl className={s.detalles}>
          <div className={s.detalle}>
            <dt>PE</dt>
            <dd>{personal.PE}</dd>
          </div>
          <div className={s.detalle}>
            <dt>Documento</dt>
            <dd>{personal.tipoDocumento} · {personal.identificacion}</dd>
          </div>
          {personal.tipoSangre && (
            <div className={s.detalle}>
              <dt>Tipo de sangre</dt>
              <dd>{personal.tipoSangre}</dd>
            </div>
          )}
          <div className={s.detalle}>
            <dt>Estado</dt>
            <dd className={personal.estado ? s.textoActivo : s.textoInactivo}>
              {personal.estado ? 'Activo' : 'Inactivo'}
            </dd>
          </div>
        </dl>
      </div>

    </div>
  )
}
