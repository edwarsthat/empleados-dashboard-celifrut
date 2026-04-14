import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import s from '../styles/NavBar.module.css'
import useAuthStore from '../store/useAuthStore'


export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [userDropdownOpen, setUserDropdownOpen] = useState(false) // Nuevo estado para el perfil
  const { personal } = useAuthStore()

  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkMode)
  }, [darkMode])

  // Función para cerrar el dropdown al hacer click en un link
  const closeDropdowns = () => {
    setUserDropdownOpen(false)
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={s.nav}>
        <div className={s.inner}>

          {/* Brand */}
          <NavLink to="/" className={s.brand}>
            <img src="/1.webp" alt="Logo" className={s.brandLogo} />
            <span>
              <div className={s.brandName}>Empleados</div>
              <div className={s.brandSub}>Dashboard</div>
            </span>
          </NavLink>


          {/* Right */}
          <div className={s.right}>
            {/* Theme toggle */}
            <button
              className={s.iconBtn}
              onClick={() => setDarkMode((d) => !d)}
              title={darkMode ? 'Modo claro' : 'Modo oscuro'}
            >
              {darkMode ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>

            <div className={s.sep} />

            {/* User chip con Dropdown*/}
            <div className={s.userWrapper}>
            <button className={s.user} onClick={() => setUserDropdownOpen(!userDropdownOpen)}>
              {/* <span className={s.avatar}>foto</span> */} {/*para ver la foto en miniatura*/}
              <span className={s.userInfo}>
                <span className={s.userName}>{personal?.nombre}</span>
                <span className={s.userRole}>{personal?.cargo?.nombre}</span>
              </span>
              <svg className={`${s.chevron} ${userDropdownOpen ? s.chevronRotate : ''}`} 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {/* LISTA DESPLEGABLE */}
              {userDropdownOpen && (
                <div className={s.userDropdown}>
                  <div className={s.dropdownHeader}>Mi Perfil</div>
                  <NavLink 
                    to="/registro-sociocultural" 
                    className={s.dropdownItem}
                    onClick={closeDropdowns}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    Ficha Sociocultural
                  </NavLink>
                  <div className={s.dropdownDivider} />
                  <button className={`${s.dropdownItem} ${s.logoutBtn}`}>
                    Cerrar Sesión
                  </button>
                </div>
              )}
            </div>
            {/* Hamburger */}
            <button
              className={s.hamburger}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menú"
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
