import React from 'react'
import { Link } from 'react-router-dom'
import './Venue.css'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'

const Venue = () => {
  return (
    <>
    <Navbar/>
   <section id="hotels" className="section-with-bg">
  <div className="container aos-init aos-animate" data-aos="fade-up">
    <div className="section-header text-center mb-4">
      <h2>Venue</h2>
      <p className='text-center'> Her are some nearby hotels</p>
    </div>
    <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-delay={100}>
      <div className="col-lg-4 col-md-6">
        <div className="hotel">
          <div className="hotel-img">
            <img src="https://stmconferences.com/wp-content/uploads/2018/09/logo-signage.jpg" alt="Hotel 1" className="img-fluid" />
          </div>
          <h3><Link to="#">Place 1</Link></h3>
          <div className="stars">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
          </div>
          <p>0.4 Mile from the Venue</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="hotel">
          <div className="hotel-img">
            <img src="https://bootstrapmade.com/demo/templates/TheEvent/assets/img/hotels/1.jpg" alt="Hotel 2" className="img-fluid" />
          </div>
          <h3><Link to="#">Place 2</Link></h3>
          <div className="stars">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill-half-full" />
          </div>
          <p>0.5 Mile from the Venue</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="hotel">
          <div className="hotel-img">
            <img src="https://bootstrapmade.com/demo/templates/TheEvent/assets/img/hotels/2.jpg" alt="Hotel 3" className="img-fluid" />
          </div>
          <h3><Link to="#">Place 3</Link></h3>
          <div className="stars">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
          </div>
          <p>0.6 Mile from the Venue</p>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
    
    </>
  )
}

export default Venue