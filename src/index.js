import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Carousel from './components/Carousel/Carousel';
import Companies from './components/Companies/Companies';
import Navigation from './components/Navigation/Navigation';
import RecognitionElements from './components/RecognitionElements/RecognitionElements';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import LeadershipHero from './components/LeadershipHero/LeadershipHero';
import LeadershipMain from './components/LeadershipMain/LeadershipMain';
import LeadershipMembers from './components/LeadershipMembers/LeadershipMembers';
import AboutHero from './components/AboutHero/AboutHero';
import AboutMain from './components/AboutMain/AboutMain';
import AboutLeadership from './components/AboutLeadership/AboutLeadership';
import AboutValues from './components/AboutValues/AboutValues';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Carousel/> */}
    {/* <Companies/> */}
    {/* <Navigation/> */}
    {/* <RecognitionElements/> */}
    {/* <Testimonials/> */}
    {/* <Footer/> */}
    {/* <LeadershipHero/> */}
    {/* <LeadershipMembers/> */}
    {/* <AboutHero/> */}
    <AboutLeadership/>
    {/* <AboutValues/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
