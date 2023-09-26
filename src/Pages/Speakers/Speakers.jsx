import React from 'react'
import './Speakers.css'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'

const Speakers = () => {
    const speaker=[
        {
            name:'Brenden Legros',
            country:'India',
            img:'https://bootstrapmade.com/demo/templates/TheEvent/assets/img/speakers/1.jpg',
            url:'/speaker-detail'
        },
        {
            name:'Hubert Hirthe',
            country:'India',
            img:'https://bootstrapmade.com/demo/templates/TheEvent/assets/img/speakers/2.jpg',
            url:'/speaker-detail'
        },
        {
            name:'Cole Emmerich',
            country:'UK',
            img:'https://bootstrapmade.com/demo/templates/TheEvent/assets/img/speakers/3.jpg',
            url:'/speaker-detail'
        },
        {
            name:'Jack Christiansen',
            country:'India',
            img:'https://bootstrapmade.com/demo/templates/TheEvent/assets/img/speakers/4.jpg',
            url:'/speaker-detail'
        },
        {
            name:'Alejandrin Littel',
            country:'Japan',
            img:'https://bootstrapmade.com/demo/templates/TheEvent/assets/img/speakers/5.jpg',
            url:'/speaker-detail'
        },
        {
            name:'Willow Trantow',
            country:'china',
            img:'https://bootstrapmade.com/demo/templates/TheEvent/assets/img/speakers/6.jpg',
            url:'/speaker-detail'
        }
    ]
  return (
    <>
    <Navbar/>
    <section id="speakers">
  <div className="container aos-init aos-animate" data-aos="fade-up">
    <div className="text-center mb-4">
      <h2>Speakers</h2>
      <p className='text-center'>Our conferences are graced by visionaries, experts, and trailblazers who have dedicated their lives to pushing the boundaries of human understanding. These speakers bring with them a wealth of experience, insights, and perspectives that enrich the discourse at our events. Through their eloquence and expertise, they inspire audiences and catalyze the formation of new ideas.</p>
    </div>
    <div className="row">
        {speaker.map((speaker)=>
         <div className="col-lg-4 col-md-6">
         <div className="speaker aos-init aos-animate" data-aos="fade-up" data-aos-delay={100}>
           <img src={speaker.img} alt="Speaker 1" className="img-fluid" />
           <div className="details">
             <h3><Link to="/speaker-detail">{speaker.name}</Link></h3>
             <p>{speaker.country}</p>
             {/* <div className="social">
               <Link to><i className="bi bi-facebook" /></Link>
               <Link to><i className="bi bi-instagram" /></Link>
               <Link to><i className="bi bi-linkedin" /></Link>
             </div> */}
           </div>
         </div>
       </div>
        )}
    </div>
  </div>
</section>
<Footer/>
    
    </>
  )
}

export default Speakers