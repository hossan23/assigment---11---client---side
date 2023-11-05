import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Root = () => {
 return (
  <div>
   <Navbar></Navbar>
   <div className="min-h-screen">
    <Outlet></Outlet>
   </div>
   <Footer></Footer>
  </div>
 );
};

export default Root;
