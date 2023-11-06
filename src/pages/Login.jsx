import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
 const { login, googleLogin } = useContext(AuthContext);
 const navigate = useNavigate();
 const location = useLocation();
 const [error, setError] = useState();

 const handleLogin = e => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  login(email, password)
   .then(res => {
    form.reset();
    navigate(location?.pathname ? location.state : '/');
    console.log(res.user);
   })
   .catch(error => {
    setError(error.message);
    console.log(error.message);
   });
 };

 const handleGoogle = e => {
  e.preventDefault();
  googleLogin()
   .then()
   .catch(error => {
    console.log(error.message);
   });
 };
 return (
  <div className="hero min-h-screen ">
   <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full md:w-96 shadow-2xl bg-base-100">
     <form onSubmit={handleLogin} className="card-body">
      <div className="form-control">
       <label className="label">
        <span className="label-text">Email</span>
       </label>
       <input type="email" name="email" placeholder="email" className="input input-bordered" required />
      </div>
      <div className="form-control">
       <label className="label">
        <span className="label-text">Password</span>
       </label>
       <input type="password" name="password" placeholder="password" className="input input-bordered" required />
      </div>
      <div>
       <small>{error}</small>
      </div>
      <div className="form-control mt-6 space-y-2">
       <button type="submit" className="btn btn-primary">
        Login
       </button>
       <Link onClick={handleGoogle} className="btn btn-accent">
        Google
       </Link>
      </div>
      <Link to="/register" className="text-center">
       <small className="font-medium capitalize">do not have account?</small>
      </Link>
     </form>
    </div>
   </div>
  </div>
 );
};

export default Login;
