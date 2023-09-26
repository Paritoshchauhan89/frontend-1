import React from 'react'
import './conferences.css'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'

const Conferences = () => {
  return (
    <>
    <Navbar/>
  <div className="container mt-5">
    <h1 className='text-center m-4'>All Conferences</h1>
    <p className='text-center mt-4 mb-4' style={{fontSize:16,textAlign:'center'}}>At the heart of STM Conferences is the celebration of knowledge. Our conferences serve as vibrant hubs where researchers, scholars, professionals, and enthusiasts converge to deliberate upon the latest advancements in their respective fields. With a rich tapestry of themes and subjects, these gatherings provide a platform for intellectual growth, ensuring that innovation and insights are nurtured to their fullest potential.</p>
 </div>
 <Footer/>
    </>
  )
}

export default Conferences