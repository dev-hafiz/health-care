import React from 'react';
import Newsfeed from '../Newsfeed/Newsfeed';
import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';
import TopCart from '../TopCart/TopCart';
import './Home.css';

const Home = () => {
     return (
          <div>
              <TopBanner/>
              <TopCart/>
              <Services/>
              <Newsfeed/>
          </div>
     );
};

export default Home;