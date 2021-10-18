import React from 'react';
import './TopCart.css';
const TopCart = () => {
     return (
          <div>
              <div className="container ">
               <div className="row">
                     <div className="col-lg-4 col-md-6 col-12">
                         <div className="top-cart d-flex">
                              <div className="icon-cart">
                              <i className="fas fa-map-marker-alt"></i>
                              </div>
                              <div>
                                <h3>Location</h3>
                                <p>35 park Ave, NewYork, 1006</p>
                              </div>
                         </div> 
                     </div>
                     <div className="col-lg-4 col-md-6 col-12">
                     <div className="top-cart d-flex">
                              <div className="icon-cart">
                              <i className="fas fa-headphones-alt"></i>
                              </div>
                              <div>
                                <h3>Contact</h3>
                                <p>+1 (998) 004 768 00, NY 
                                <br />
                                healtcare@yahoo.com
                                </p>
                                
                              </div>
                         </div> 
                     </div>
                     <div className="col-lg-4 col-md-6 col-12">
                     <div className="top-cart d-flex">
                              <div className="icon-cart">
                              <i className="fas fa-user-clock"></i>
                              </div>
                              <div>
                                <h3>Active Hours</h3>
                                <p>Mon - Fri : 9:am - 4:pm
                                <br />
                                Saturday : 10:am - 2:pm
                                </p>
                              </div>
                         </div> 
                     </div>
               </div> 
              </div>
          </div>
     );
};

export default TopCart;