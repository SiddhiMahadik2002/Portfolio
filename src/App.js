import logo from './logo.svg';
import './App.css';

import About from './pages/About/about';
import Portfolio from './pages/Home/portfolio';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>

  );
}



export default App;
