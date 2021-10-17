import React from 'react';
import { Carousel } from 'react-bootstrap';
import './TopBanner.css';
import bannerOne from '../../../images-medilife/banner1.jpg';
import bannerTwo from '../../../images-medilife/banner2.jpg';
import bannerThree from '../../../images-medilife/banner3.jpg';

const TopBanner = () => {
     return (
          <Carousel fade>
               <Carousel.Item>
               <img
                    className="d-block w-100"
                    src={bannerOne}
                    alt="First slide"
               />
               <Carousel.Caption className="Carosel-text">
                    <h1>TAKE DOCTOR ADVICE </h1>
                    <p>Medicines cure diseases but only doctors can cure patients</p>
               </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
               <img
                    className="d-block w-100"
                    src={bannerTwo}
                    alt="Second slide"
               />

               <Carousel.Caption className="Carosel-text">
                    <h1>NEED CONTINUE REST</h1>
                    <p>Everything that irritates us about others can lead us to an understanding of ourselves</p>
               </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
               <img
                    className="d-block w-100"
                    src={bannerThree}
                    alt="Third slide"
               />

               <Carousel.Caption className="Carosel-text">
                    <h1>AVOID SOME BAD HABITS</h1>
                    <p>There are only two sorts of doctors: those who practice with their brains, and those who practice with their tongues.</p>
               </Carousel.Caption>
               </Carousel.Item>
          </Carousel>
     );
};

export default TopBanner;