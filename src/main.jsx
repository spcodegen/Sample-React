import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import ErrorPage from './Components/Pages/ErrorPage.jsx'
import AboutUs from './Components/Pages/AboutUs.jsx'
import ContactUs from './Components/Pages/ContactUs.jsx'
import BlogPage from './Components/Pages/BlogPage.jsx'
import Home from './Components/Pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>, 
)
