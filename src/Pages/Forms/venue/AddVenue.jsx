import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { addNews } from '../../../api/Api'
import ViewVenue from "./ViewVenue";
const AddVenue = () => {


   

    const dafaultValue = {

        title: '',
        image: '',
        keypoints: '',
        description1: '',
        description2: '',
    }

    const [news, setNews] = useState(dafaultValue);
    const navigate = useNavigate();

    // form value
    const onValueChange = (e) => {
        setNews({ ...news, [e.target.name]: e.target.value });
    }


    const addNewsDetails = async () => {
        await addNews(news);
        navigate('/add-news');
    }
    return (
        <>

            <div className="d-flex">
                <Sidebar />

                <div className="container mt-4 mb-3">
                    <h4 className='text-center mt-2 mb-2'>Add Venue</h4>
                    <form className="row g-3 needs-validation" noValidate>
                       
                        <div className="col-md-6">
                            <label htmlFor="validationCustom01" className="form-label">Name of Place</label>
                            <input type="text" className="form-control" id="validationCustom01" placeholder="venue place" required
                                onChange={(e) => onValueChange(e)} name='title'
                            />

                        </div>
                        <div className="col-md-6">
                            <label htmlFor="validationCustom01" className="form-label">Address Line</label>
                            <input type="text" className="form-control" id="validationCustom01" name='address' required
                                onChange={(e) => onValueChange(e)} 
                            />

                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Country</label>
                            <input type="text" className="form-control" id="validationCustom01" placeholder="country" required
                                onChange={(e) => onValueChange(e)} name='title'
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">State</label>
                            <input type="text" className="form-control" id="validationCustom01" placeholder="state" required
                                onChange={(e) => onValueChange(e)} name='title'
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">City</label>
                            <input type="text" className="form-control" id="validationCustom01" placeholder="city" required
                                onChange={(e) => onValueChange(e)} name='title'
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Pincode</label>
                            <input type="text" className="form-control" id="validationCustom01" placeholder="pincode" required
                                onChange={(e) => onValueChange(e)} name='title'
                            />
                        </div>

                      
                       <label><b className="h5 mt-2">Contact details</b><hr/></label>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Contact Person Name</label>
                            <input type="text" className="form-control" id="validationCustom01" placeholder="contactdetail" required
                                onChange={(e) => onValueChange(e)} name='contactpersonname'
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Contact Person Email</label>
                            <input type="text" className="form-control" id="validationCustom01" placeholder="Contact person  email" required
                                onChange={(e) => onValueChange(e)} name='contactpersonemail'
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Contact Person  Number</label>
                            <input type="tel"  pattern="[0-9]{10}" className="form-control" id="validationCustom01" placeholder="Entar only 10 digits" required
                                onChange={(e) => onValueChange(e)} name='contactpersonnumber'
                            />
                             <button  className="col-md-3" type="button" class="btn btn-primary">Add More</button>
                        </div>
                       
                        <hr/>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom02" className="form-label">Other Email</label>
                            <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Image url" required onChange={(e) => onValueChange(e)} name='image' />

                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom02" className="form-label">Other Contact Number</label>
                            <input type="tel" pattern="[0-9]{10}" className="form-control" id="validationCustom02" placeholder="Enter Image url" required onChange={(e) => onValueChange(e)} name='image' />

                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom02" className="form-label">Image Url</label>
                            <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Image url" required onChange={(e) => onValueChange(e)} name='image' />

                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom02" className="form-label">Venue Url</label>
                            <input type="text" className="form-control" id="validationCustom02" placeholder="venue url" required onChange={(e) => onValueChange(e)} name='image' />

                        </div>


                        <label htmlFor="validationCustom03" className="form-label">Description</label>
                        <textarea type='text' rows="4" cols="50" onChange={(e) => onValueChange(e)} name='description' />


                        <div className="col-12">
                            <button className="btn btn-primary" type="submit" onClick={() => addNewsDetails()}>Submit form</button>
                        </div>
                    </form>
                    <h4 className='text-center'>All Venue  Data</h4>
                    <div className="overflow-scroll">

                        <ViewVenue/>

                    </div>

                </div>

            </div>


        </>
    )
}

export default AddVenue