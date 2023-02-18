import React from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import './portfolio.css'
const data = [
  {
    id:1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization/attachments/11711155?mode=media'
  },

  {
    id:1,
    image: IMG2,
    title: 'Chart templates & inforgraphics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/14421449-Charts-templates-infographics-in-Figma/attachments/6099575?mode=media'
  },

  {
    id:1,
    image: IMG3,
    title: 'Figma dashboard UI kit',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization/attachments/11711155?mode=media'
  },

  {
    id:1,
    image: IMG4,
    title: 'Maintaining task & tracking progress',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization/attachments/11711155?mode=media'
  },

  {
    id:1,
    image: IMG5,
    title: 'Orion UI kit – data visualization and charts templates for Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20281937-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
  },

  {
    id:1,
    image: IMG6,
    title: 'data visualization and charts templates for Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization/attachments/11711155?mode=media'
  },

]
function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container container__portfolio">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio