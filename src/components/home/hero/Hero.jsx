import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
            <Heading subtitle='WELCOME TO CODEBOX' title='Learning Today, Leading Tomorrow' />
            <p>CODEBOX Education is the best online computer courses training platform with 5 years of experience in the field of IT training.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
