import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
    <div className="wrapper">
      <div className="textContainer">
        <h2>SANSIKA KODITHUWAKKU</h2>
        <h1>Full Stack Web And Mobile Developer</h1>
        <div className="buttons">
          <button>See latest Works</button>
          <button>Contact Me</button>
        </div>
        <img src='/scroll.png'/>
      </div>
    </div>
    <div className="slidingTextContainer">
      Developer Content Creator 
    </div>
    <div className="imageContainer">
       <img src='/hero.png' alt='' />
    </div>
    </div>
  )
}

export default Hero
 