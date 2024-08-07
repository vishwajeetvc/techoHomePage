import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Pages/Home.jsx';
import Blog from './components/Pages/Blog.jsx';
import OurServices from './components/Pages/OurServices.jsx';
import Contact from './components/Pages/Contact.jsx';
import About from './components/Pages/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/ourservices",
        element: <OurServices />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

