import React, {useState,useEffect} from 'react'
import '../Speakers.css'
import Navbar from '../../../components/Header/Navbar'
import Footer from '../../../components/Footer/Footer'
import {useParams} from 'react-router-dom'
import {getSpeaker } from '../../../api/Api' 
import { Link } from 'react-router-dom'


const SpeakerDetaiil = () => {



  const [speaker,setSpeaker]=useState({});
  const {id} = useParams();

useEffect(()=>{
loadSpeakerDetails();
},[])

const loadSpeakerDetails= async()=>{
const response = await  getSpeaker(id);
setSpeaker(response.data);
}
  return (
    <>
    <Navbar/>
    <section id="speakers-details">
  <div className="container">
    <div className="section-header text-center mb-4">
      <h2>Speaker Details</h2>
    </div>
    <div className="row">
      <div className="col-md-6">
        <img src={speaker.speakerimage} alt="Speaker 1" className="img-fluid" />
      </div>
      <div className="col-md-6">
        <div className="details">
          <h2>{speaker.speakerfullname}</h2>
          <h5>{speaker.speakeremail}</h5>
          <div className="social">
            <a href><i className="bi bi-twitter" /></a>
            <a href><i className="bi bi-facebook" /></a>
            <a href><i className="bi bi-instagram" /></a>
            <Link to={speaker.profileurl}><i className="bi bi-linkedin" /></Link>
          </div>
          <span><b>Designation:</b> {speaker.designation} <b>Department: </b>({speaker.department})</span>
          <p><b>{speaker.speakerkeypoints}</b></p>
          <p>{speaker.bio}</p>
          <p>Aboriosam inventore dolorem inventore nam est esse. Aperiam voluptatem nisi molestias laborum ut. Porro dignissimos eum. Tempore dolores minus unde est voluptatum incidunt ut aperiam.</p>
          <p>Et dolore blanditiis officiis non quod id possimus. Optio non commodi alias sint culpa sapiente nihil ipsa magnam. Qui eum alias provident omnis incidunt aut. Eius et officia corrupti omnis error vel quia omnis velit. In qui debitis autem aperiam voluptates unde sunt et facilis.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>

    </>
  )
}

export default SpeakerDetaiil