import React, { useState } from 'react';
import './Login.css'
import loginImg from '../../../images-medilife/loginImg.jpg';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {

     const {googleSignInUser, githubUserSignIn, signInUserWithEmail, error} = useAuth()

     //Email & Password state
     const [email, setEmail] = useState("")
     
     const [password, setPassword] = useState("")

     //Email Onbluer handler
     const emailChangedHandler = e =>{
          setEmail(e.target.value)
          e.target.value="";
     }
     //Password onblur handler
     const passwordChangedHandler = e =>{
          setPassword(e.target.value)
          e.target.value="";
     }
     //Handler Sign in 
     const handlerSignIn = () =>{
          signInUserWithEmail(email, password)
     }

     return (
          <div className="registration-area d-flex align-items-center">
               <div className="container my-5 mt-5">
                    <div className="row my-5">
                         <div className="col-lg-5 col-md-6 col-12">
                              <div className="auth-div">
                              <h3 className="text-pri-reg">Login Please</h3>
                              <div className="input-filed">
                                   <input onBlur={emailChangedHandler} type="email" name="" placeholder="Enter your email" id="" required />
                                   <br />
                                   <input onBlur={passwordChangedHandler} type="password" name="" placeholder="6+ password" id="" required />
                                   <br />
                                   <p className="text-danger">{error}</p>
                                   <button type="submit"
                                   onClick={handlerSignIn}
                                    className="btn-register-pri">Login</button>

                                   <p className="toggle-text">Don't have an account <Link to="/register">Register</Link></p>
                              </div>
                              <div>
                                   <br />
                                   <br />
                                   <button onClick={googleSignInUser} className="sign-btn"><i className="fab fa-google"></i> Google SignIn</button>
                                   <button onClick={githubUserSignIn} className="sign-btn"><i className="fab fa-github"></i> Github SignIn</button>
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