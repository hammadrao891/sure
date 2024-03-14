import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Homepage/HomePage';
import About from './pages/About/about';
import Leadership from './pages/Leadership/Leadership';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Difference from './pages/Difference/Difference';
// import Feedback from "./pages/Feedback/Feedback"
// import Partners from './pages/Partners/Partners';
import Support from './pages/Support/Support';
// import Teams from './pages/Teams/Teams';
// import Contact from './pages/Contact/Contact';
import GetStarted from './pages/GetStarted/GetStarted';
// import Enterprise from './pages/Enterprise/Enterprise';
import Privacy from './pages/Privacy/Privacy';
function App() {
  return (
    <div className="">

     <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/leadership" element={<Leadership/>} />
      {/* <Route path='/difference' element={<Difference/>} /> */}
      {/* <Route path='/feedback' element={<Feedback/>}/> */}
      {/* <Route path='/partners' element={<Partners/>} /> */}
      <Route path='/support' element={<Support/>} />
      {/* <Route path='/teams' element = {<Teams/>}/> */}
      {/* <Route path='/contact' element={<Contact/>}/> */}
      <Route path='/get-started' element={<GetStarted/>} />
      {/* <Route path='/enterprise' element={<Enterprise/>}/> */}
      <Route path='/privacy' element={<Privacy/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
