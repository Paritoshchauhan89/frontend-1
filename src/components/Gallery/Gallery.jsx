import React from 'react'
import './gallery.css'

const Gallery = () => {
  return (
    <>
<div className="container">
<h2 className='text-center about' style={{marginTop:50, marginBottom:50, color: "#1d5818",fontSize:50}}><strong>Gallery</strong></h2>

<div id="carouselExampleControls" className="carousel carousel-dark slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="card-wrapper container-sm d-flex  justify-content-around">
        <div className="card  " style={{width: '18rem'}}>
          <img src="https://bootstrapmade.com/demo/templates/TheEvent/assets/img/gallery/8.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div><div className="card" style={{width: '18rem'}}>
          <img src="https://bootstrapmade.com/demo/templates/TheEvent/assets/img/gallery/8.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
        <div className="card" style={{width: '18rem'}}>
          <img src="https://bootstrapmade.com/demo/templates/TheEvent/assets/img/gallery/8.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="card-wrapper container-sm d-flex   justify-content-around">
        <div className="card  " style={{width: '18rem'}}>
          <img src="https://bootstrapmade.com/demo/templates/TheEvent/assets/img/gallery/8.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div><div className="card" style={{width: '18rem'}}>
          <img src="https://bootstrapmade.com/demo/templates/TheEvent/assets/img/gallery/8.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
        <div className="card" style={{width: '18rem'}}>
          <img src="https://bootstrapmade.com/demo/templates/TheEvent/assets/img/gallery/8.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="card-wrapper container-sm d-flex  justify-content-around">
        <div className="card " style={{width: '18rem'}}>
          <img src="https://bootstrapmade.com/demo/templates/TheEvent/assets/img/gallery/8.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
        <div className="card" style={{width: '18rem'}}>
          <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
        <div className="card" style={{width: '18rem'}}>
          <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
</div>

    
    </>
  )
}

export default Gallery