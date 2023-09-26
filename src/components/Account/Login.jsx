import React,{useEffect, useState} from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { URL } from '../../api/Api'
import { useDispatch } from "react-redux";
import { authActions } from "../../Pages/redux/store";

const Login = () => {



  const localhost=URL;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //state
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  //handle input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //form handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${localhost}/login`, {
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        localStorage.setItem("userId", data?.user._id);
        dispatch(authActions.login());
        alert("User login Successfully");
        navigate("/dashboard/add-sponser");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
  
  <section className="vh-100 bg-image" style={{backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: 15}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Login Page</h2>
              <form onSubmit={handleSubmit}>
              
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>

                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" placeholder='Enter email' name='email' value={inputs.email} onChange={handleChange}/>
                </div>
                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg" placeholder='Enter password' name='password' value={inputs.password} onChange={handleChange}/>
                  <label className="form-label" htmlFor="form3Example4cg">Password</label>
                </div>
               
             
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" >Login</button>
                </div>
                {/* <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/register" className="fw-bold text-body"><u>Register here</u></Link></p> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}

export default Login