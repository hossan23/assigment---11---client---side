import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
 const { register } = useContext(AuthContext);

 const handleRegister = e => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  const name = form.name.value;
  const photo = form.photo.value;
  register(email, password)
   .then(res => {
    console.log(res.user);
   })
   .catch(error => {
    console.log(error.message);
   });
  form.reset();
 };

 return (
  <div className="hero min-h-screen bg-base-200">
   <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
       <label className="label">
        <span className="label-text">Name</span>
       </label>
       <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
      </div>
      {/* name */}
      <div className="form-control">
       <label className="label">
        <span className="label-text">Photo</span>
       </label>
       <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
      </div>
      {/* photo url */}
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
      <div className="form-control mt-6">
       <button type="submit" className="btn btn-primary">
        Register
       </button>
      </div>
      <Link to="/login" className="text-center">
       <small className="font-medium capitalize">Already Have Account?</small>
      </Link>
     </form>
    </div>
   </div>
  </div>
 );
};

export default Register;
