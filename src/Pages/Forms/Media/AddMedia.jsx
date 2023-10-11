import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../../../components/Sidebar/Sidebar'
import {URL} from '../../../api/Api'

function ImageUpload() {
  const [image, setImage] = useState(null);

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);

    try {
      await axios.post(`${URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Handle success or redirect as needed
    } catch (error) {
      // Handle errors
    }
  };

  return (
    <div className="d-flex">
<Sidebar/>
      <div className='mx-5'>
      <form onSubmit={handleImageUpload}>
        <input
          type="file"
          accept=".jpg, .jpeg, .png" 
          name='mainimage'
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Upload Image</button>
      </form>
    </div>
    </div>
  );
}

export default ImageUpload;
