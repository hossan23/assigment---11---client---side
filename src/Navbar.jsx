import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

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
    Bid Requests
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
   .then(console.log('logged out successfully'))
   .catch(error => {
    console.log(error.message);
   });
 };

 return (
  <div className="container mx-auto bg-base-100">
   <div className="navbar bg-base-100 py-5">
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
     <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>
    <div className="navbar-center hidden lg:flex">
     <ul className="menu menu-horizontal px-1">{links}</ul>
    </div>
    <div className="navbar-end">
     {user ? (
      <Link onClick={handleLogout} className="btn btn-info">
       Logout
      </Link>
     ) : (
      <Link to="/login" className="btn btn-info">
       Login
      </Link>
     )}
    </div>
   </div>
  </div>
 );
};

export default Navbar;
