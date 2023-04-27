import './style.css'

import vk from './../../images/icons/vk.svg'
import gitHub from './../../images/icons/gitHub.svg'
import instagram from './../../images/icons/instagram.svg'
import linkedIn from './../../images/icons/linkedIn.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <img src={vk} alt="link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={gitHub} alt="link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={instagram} alt="link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={linkedIn} alt="link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
