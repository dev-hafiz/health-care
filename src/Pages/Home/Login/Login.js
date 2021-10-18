import React from 'react';
import './Login.css'
import loginImg from '../../../images-medilife/loginImg.jpg';
import { Link } from 'react-router-dom';


const Login = () => {
     return (
          <div className="registration-area d-flex align-items-center">
               <div className="container my-5 mt-5">
                    <div className="row my-5">
                         <div className="col-lg-5 col-md-6 col-12">
                              <div className="auth-div">
                              <h3 className="text-pri-reg">Login Please</h3>
                              <div className="input-filed">
                                   <input type="email" name="" placeholder="Enter your email" id="" />
                                   <br />
                                   <input type="password" name="" placeholder="Enter password" id="" />
                                   <br />
                                   <button type="submit" className="btn-register-pri">Login</button>

                                   <p className="toggle-text">Don't have an account <Link to="/register">Register</Link></p>
                              </div>
                              <div>
                                   <br />
                                   <br />
                                   <button className="sign-btn"><i class="fab fa-google"></i> Google SignIn</button>
                                   <button className="sign-btn"><i class="fab fa-github"></i> Github SignIn</button>
                              </div>
                              </div>
                         </div>
                         <div className="col-lg-7 col-md-6 col-12">
                              <img className="img-fluid" src={loginImg} alt="" />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;