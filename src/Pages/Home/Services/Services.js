import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

     //Health services state
     const [services, setServices] = useState([])

     //Loadt Health data
     useEffect( ()=>{
          fetch('/healthService.json')
          .then(res => res.json())
          .then(data => setServices(data))
     },[])
     

     return (
          <div>
              <div className="container my-5 py-5">
                 <div className="health-services news-text">
                   <h2>Health Services</h2> 
                   <p>A voice of illness patient</p>
                 </div>
                 <div className="row">
                    {
                         services.map(service => <Service
                         key={service.id}
                         service={service}
                          />)
                    }
                 </div>
              </div>
          </div>
     );
};

export default Services;