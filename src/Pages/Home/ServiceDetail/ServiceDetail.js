import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export const ServiceDetail = () => {
     const {serviceId} = useParams()
     const [details, setSetails] = useState([])

     useEffect(()=>{
          fetch('/healthService.json')
          .then( res => res.json())
          .then(data => setSetails(data))
     },[])

     const datailFilter = details.filter(detail => detail.id == serviceId)
     console.log(datailFilter)
     return (
          <div>
               <h2>{datailFilter[0].name}</h2>
               <p> {datailFilter[0].description}</p>
               <h2> {datailFilter[0].name}</h2>
          </div>
     )
}
