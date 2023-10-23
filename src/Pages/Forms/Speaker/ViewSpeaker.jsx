import React from 'react'
import { useEffect, useState } from 'react';
import { getSpeakers, deleteSpeaker } from '../../../api/Api';
import { Link } from 'react-router-dom';
import JsPDF from 'jspdf';


const generatePDF = () => {

  const report = new JsPDF('portrait','pt','a4','14');
  report.html(document.querySelector('#report')).then(() => {
    report.setFontSize(12);

      report.save('speaker-details.pdf');
  });}

const ViewSpeaker = () => {

  const [speakers, setSpeakers] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState(null);

  useEffect(() => {
    getAllSpeakers();
  }, []);

  const getAllSpeakers = async () => {
    let response = await getSpeakers();
    setSpeakers(response.data);

  }
  const deleteSpeakerDetails = async (id) => {
    alert('Data Deleted successfully');
    await deleteSpeaker(id);
    getAllSpeakers();

  }


  const openModal = (rowData) => {
    setSelectedRowData(rowData);
  };

  const closeModal = () => {
    setSelectedRowData(null);
  };



  return (
    <>
      <div className="mt-4">
        <p>Total Speakers: {speakers.length}</p>
        <table className="table table-striped table-hover">
          <thead className='table-success'>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Preview</th>
              <th scope='col'>Update</th>
              <th scopoe="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              speakers.map((speaker, index) => (
                <tr key={speaker._id}>
                  <td style={{color:'rgb(13,110,253)'}}>{index + 1}</td>
                  <td>{speaker._id}</td>
                  <td>{speaker.speakerfullname}</td>
                  <td>{speaker.speakeremail}</td>
                  <td>{speaker.speakerphonenumber}</td>     
                  <td><button type='button' className='btn btn-outline-success' onClick={() => openModal(speaker)}>Preview</button></td>
                  <td>
                    <Link to={`/dashboard/edit-speaker/${speaker._id}`}><button className='btn btn-primary ' style={{ marginRight: 5 }}>Edit</button></Link>
                  </td>
                  <td><button type='button' className='btn btn-danger' onClick={() => deleteSpeakerDetails(speaker._id)}>Delete</button></td>
                </tr>
              ))
            }


          </tbody>
        </table>
        {selectedRowData && (
          <div className="modal " style={{ display: 'block' }}>
            <div class="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Speaker Details</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                </div>
                <div className="modal-body" id='report'>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <td><img src={selectedRowData.speakerimage} width={200} alt="speaker" /></td>
                      </tr>
                      <tr>

                        <th>ID</th>
                        <th>{selectedRowData._id}</th>
                      </tr>

                    </thead>
                    <tbody>

                      <tr>
                        <td>Full Name</td>
                        <td>{selectedRowData.speakerfullname}</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>  {selectedRowData.speakeremail}</td>
                      </tr>
                      <tr>
                        <td>Contact Number</td>
                        <td>{selectedRowData.speakerphonenumber}</td>
                      </tr>
                      <tr>
                        <td>Designation</td>
                        <td>{selectedRowData.designation}</td>
                      </tr>
                      <tr>
                        <td>DepartMent</td>
                        <td>{selectedRowData.department}</td>
                      </tr>
                      <tr>
                        <td>Affilation</td>
                        <td>{selectedRowData.affilation}</td>
                      </tr>
                      <tr>
                        <td>Academic</td>
                        <td>{selectedRowData.academic}</td>
                      </tr>
                      <tr>
                        <td>Key Points</td>
                        <td>{selectedRowData.speakerkeypoints}</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>{selectedRowData.speakeraddress}</td>
                      </tr>
                      <tr>
                        <td>Country</td>
                        <td>{selectedRowData.speakercountry}</td>
                      </tr>                
                      <tr>
                        <td>State</td>
                        <td>{selectedRowData.speakerstate}</td>
                      </tr>
                      <tr>
                        <td>City</td>
                        <td>{selectedRowData.speakercity}</td>
                      </tr>
                      <tr>
                        <td>PinCode</td>
                        <td>{selectedRowData.speakerpincode}</td>
                      </tr>     
                      <tr>
                        <td>Bio</td>
                        <td style={{textAlign:'justify'}}>{selectedRowData.bio}</td>
                      </tr>    
                      <tr>
                        <td>Entry Date</td>
                        <td>{new Date(selectedRowData.createdAt).toDateString()}</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                  <button onClick={generatePDF} type="button" className="btn btn-outline-primary">Export PDF</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>


    </>
  )
}

export default ViewSpeaker