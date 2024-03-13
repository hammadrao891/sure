import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Homepage/HomePage';
import About from './pages/About/about';
import Leadership from './pages/Leadership/Leadership';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">

     <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/leadership" element={<Leadership/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
