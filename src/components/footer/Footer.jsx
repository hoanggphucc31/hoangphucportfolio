import React from 'react'
import './footer.css'

import {BsInstagram , BsWhatsapp , BsFacebook} from 'react-icons/bs'

function Footer() {
  return (
    <footer >
      <a href='#' className='footer__logo'>HOANG PHUC</a>
      <ul className="permalinks">
        <li><a href='#'>HOME</a></li>
        <li><a href='#about'>ABOUT</a></li>
        <li><a href='#experience'>EXPERIENCE</a></li>
        <li><a href='#services'>SERVICES</a></li>
        <li><a href='#portfolio'>PORTFOLIO</a></li>
        <li><a href='#testimonials'>TESTIMONIALS</a></li>
        <li><a href='#contact'>CONTACT</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.facebook.com/anyone831'><BsFacebook/></a>
        <a href='https://www.instagram.com/hoanggphuc31/'><BsInstagram/></a>
        <a href='https://api.whatsapp.com/send?phone=84823373813'><BsWhatsapp/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; HOANG PHUC Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer