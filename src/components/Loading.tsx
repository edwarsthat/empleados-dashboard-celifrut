import styles from '../styles/Loading.module.css'

interface Props {
  message?: string
}

export default function Loading({ message = 'Verificando...' }: Props) {
  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <span className={styles.text}>{message}</span>
        <div className={styles.track}>
          <div className={styles.bar} />
        </div>
      </div>
    </div>
  )
}
