import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorElement from './pages/ErrorElement';
import Home from './pages/Home';
import Root from './Root';
import AddJobs from './pages/AddJobs';
import MyPostedJobs from './pages/MyPostedJobs';
import MyBids from './pages/MyBids';
import Register from './pages/Register';
import Login from './pages/Login';
import AuthProvider from './AuthProvider';
import BidRequests from './pages/BidRequests';

const router = createBrowserRouter([
 {
  path: '/',
  element: <Root></Root>,
  errorElement: <ErrorElement></ErrorElement>,
  children: [
   {
    path: '/',
    element: <Home></Home>,
   },
   {
    path: '/addJob',
    element: <AddJobs></AddJobs>,
   },
   {
    path: '/myPostedJobs',
    element: <MyPostedJobs></MyPostedJobs>,
   },
   {
    path: '/myBids',
    element: <MyBids></MyBids>,
   },
   {
    path: '/register',
    element: <Register></Register>,
   },
   {
    path: '/login',
    element: <Login></Login>,
   },
   {
    path: '/bidRequests',
    element: <BidRequests></BidRequests>,
   },
  ],
 },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <AuthProvider>
   <RouterProvider router={router} />
  </AuthProvider>
 </React.StrictMode>
);
