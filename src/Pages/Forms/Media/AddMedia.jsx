import React, { useState } from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import axios from 'axios'
import { URL } from '../../../api/Api'



const AddMedia = () => {

  const [file, setFile] = useState()

  const handleUpload=(e)=>{
    const formdata = new FormData()
    formdata.append('file',file)
    axios.post("http://localhost:8000/upload-media",formdata )
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  
  return (
    <>
      <div className="d-flex">
        <Sidebar/>
      <div className="container">
        <h3 className='text-center mt-4 mb-4'>All Image Data </h3>
      <div className="col-md-6 mx-auto">
        <input type='file' onChange={e => setFile(e.target.files[0])}/>
        <button type='button' className='btn btn-outline-primary' onClick={handleUpload}>Upload Image</button>
      </div>
      </div>
      </div>
      
    </>
  )
}

export default AddMedia
