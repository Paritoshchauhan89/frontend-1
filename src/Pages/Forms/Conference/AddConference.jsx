import React, { useState } from 'react'
import { addSponser } from '../../../api/Api'
import { useNavigate } from 'react-router-dom'
// import ViewSponser from './ViewConference.jsx'
import Sidebar from '../../../components/Sidebar/Sidebar'
import { Multiselect } from 'multiselect-react-dropdown'

const AddConference = () => {

  const data = [
    { name: 'test1@', id: 1 },
    { name: 'rest1@', id: 2 },
    { name: 'aest1@', id: 3 },
    { name: 'pest1@', id: 4 },
    { name: 'oest1@', id: 5 },
  ]




  const dafaultValue = {
    sponserfullname: '',
    sponseremail: '',
    sponserphonenumber: '',
    sponserimage: '',
    sponseraddress: '',
    sponsercountry: '',
    sponserstate: '',
    sponsercity: '',
    sponserpincode: '',
    sponserkeypoints: '',
    sponserabout: '',
  }
const [options] =useState(data);
  const [conference, setConference] = useState(dafaultValue);
  const navigate = useNavigate();

  // form value
  const onValueChange = (e) => {
    setConference({ ...conference, [e.target.name]: e.target.value });
  }

  const addConferenceDetails = async () => {
    await addSponser(conference);

    navigate('/add-conference');
  }
  return (
    <>

      <div className="d-flex">
        <Sidebar />

        <div className="container">
          <h4 className='text-center mt-4 mb-4'>Add Conference</h4>
          <form className="row g-3 needs-validation" noValidate>
           
            <div className="col-md-4">
              <label htmlFor="validationCustom01" className="form-label">Conference Title</label>
              <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Conference Title" required
                onChange={(e) => onValueChange(e)} name='conferencetitle'
              />

            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom02" className="form-label">Conference Start Date</label>
              <input type="datetime-local" className="form-control" id="validationCustom02" placeholder="Start Date" required onChange={(e) => onValueChange(e)} name='conferencestartdate' />
              
            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Conference End Date</label>
              <input type="datetime-local" className="form-control" id="validationCustom02" placeholder="End Date" required onChange={(e) => onValueChange(e)} name='conferencestartdate' />

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Conference Image</label>
              <input type="url" className="form-control" id="validationCustom02"  required onChange={(e) => onValueChange(e)} name='conferenceimage' />

            </div>

            <div className="col-md-4 ">
              <label htmlFor="validationCustom03" className="form-label">Enrollment Link</label>
              <input type="url" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='enrollmenturl' />

            </div>

            <div class="col-md-4">
              <label for="validationCustom04" class="form-label" multiple>Speakers Email</label>
              <Multiselect options={options} type='text' displayValue="speakersemail" name='speakersemail'></Multiselect>
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom02" className="form-label">Venue Name</label>
              <input type="text" className="form-control" id="validationCustom02"  required onChange={(e) => onValueChange(e)} name='venuename' />
              
            </div>
            <div class="col-md-4">
              <label for="validationCustom04" class="form-label" multiple>Sponsers name</label>
              <Multiselect  name='sponsersname'></Multiselect>
            </div>
            



            <label htmlFor="validationCustom03" className="form-label">Description</label>
            <textarea rows="5" cols="50" onChange={(e) => onValueChange(e)} name='conferenceabout' />
           
  
           
            <div className="col-md-3">
              <label htmlFor="validationCustom02" className="form-label">Manuscript Submission Date</label>
              <input type="date" className="form-control" id="validationCustom02" placeholder="Start Date" required onChange={(e) => onValueChange(e)} name='manuscriptstartdate' />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validation" className="form-label">Manuscript End Date</label>
              <input type="date" className="form-control" id="validationCustom02" placeholder="End Date" required onChange={(e) => onValueChange(e)} name='manuscriptenddate' />

            </div>
            <div className="col-md-6">
              <label htmlFor="validationCustom03" className="form-label">Type <strong>online & Offline</strong></label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='onlineoffline' />

            </div>
            <div className="col-md-12">
              <label htmlFor="validationCustom03" className="form-label">Key Points</label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='conferencekeypoints' />

            </div>
          
          

            

            <div className="col-12">
              <button className="btn btn-primary" type="submit" onClick={() => addConferenceDetails()}>Submit form</button>
            </div>
          </form>
          <h4 className='text-center'>All Conference Data</h4>
          {/* <div className="overflow-scroll">
 
<ViewSponser/>

</div> */}

        </div>

      </div>


    </>
  )
}

export default AddConference