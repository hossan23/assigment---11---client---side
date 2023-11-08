import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import swal from 'sweetalert';

const Navbar = () => {
 const { user, logout } = useContext(AuthContext);
 const links = (
  <>
   <Link to="/" className="mr-5 font-medium text-lg">
    Home
   </Link>
   <Link to="/addJob" className="mr-5 font-medium text-lg">
    Add Job
   </Link>
   <Link to="/myPostedJobs" className="mr-5 font-medium text-lg">
    My Posted jobs
   </Link>
   <Link to="/myBids" className="mr-5 font-medium text-lg">
    My Bids
   </Link>
   <Link to="/bidRequests" className="mr-5 font-medium text-lg">
    Bid Request
   </Link>
   {!user && (
    <Link to="/register" className="mr-5 font-medium text-lg">
     Register
    </Link>
   )}
  </>
 );

 const handleLogout = e => {
  e.preventDefault();
  logout()
   .then(swal('Good job!', 'logged out successfully!', 'success'))
   .catch(error => {
    console.log(error.message);
   });
 };

 return (
  <div className="bg-green-100">
   <div className="navbar bg-green-100 py-5 container mx-auto">
    <div className="navbar-start">
     <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
       </svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {links}
      </ul>
     </div>
     {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
     <Link to="/" className="flex justify-center items-center">
      <img src="https://i.ibb.co/0YXxypZ/freelance-1.png" alt="" />
      <span className="text-lg font-medium">FlexiGig</span>
     </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
     <ul className="menu menu-horizontal px-1">{links}</ul>
    </div>
    <div className="navbar-end">
     {user ? (
      <div className="flex items-center justify-center space-x-2">
       <h6 className="font-medium hidden md:block">{user?.displayName}</h6>
       {user.photoURL ? <img src={user?.photoURL} className="w-10 h-10 rounded-full" /> : ''}
       <Link onClick={handleLogout} className="btn btn-info capitalize">
        Logout
       </Link>
      </div>
     ) : (
      <Link to="/login" className="btn btn-info capitalize font-bold">
       Login
      </Link>
     )}
    </div>
   </div>
  </div>
 );
};

export default Navbar;
