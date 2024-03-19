import React, { useEffect, useState } from "react";
import "./global.c12ee4b9163e7c1766c1.css";
// import "./index.5165d336f6d347ebc651.css";
import Swiper from "swiper";
import 'swiper/swiper-bundle.css';
import { useGSAP } from "@gsap/react";
import 'swiper/css/pagination';
import Navigation from "../../components/Navigation/Navigation.js";

// GSAP
import Carousel from "../../components/Carousel/Carousel.jsx";
import Companies from "../../components/Companies/Companies.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import RecognitionElements from "../../components/RecognitionElements/RecognitionElements.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function App() {
  
    
  return (
    <>
        <Navigation/>
        <div id="page-wrapper">
          <main>
            <Carousel/>
            <Companies/>
            <Testimonials/>
            <RecognitionElements/>
          </main>
          <Footer/>
        </div>
      
    </>
  );
}

export default App;