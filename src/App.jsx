// import { useState, useEffect } from 'react';
// import './App.css';
// import { Outlet, useLocation, useNavigate } from 'react-router-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// function App() {
//   const [componentsIndex, setComponentsIndex] = useState(0);
//   const allComponents = ['/', '/skills', '/work', '/about'];
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Navigate when componentsIndex changes
//   useEffect(() => {
//     navigate(allComponents[componentsIndex]);

//   }, [componentsIndex]);

//   const handleNext = () => {
//     const currentIndex = allComponents.indexOf(location.pathname);
//     if (currentIndex < allComponents.length - 1) {
//       setComponentsIndex(currentIndex + 1); // Update state for the next element
//     } else {
//       setComponentsIndex(0); // Reset to the first element
//     }

//   };

//   const handlePrevious = () => {
//     const currentIndex = allComponents.indexOf(location.pathname);
//     if (currentIndex > 0) {
//       setComponentsIndex(currentIndex - 1); // Go to the previous element
//     } else {
//       setComponentsIndex(allComponents.length - 1); // Wrap around to the last element
//     }
//   };

//   const navigateAuto =()=>{
//     const intervalId = setInterval(()=>{
//       handleNext();
//     },4000);
//     return ()=>clearInterval(intervalId);
//   }
//   useEffect(()=>{
//     navigateAuto();
//     console.log(componentsIndex);
    
   
//   },[location])
  

//   return (
//     <div className="flex items-center justify-center">
//       <button onClick={handlePrevious}>Previous</button>
//       <Outlet />
//       <button onClick={handleNext}>Next</button>
//     </div>
//   );
// }

// export default App;

// new 

import { useState, useEffect } from 'react';
import './App.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
    <div className="flex items-center justify-center">
      <button onClick={handlePrevious}>Previous</button>
      <Outlet />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;
