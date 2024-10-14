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

  // Navigate when componentsIndex changes
  useEffect(() => {
    // Use the latest componentsIndex to navigate
    navigate(allComponents[componentsIndex]);
    console.log(componentsIndex);
    
  }, [componentsIndex]);

  // Auto-navigation function with setInterval
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     // Using functional update to avoid stale closure
  //     setComponentsIndex((prevIndex) => 
  //       prevIndex < allComponents.length - 1 ? prevIndex + 1 : 0
  //     );
  //   }, 20000); // Automatically navigate every 4 seconds

  //   // Clear the interval when the component unmounts to avoid memory leaks
  //   return () => clearInterval(intervalId);
  // }, []); // Empty dependency array ensures the interval runs only once when the component mounts

  const handleNext = () => {
    setComponentsIndex((prevIndex) => 
      prevIndex < allComponents.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevious = () => {
    setComponentsIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : allComponents.length - 1
    );
  };

  return (
   <div className='bg-slate-900'>
     <Home/>
     <Skills/>
     <RecentWork/>
     <About/>
     <Contact/>

     <Blog/>
     </div>
  );
}

export default App;
