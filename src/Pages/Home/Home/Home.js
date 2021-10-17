import React from 'react';
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
          </div>
     );
};

export default Home;