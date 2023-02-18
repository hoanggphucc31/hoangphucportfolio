import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../../src/assets/mehp.png'
import HeaderSocials from './HeaderSocials'


function Header() {
  return (
    <div>
      <header className="container header__container">
        <h5>Hello I'm </h5>
        <h1>NGUYEN HOANG PHUC</h1>
        <h5 className='text-light'>FrontEnd Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt='me'></img>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </header>
    </div>
  )
}

export default Header