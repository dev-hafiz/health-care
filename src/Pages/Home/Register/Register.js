import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import registerImg from '../../../images-medilife/loginImg.jpg';

const Register = () => {
     return (
          <div className="registration-area d-flex align-items-center">
               <div className="container my-5 mt-5">
                    <div className="row my-5">
                         <div className="col-lg-5 col-md-6 col-12">
                              <div className="auth-div">
                              <h3 className="text-pri-reg">Login Register</h3>
                              <div className="input-filed">
                                   <input type="email" name="" placeholder="Enter your email" id="" />
                                   <br />
                                   <input type="password" name="" placeholder="Enter password" id="" />
                                   <br />
                                   <button type="submit" className="btn-register-pri">Register</button>

                                   <p className="toggle-text">Already  have an account ? <Link to="/login">Login</Link></p>
                              </div>
                              
                              </div>
                         </div>
                         <div className="col-lg-7 col-md-6 col-12">
                              <img className="img-fluid" src={registerImg} alt="" />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Register;