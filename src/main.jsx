import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/homePage/Home.jsx';
import Skills from './components/skills/Skills.jsx';

import RecentWork from './components/recentWork/RecentWork.jsx';

import About from './components/about/About.jsx';

import Blog from './components/blog/Blog.jsx';

import ErrorPage from './components/errorPage/ErrorPage.jsx';





// create browser router here
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>,
  
      },
      {
        path:'/skills',
        element:<Skills/>,
      
      },
      {
        path:'/work',
        element:<RecentWork/> 
      },
      {
        path:'/about',
        element:<About/>
      },
    ]
  },
  {
    path:'/blog',
    element:<Blog/>
  }
  

  

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
