import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaFacebook} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/hoang-phuc-1601a2266/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/hoanggphucc31' target='_blank'><FaGithub/></a>
        <a href='https://www.facebook.com/anyone831' target='_blank'><FaFacebook/></a>
    </div>
  )
}

export default HeaderSocials