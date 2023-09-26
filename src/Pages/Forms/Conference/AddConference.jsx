import React from 'react'
import { Link } from 'react-router-dom'

const AddConference = () => {
  return (
    <>
      <div className="d-flex">
   <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sticky" style={{width: 280, height:'auto'}}>
  <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    <svg className="bi pe-none me-2" width={40} height={32}><use xlinkto="#bootstrap" /></svg>
    <span className="fs-4">Welcome</span>
  </Link>
  <hr />
  <ul className="nav nav-pills flex-column mb-auto">
    <li className="nav-item">
      <Link to="/" className="nav-link active" aria-current="page">
        Home
      </Link>
    </li>
    <li className="nav-item mt-2">
      <Link to="/" className="nav-link active" aria-current="page">
        ADD speaker
      </Link>
    </li>
    <li className="nav-item mt-2 mb-2">
      <Link to="/add-sponser" className="nav-link active" aria-current="page">
        Add sponser
      </Link>
    </li>
    <li className="nav-item mt-2 mb-2">
      <Link to="/all-sponser" className="nav-link active" aria-current="page">
        Add sponser
      </Link>
    </li>
  
  </ul>
  <hr />
  <div className="dropdown">
    <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      <img src="https://github.com/mdo.png" alt width={32} height={32} className="rounded-circle me-2" />
      <strong>mdo</strong>
    </Link>
    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
      <li><Link className="dropdown-item" to="#">New project...</Link></li>
      <li><Link className="dropdown-item" to="#">Settings</Link></li>
      <li><Link className="dropdown-item" to="#">Profile</Link></li>
      <li><hr className="dropdown-divider" /></li>
      <li><Link className="dropdown-item" to="#">Sign out</Link></li>
    </ul>
  </div>
</div>
<form>
   <h1 style={{textAlign: 'center'}}><strong> Conference Form</strong></h1>
    <div className="form-group">
       <label htmlFor="inputTitle">Title</label>
       <input type="text" className="form-control" id="inputTitle" placeholder />
      </div>
    <div className="form-row">
       <div className="form-group col-md-6">
          <label htmlFor="inputDate">Start Date</label>
          <input type="date" defaultValue="2017-06-01" className="form-control" id="inputDate" placeholder />
         </div>
       <div className="form-group col-md-6">
          <label htmlFor="inputDate">End Date</label>
          <input type="date" defaultValue="2017-06-01" className="form-control" id="inputDate" placeholder />
         </div>
      </div>
    <div className="form-group">
       <label htmlFor="inputTime">Conference Timing</label>
       <input type="time" className="form-control" id="inputTime" placeholder />
      </div>
    <div className="form-group">
       <label htmlFor="inputEmail">Speakers Email</label>
       <select type="email" className="form-control" id="inputEmail" placeholder>
          <option type="email">abc@gmail.com</option>
          <option type="email">abc@gmail.com</option>
          <option type="email">abc@gmail.com</option>
          <option type="email">abc@gmail.com</option>
          <option type="email">abc@gmail.com</option>
          <option type="email">abc@gmail.com</option>
         </select>
      </div>
    <div className="form-group">
       <label htmlFor="inputName">Venue Name</label>
       <select type="text" className="form-control" id="inputName" placeholder>
          <option type="text">jaipur</option>
          <option type="text">jaipur</option>
          <option type="text">jaipur</option>
          <option type="text">jaipur</option>
          <option type="text">jaipur</option>
          <option type="text">jaipur</option>
        </select>
      </div>
    <div className="form-group">
       <label htmlFor="inputName">Sponsor</label>
       <select type="text" className="form-control" id="inputName" placeholder>
          <option type="text">jaipur</option>
          <option type="text">jaipur</option>
          <option type="text">jaipur</option>
          <option type="text">jaipur</option>
          <option type="text">jaipur</option>
          <option type="text">jaipur</option>
        </select>
      </div>
     <div className="form-group">
        <label htmlFor="exampleFormControlTextarea2">Description</label>
        <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows={3} defaultValue={""} />
       </div>
     <div className="form-group">
        <fieldset>
           <label>Select a Conference Mode</label>
           <div>
              <input type="radio" id="online" name="drone" defaultValue="online" />
              <label htmlFor="online">Online</label>
             </div>
          
           <div>
              <input type="radio" id="offline" name="drone" defaultValue="offline" />
              <label htmlFor="offline">Offline</label>
             </div>
          </fieldset>
       </div>
  <div className="form-group">
        <label htmlFor="inputLink">Enrollment Link</label>
        <input type="url" className="form-control" id="inputLink" placeholder="https://example.com" />
       </div>
     <div className="form-group">
        <label htmlFor="inputLink">Manuscript Submission Link</label>
        <input type="url" className="form-control" id="inputLink" placeholder="https://example.com" />
       </div>
     <div className="form-group">
        <label htmlFor="inputstPoints">Key Points</label>
        <input type="text" className="form-control" id="inputstPoints" placeholder />
       </div>
     <div className="form-row">
        <div className="form-group col-md-6">
           <label htmlFor="inputDate"> Manuscript Submission Start Date</label>
           <input type="date" defaultValue="2017-06-01" className="form-control" id="inputDate" placeholder />
          </div>
        <div className="form-group col-md-6">
           <label htmlFor="inputDate">Manuscript Submission End Date</label>
           <input type="date" defaultValue="2017-06-01" className="form-control" id="inputDate" placeholder />
          </div>
        </div>
      <div className="form-group">
         <label htmlFor="inputLink">Feedback Link</label>
         <input type="url" className="form-control" id="inputLink" placeholder="https://example.com" />
        </div>
    <button type="submit" className="btn btn-primary">Submit</button>
   </form>


   </div>
 




    
    
    
    </>
  )
}

export default AddConference