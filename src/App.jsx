import { useState, useEffect } from 'react';
import './App.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Home from './components/homePage/Home';
import Skills from './components/skills/Skills';
import RecentWork from './components/recentWork/RecentWork';
import About from './components/about/About';
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact';
function App() {
  const [componentsIndex, setComponentsIndex] = useState(0);
  const allComponents = ['/', '/skills', '/work', '/about'];
  const navigate = useNavigate();
  const location = useLocation();


  return (
   <div className='bg-slate-900'>
     <Home/>
     <Skills/>
     <RecentWork/>
     <About/>
     </div>
  );
}

export default App;
