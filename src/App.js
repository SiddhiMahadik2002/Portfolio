import logo from './logo.svg';
import './App.css';

import About from './pages/About/about';
import Portfolio from './pages/Home/portfolio';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/contact/contact';
import Project from './pages/project/project';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>
    </div>

  );
}



export default App;
