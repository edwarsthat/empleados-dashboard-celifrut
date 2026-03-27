import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import s from '../styles/NavBar.module.css'
import useAuthStore from '../store/useAuthStore'


export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { personal } = useAuthStore()

  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkMode)
  }, [darkMode])


  return (
    <>
      <nav className={s.nav}>
        <div className={s.inner}>

          {/* Brand */}
          <NavLink to="/dashboard" className={s.brand}>
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

            {/* User chip */}
            <button className={s.user}>
              <span className={s.avatar}>foto</span>
              <span className={s.userInfo}>
                <span className={s.userName}>{personal?.nombre}</span>
                <span className={s.userRole}>{personal?.cargo?.nombre}</span>
              </span>
              <svg className={s.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

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

      {/* Mobile drawer */}
      {/* {menuOpen && (
        <div className={s.drawer}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `${s.link}${isActive ? ` ${s.active}` : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </div>
      )} */}
    </>
  )
}
