import React, { useState, useEffect }  from 'react'
import {getEnrolls , deleteEnrolls}  from '../../../api/Api';
import Sidebar from '../../../components/Sidebar/Sidebar';

const ViewUsers = () => {
    const [details, setDetails]= useState ([]);

    useEffect(()=>{
      myFun();
    },[]);
  
    const myFun = async()=>{
      let response =  await getEnrolls();
      setDetails(response.data);
   
     }
     const deleteEnrollDetails=async(id)=>{
        await deleteEnrolls(id);
        myFun();
    
      }
  
  return (
    <>
<div className="d-flex">
    <Sidebar/>
 <div className="col-8 ">
 <div className="overflow-auto ">
    <h4 className='text-center mt-4 mb-4'>All Conference Enroll Users Data</h4>
  <table className="table border" >
 <thead>
    <tr>
    <th>Id</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>Contact Number</th>
    <th>Address</th>
    <th>Country</th>
    <th>State</th>
    <th>City</th>
    <th>Pin Code</th>
<th> Academic</th>
<th>Remark</th>
    <th>Created At</th>
    <th>Delete</th>
    </tr>
  </thead>

<tbody>
    {details.map((value, index)=>
    <tr>
        <td>{value._id}</td>
        <td>{value.firstname}</td>
        <td>{value.lastname}</td>
        <td>{value.email}</td>
        <td>{value.contactnumber}</td>
        <td>{value.address}</td>
        <td>{value.country}</td>
        <td>{value.state}</td>
        <td>{value.city}</td>
        <td>{value.pincode}</td>
        <td>{value.academic}</td>
        <td>{value.remark}</td>
        <td>{new Date(value.createdAt).toDateString()}</td>
<td><button type='button' className='btn btn-danger' onClick={()=>deleteEnrollDetails(value._id)}>Delete</button></td>
    </tr>
    )
    }
</tbody>
</table>
  </div>
 </div>

</div>
    </>
  )
}

export default ViewUsers