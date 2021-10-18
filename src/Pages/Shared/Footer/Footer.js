import React from 'react';
import './Footer.css';
import mediLogo from '../../../images-medilife/logonav.png';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
     return (
          <div className="footer-design">
               <div className="container ">
               <div className="row mb-5">
                    <div className="col-lg-3 col-md-6 col-12 first-col ">
                        <div className="d-flex  align-items-center">
                        <div className="log-bottom">
                        <img width="90" src={mediLogo} alt="" />
                        </div> 
                        <h2 className="logo-text">Med<span className="i-style">i</span> Life</h2>
                        </div>
                        <p className="about-text">
                        Expatriate Health Insurance. International Medical Insurance for Expatriates. Designed for those living and working abroad.
                        </p>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-center  col-md-6 col-12 second-col">
                       <div>
                       <h3 className="primary-text">Explore</h3>
                        <ul>
                             <li><Link  to="/home">Home </Link></li>
                             <li><Link to="/services">Services</Link></li>
                             <li><Link to="/doctors">Doctor's</Link></li>
                             <li><Link to="#">Stretagy </Link></li>
                        </ul>
                       </div>
                    </div>
                    <div className="col-lg-3  col-md-6 col-12 third-col">
                         <h3  className="primary-text">Services</h3>
                           <ul>
                             <li><Link  to="#">Birthing Care</Link></li>
                             <li><Link to="#">Heart Care</Link></li>
                             <li><Link to="#">Emergencies</Link></li>
                             <li><Link to="#">Family medicine</Link></li>
                             <li><Link to="#">Cancer Care</Link></li>
                        </ul>

                    </div>
                    <div className="col-lg-3 col-md-6 col-12 fourth-col">
                    <h3 className="primary-text">Info Contact | Email</h3>
                    <p className="info-text">Stay in the know with news and promotions</p>
                    <div className="info-input">
                         <input type="text" placeholder="Enter Your Email" />
                         <br />
                         <textarea name="" id="" placeholder="Your massage" ></textarea>
                         <br />
                         <button type="submit" className="btn-Submit">Submit</button>
                    </div>
                    </div>
               </div>
               <hr />

               <div className="row d-flex justify-content-between">
                    <div className="col-lg-6 col-md-6 col-12">
                        <p>Copyright © 2021 All rights reserved</p> 
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                         <p>Privacy | Term of Use</p>
                    </div>
               </div>
               </div>
          </div>
     );
};

export default Footer;