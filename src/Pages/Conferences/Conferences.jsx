import React from 'react'
import './conferences.css'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

const Conferences = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className='text-center m-4'>All Conferences</h1>
        <p className='text-center mt-4 mb-4' style={{ fontSize: 16, textAlign: 'center' }}>At the heart of STM Conferences is the celebration of knowledge. Our conferences serve as vibrant hubs where researchers, scholars, professionals, and enthusiasts converge to deliberate upon the latest advancements in their respective fields. With a rich tapestry of themes and subjects, these gatherings provide a platform for intellectual growth, ensuring that innovation and insights are nurtured to their fullest potential.</p>
      </div>
      <div className="container">
        <div className="top border" style={{ display: 'flex' }}>
          <div className="img col-md-4 p-4">
            <img src="https://thebalisun.com/wp-content/uploads/2021/03/Bali-To-Host-G20-Summit-In-2022-scaled.jpg" width="300px" height={250} alt />
          </div>
          <div className="col-md-8">
            <div class="d-flex justify-content-end">
              <button type="button" className='btn btn-outline-danger justify-content-end' style={{ width: '200px' }}> End Date: 24,Jun, 2024</button>
            </div>
            <table class="table table-striped mt-4">

              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Conference Title:</td>
                  <td>||</td>
                  <td>IMPortant  discussion</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Shared Url</td>
                  <td>||</td>
                  <td>Url</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Address</td>
                  <td>||</td>
                  <td>Location</td>

                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Email</td>
                  <td>||</td>
                  <td>Test@1gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Address</td>
                  <td>||</td>
                  <td>Location</td>
                </tr>
              </tbody>
            </table>




            <div className="d-flex justify-content-between">
              <span className='mt-4 fw-semibold'>Last date of joining :</span><Link to='/conference-enrollment' ><button type='button' className='btn btn-outline-primary' style={{ width: '150px' }}>Join Now</button></Link>
            </div>
            <div className="d-flex justify-content-between">
              <span className='mt-4 fw-semibold'>Last date of Submission :</span><button type='button' className='btn btn-outline-success' style={{ width: '150px' }}>Submit</button>
            </div>

          </div>

        </div>
        <hr />
        <div className="bottom col-md-12">
          <span className='fw-semibold'>Key Points :</span> <p className='fst-normal'>Radio, Tv , Mobile, Lcd </p>
          <span className='fw-semibold' >About Conference ||</span>
          <p className='fst-italic'>At the heart of STM Conferences is the celebration of knowledge. Our conferences serve as vibrant hubs where researchers, scholars, professionals, and enthusiasts converge to deliberate upon the latest advancements in their respective fields. With a rich tapestry of themes and subjects, these gatherings provide a platform for intellectual growth, ensuring that innovation and insights are nurtured to their fullest potential.</p>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Conferences