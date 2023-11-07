import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorElement from './pages/ErrorElement';

import Root from './Root';
import AddJobs from './pages/AddJobs';

import Register from './pages/Register';
import Login from './pages/Login';
import AuthProvider from './AuthProvider';
import BidRequests from './pages/BidRequests';
import PrivateRoute from './PrivateRoute';
import Home from './pages/home/Home';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import JobDetails from './pages/home/JobDetails';
import MyBids from './pages/myBids/MyBids';
import MyPostedJobs from './pages/MyPostedJobs';
import UpdateMyPostedJobs from './pages/UpdateMyPostedJobs';

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
    element: (
     <PrivateRoute>
      <AddJobs></AddJobs>
     </PrivateRoute>
    ),
   },
   {
    path: '/myPostedJobs',
    element: (
     <PrivateRoute>
      <MyPostedJobs></MyPostedJobs>
     </PrivateRoute>
    ),
   },
   {
    path: '/myBids',
    element: (
     <PrivateRoute>
      <MyBids></MyBids>
     </PrivateRoute>
    ),
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
    element: (
     <PrivateRoute>
      <BidRequests></BidRequests>
     </PrivateRoute>
    ),
   },
   {
    path: '/jobs/:id',
    element: (
     <PrivateRoute>
      <JobDetails></JobDetails>
     </PrivateRoute>
    ),
    loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
   },
   {
    path: '/updateMyJobs/:id',
    element: (
     <PrivateRoute>
      <UpdateMyPostedJobs></UpdateMyPostedJobs>
     </PrivateRoute>
    ),
    loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
   },
  ],
 },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <QueryClientProvider client={queryClient}>
   <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
  </QueryClientProvider>
 </React.StrictMode>
);
