import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image'></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5> Experience </h5>
              <small>3 Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5> Clients </h5>
              <small>100+ Worldwide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5> Project </h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>

          <p>

          Front-end web development is an exciting job because it constantly evolves and changes. This change means that I will always have the opportunity to be exposed to new tools and learn new skills, helping me stay engaged in my career. This major is an area that offers many learning and practice opportunities. I am a person who is always motivated to work. With this position, I will be able to apply what I have learned to design a beautiful, user-friendly website interface, optimise performance, and comply with the company's project website standards. Yeppp
          </p>
          
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
