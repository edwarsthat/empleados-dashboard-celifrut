import styles from '../styles/Login.module.css'

export default function Login() {
  return (
    <div className={styles.page}>

      {/* ── Panel izquierdo: marca ── */}
      <div className={styles.brand}>
        <div className={styles.geo}>
          <div className={styles.geoCircle1} />
          <div className={styles.geoCircle2} />
          <div className={styles.geoCircle3} />
          <div className={styles.geoLine} />
        </div>

        <div className={styles.brandTop}>
          <div className={styles.brandLogo}>
            <img src="/1.webp" alt="Logo empresa" className={styles.brandLogoImg} />
          </div>

          <h1 className={styles.brandTitle}>
            Portal de<br />Empleados
          </h1>
          <p className={styles.brandSubtitle}>
            Gestión de talento humano, verificación de acceso y control de asistencia.
          </p>
        </div>

        <div className={styles.brandBottom}>
          <span className={styles.brandTag}>
            <span className={styles.brandTagDot} />
            Sistema activo
          </span>
        </div>
      </div>

      {/* ── Panel derecho: formulario ── */}
      <div className={styles.form}>
        <div className={styles.formInner}>

          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Iniciar sesión</h2>
            <p className={styles.formSubtitle}>Ingresa tus credenciales para continuar.</p>
          </div>

          <div className={styles.fieldGroup}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="username">
                Usuario
              </label>
              <div className={styles.inputWrapper}>
                <svg className={styles.inputIcon} viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <input
                  id="username"
                  type="text"
                  className={styles.input}
                  placeholder="tu.usuario"
                  autoComplete="username"
                />
              </div>
            </div>

            <div className={styles.field}>
              <div className={styles.labelRow}>
                <label className={styles.label} htmlFor="password">
                  Contraseña
                </label>
                <a className={styles.forgotLink} href="#">¿Olvidaste tu contraseña?</a>
              </div>
              <div className={styles.inputWrapper}>
                <svg className={styles.inputIcon} viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <input
                  id="password"
                  type="password"
                  className={styles.input}
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
              </div>
            </div>
          </div>

          <button type="button" className={styles.submit}>
            Ingresar
          </button>

          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerText}>acceso seguro</span>
            <span className={styles.dividerLine} />
          </div>

          <p className={styles.formFooter}>
            Solo personal autorizado. Uso exclusivo interno.
          </p>

        </div>
      </div>

    </div>
  )
}
