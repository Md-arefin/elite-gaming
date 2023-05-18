import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import ErrorPage from './pages/Error/ErrorPage';
import App from './App';
import Blog from './pages/Blog/Blog';
import Login from './pages/LogIn/Login';
import Registration from './pages/Reg/Registration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <App></App>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path:'login',
        element: <Login></Login>
      },
      {
        path: 'registration',
        element: <Registration></Registration>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1200px] mx-auto px-2'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>,
)
