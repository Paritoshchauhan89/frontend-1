import React from 'react'
import './organizerdetail.css'
import Navbar from '../../../components/Header/Navbar'
import Footer from '../../../components/Footer/Footer'

const Organizerdetail = () => {
  return (
    <>
    <Navbar/>
    <section id="organizers-details">
  <div className="container">
    <div className="section-header text-center mb-4">
      <h2>Organizer Details</h2>
      <p className='text-center'>Praesentium ut qui possimus sapiente nulla.</p>
    </div>
    <div className="row">
    <div className="col-md-6">
        <div className="details">
          <h2>Brenden Legros</h2>
          <div className="social">
            <a href><i className="bi bi-twitter" /></a>
            <a href><i className="bi bi-facebook" /></a>
            <a href><i className="bi bi-instagram" /></a>
            <a href><i className="bi bi-linkedin" /></a>
          </div>
          <p>Voluptatem perferendis sed assumenda voluptatibus. Laudantium molestiae sint. Doloremque odio dolore dolore sit. Quae labore alias ea omnis ex expedita sapiente molestias atque. Optio voluptas et.</p>
          <p>Aboriosam inventore dolorem inventore nam est esse. Aperiam voluptatem nisi molestias laborum ut. Porro dignissimos eum. Tempore dolores minus unde est voluptatum incidunt ut aperiam.</p>
          <p>Et dolore blanditiis officiis non quod id possimus. Optio non commodi alias sint culpa sapiente nihil ipsa magnam. Qui eum alias provident omnis incidunt aut. Eius et officia corrupti omnis error vel quia omnis velit. In qui debitis autem aperiam voluptates unde sunt et facilis.</p>
        </div>
      </div>
      <div className="col-md-6">
        <img src="https://bootstrapmade.com/demo/templates/TheEvent/assets/img/speakers/1.jpg" alt="Speaker 1" className="img-fluid" />
      </div>
      
    </div>
  </div>
</section>
    
<Footer/>
    
    
    
    </>
  )
}

export default Organizerdetail