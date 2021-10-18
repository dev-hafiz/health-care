import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import SingleDetail from '../SingleDetail/SingleDetail';
import './ServiceDetail.css';

export const ServiceDetail = () => {
     const {serviceId} = useParams()
     const [details, setSetails] = useState([])
     

     useEffect(()=>{
          fetch('/healthService.json')
          .then( res => res.json())
          .then(data => setSetails(data.filter(el => el.id == serviceId)))
     },[])

     // const datailFilter = 
     // console.log(datailFilter)
     return (
          <div className="container my-5">
          <div>
          <h2 className="service-title">Detail Service</h2>

          </div>
               <div>
                 {
                    details.map(detail => <SingleDetail
                    key={detail.id}
                    detail={detail}
                     />)
                 }   
               </div>
               
          </div>
     )
}
