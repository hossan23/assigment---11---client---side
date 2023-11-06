import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Root = () => {
 return (
  <div>
   <Navbar></Navbar>
   <div className="container mx-auto my-10">
    <Outlet></Outlet>
   </div>
   <Footer></Footer>
  </div>
 );
};

export default Root;
