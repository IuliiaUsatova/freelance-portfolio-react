import sun from '../../images/icons/sun.svg'
import moon from '../../images/icons/moon.svg'
import './style.css'
import { useEffect, useRef } from 'react'
import { useLocalStorage } from '../../utils/useLocalStorage'

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', 'light')

  const btnRef = useRef(null)

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark')
      btnRef.current.classList.add('dark-mode-btn--active')
    } else {
      document.body.classList.remove('dark')
      btnRef.current.classList.remove('dark-mode-btn--active')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light'
    })
  }

  return (
    <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
      <img src={sun} className="dark-mode-btn__icon" alt="light mode" />
      <img src={moon} className="dark-mode-btn__icon" alt="dark mode" />
    </button>
  )
}

export default BtnDarkMode
