import { Link } from 'react-router-dom';

const ErrorElement = () => {
 return (
  <div className="h-screen flex flex-col md:flex-row justify-center items-center container mx-auto  capitalize">
   <div className="flex flex-col flex-1 items-center space-y-4 text-center">
    <h1 className="text-2xl sm:text-9xl font-bold">
     4<span className="text-green-500">0</span>4
    </h1>
    <h4 className="text-xl font-semibold">oops! looks like you are lost.</h4>
    <p className="font-medium">The page you are looking for is not available. Try to search again or use the go to.</p>
    <Link to="/" className="btn btn-success capitalize text-white w-fit">
     go back to home
    </Link>
   </div>
   <img className="hidden lg:block flex-1" src="https://freeio-app-nextjs.vercel.app/images/icon/error-page-img.svg" alt="" />
  </div>
 );
};

export default ErrorElement;
