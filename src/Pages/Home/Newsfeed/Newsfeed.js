import React, { useEffect, useState } from 'react';
import NewsCart from '../NewsCart/NewsCart';
import './Newsfedd.css';


const Newsfeed = () => {
     //News Feeds State and Load
     const [newsfeeds, setNewsfeeds] = useState([]);
     useEffect(()=>{
          fetch('/newsfeed.json')
          .then( res => res.json())
          .then(data => setNewsfeeds(data))
     },[])
     return (
          <div>
               <div className="container">
                    <h1 className="news-text mb-5 fw-bold">News Feeds</h1>
                    <div className="row my-5">
                         {
                              newsfeeds.map(newsfeed => <NewsCart 
                              key={newsfeed}
                              newsfeed={newsfeed}
                                />)
                         }
                    </div>
                    
               </div>
          </div>
     );
};

export default Newsfeed;