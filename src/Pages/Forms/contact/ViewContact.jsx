import React from 'react'
import { useEffect, useState } from 'react';
import {getContacts, deleteContact}  from '../../../api/Api';
import Sidebar from '../../../components/Sidebar/Sidebar';

const ViewContact = () => {



  const [contacts, setContacts]= useState ([]);

  useEffect(()=>{
    getAllContacts();
  },[]);

  const getAllContacts = async()=>{
    let response =  await getContacts();
    setContacts(response.data);
 
   }
   const deleteContactDetails=async(id)=>{
    await deleteContact(id);
    getAllContacts();

  }
  
   
  return (
    <>
   <div className="d-flex">
    <Sidebar/>
   <div className="mt-5 container"> <h3 className='text-center mb-4'>All Contact us Data</h3>
<table className="table border " style={{overflow:"scroll"}} >
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Full Name</th>
      <th scope="col">Email </th>
      <th scope='col'>Subject</th>
      <th scopoe="col">Message</th>
      <th scopoe="col">Entry Date</th>
      <th scopoe="col">Delete</th>
    </tr>
  </thead>
  <tbody>
{
  contacts.map(contact=>(
    <tr key={contact._id}>
      <td>{contact._id}</td>
      <td>{contact.user_name}</td>
      <td>{contact.user_email}</td>
      <td>{contact.subject}</td>
      <td>{contact.message}</td>
      <td>{new Date(contact.createdAt).toDateString()}</td>
      
      <td><button type='button' className='btn btn-danger' onClick={()=>deleteContactDetails(contact._id)}>Delete</button></td>
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

export default ViewContact