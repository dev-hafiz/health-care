import React from 'react';
import './NewsCart.css';


const NewsCart = ({newsfeed}) => {
     const {name, detail, stage, date } = newsfeed  || {}
     return (
          <div className="news-cart col-lg-4">
               <h3 className="cart-title">{name}</h3>
               <p className="cart-para">{detail}</p>
               <hr />
               <div className="d-flex">
                    <h5 ><i class="far cart-icon fa-user"></i> {stage}</h5>
                    <h5 className="ms-4"> <i class="fas cart-icon fa-calendar-week"></i> {date}</h5>
               </div>
          </div>
     );
};

export default NewsCart;