import React from 'react';
import errorServer from '../../../src/images-medilife/404.jpg';

const NotFound = () => {
     return (
          <div className="container text-center">
               <img src={errorServer} alt="" />
          </div>
     );
};

export default NotFound;