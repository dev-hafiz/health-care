import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';


const Service = ({service}) => {
     const {id, name, img,activeHour, description } = service || {};
     return (
          <div className="col-lg-4 col-md-6 service-Cart ">
               <div className="cart-img ">
                    <img  className="img-fluid " src={img} alt="" />
               </div>
               <div className="service-body">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <Link to={`/service/${id}`}>
                    <button className="book-btn">Book add</button>
                    </Link>
               </div>
          </div>
     );
};

export default Service;