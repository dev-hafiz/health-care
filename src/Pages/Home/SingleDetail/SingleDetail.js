import React from 'react';
import './SingleDtail.css';

const SingleDetail = ({detail}) => {
     const {description, img, name, activeHour} = detail || {}
     return (
          <div className="row my-5">
           <div className="col-lg-6 align-items-center detail-box">
               <h3>{name}</h3>
               <p>{description}</p> 
               <span className="active-hr">-active- {activeHour}</span>
           </div>
           <div  className="col-lg-6">
               <img src={img} alt="" />
           </div>
          </div>
     );
};

export default SingleDetail;