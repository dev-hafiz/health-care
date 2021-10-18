import React, { useEffect, useState } from 'react';
import './Doctors.css';
import DictorCeo from '../../../images-medilife/ceo.jpg';
import DoctorAdvice from '../DoctorAdvice/DoctorAdvice';
const Doctors = () => {

     const [docAdvices, setDocAdvices] = useState([])
     useEffect( ()=>{
          fetch('/doctorTalks.json')
          .then (res => res.json())
          .then (data => setDocAdvices(data))
     }, [])
     return (
          <div>
               <div className="container my-5">
                     <div className="row">
                         <div className="col-lg-6 col-md-6 col-12">
                              <img width="100%" src={DictorCeo} alt="" />
                         </div>
                         <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center">
                              <div>
                                   <h2 className="ms-5">DOCTOR'S Talk</h2>
                                   <p className="doc-talk">Telehealth and telemedicine are two different types of online health care services. Telemedicine refers specifically to online doctor visits, while telehealth also includes health-related education services like diabetes management or nutrition courses and health-related training.</p>
                              </div>
                         </div>
                     </div>

                     <div>
                     <div className="text-center my-5 pt-5">
                          <h2 className="doctor-title">-Our Doctor's includes you and-</h2>
                     </div>
                     <div className="row my-5">
                        {
                           docAdvices.map(docAdvice =><DoctorAdvice
                              key={docAdvice.id}
                              docAdvice={docAdvice}

                           />)
                        }
                     </div>
                     </div>
               </div>
          </div>
     );
};

export default Doctors;