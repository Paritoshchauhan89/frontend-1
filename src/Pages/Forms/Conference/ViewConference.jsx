import React from 'react'
import { useEffect, useState } from 'react';
import {getNewss, deleteNews}  from '../../../api/Api';
import { Link} from 'react-router-dom';

const ViewConference = () => {


  const [newss, setNewss]= useState ([]);


  useEffect(()=>{
    getAllNewss();
  },[]);

  const getAllNewss = async()=>{
    let response =  await getNewss();
    setNewss(response.data);
 
   }
   const deleteNewsDetails=async(id)=>{
    await deleteNews(id);
    getAllNewss();


  }
  
   
  return (
    <>
    <div className="mt-4">
<table className="table table-fixed" style={{ textAlign:'justify'}} >
  <thead>
    <tr>
      <th scope="col" >ID</th>
      <th scope="col ">Title</th>
      <th scope="col ">Conference Image</th>
      <th scope="col">Conference Start Date</th>
      <th scope="col">Conference End Date</th>
      <th scope="col">decription1</th>
      <th scope="col">description2</th>
      
      <th scope='col'>Update</th>
      <th scopoe="col">Delete</th>
    </tr>
  </thead>
  <tbody style={{overflow:'auto'}}>
{
  newss.map(news=>(
    <tr  key={news._id} >
      <td>{news._id}</td>
      <td>{news.title}</td>
      <td>{news.image}</td>
      <td>{news.keypoints}</td>
      <td>{news.description1}</td>
      <td>{news.description2}</td>
     
      <td>
      <Link to={`/dashboard/edit-news/${news._id}`}><button className='btn btn-primary' style={{marginRight:5}}>Edit</button></Link>
        </td>
      <td><button type='button' className='btn btn-danger' onClick={()=>deleteNewsDetails(news._id)}>Delete</button></td>
      </tr>
  ))
}
   
   
  </tbody>
</table>
</div>
    
    
    </>
  )
}

export default ViewConference