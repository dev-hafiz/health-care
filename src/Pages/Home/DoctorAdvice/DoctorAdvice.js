import React from 'react';
import './DoctorAdvice.css';

const DoctorAdvice = ({docAdvice}) => {
     const {title, des , icon} = docAdvice || {};
     return (
          <div className="col-lg-4 col-md-4 col-12">
              <div className="doc-Cart text-center d-flex">
                   <div>
                   <img className="img-fluid mb-3" src={icon} alt="" />
                   <h3>{title}</h3>
                   <p>{des}</p>
                   </div>
              </div> 
          </div>
     );
};

export default DoctorAdvice;