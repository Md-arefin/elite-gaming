import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import ErrorPage from './pages/Error/ErrorPage';
import Blog from './pages/Blog/Blog';
import Login from './pages/LogIn/Login';
import Registration from './pages/Reg/Registration';
import AuthProvider from './Provider/AuthProvider';
import Home from './pages/Home/Home/Home';
import AllToys from './pages/AllToys/AllToys/AllToys';
import MyToys from './pages/MyToys/MyToys/MyToys';
import AddToy from './pages/AddToy/AddToy/AddToy';
import SingleToy from './pages/SingleToy/SingleToy';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'allToys',
        element: <AllToys></AllToys>,
        loader: () => fetch('http://localhost:5000/eliteGear')
      },
      {
        path: 'myToys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: 'toy/:id',
        element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/eliteGear/${params.id}`)
      },
      {
        path: 'addToy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'login',
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
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </React.StrictMode>
  </div>,
)
