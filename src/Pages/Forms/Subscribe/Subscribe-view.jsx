import React from 'react'
import {useState,useEffect } from 'react';
import {getSubscribes}  from '../../../api/Api';
import Navbar from '../../../components/Header/Navbar';
import Sidebar from '../../../components/Sidebar/Sidebar';

const Subscribe = () => {

  const [subscribes, setSubscribes]= useState ([]);

  useEffect(()=>{
    getAllSubscribes();
  },[]);

  const getAllSubscribes = async()=>{
    let response =  await getSubscribes();
    setSubscribes(response.data);
 
   }

  
   
  return (
    <>
 <div className="d-flex">
    <Sidebar/>
 <div className="mt-4">
<table className="table" style={{overflow:"scroll"}} >
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
{
  subscribes.map(subscribe=>(
    <tr key={subscribe._id}>
      <td>{subscribe._id}</td>
     
      <td>{subscribe.email}</td>
     
     
    
      </tr>
  ))
}
   
   
  </tbody>
</table>
</div>
    
 </div>
    
    </>
  )
}

export default Subscribe