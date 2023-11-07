import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import axios from 'axios';
import swal from 'sweetalert';

const UpdateMyPostedJobs = () => {
 const data = useLoaderData();
 const { user } = useContext(AuthContext);
 const navigate = useNavigate();

 const { _id } = data;
 const HandleUpdateJobs = e => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const job_title = form.job_title.value;
  const deadline = form.deadline.value;
  const description = form.description.value;
  const category = form.category.value;
  const min_price = form.min_price.value;
  const max_price = form.max_price.value;
  const myData = { email, job_title, deadline, description, category, min_price, max_price };
  axios
   .patch(`http://localhost:5000/jobs/${_id}`, myData)
   .then(res => {
    if (res.data.modifiedCount) {
     swal('Good job!', 'Bid Successful!', 'success');
     navigate('/myPostedJobs');
     console.log(res.data);
    }
   })
   .catch(error => {
    console.log(error.message);
   });

  console.log('hi');
 };
 return (
  <div className="my-10 flex justify-center items-center">
   <form className="max-w-xl mx-auto bg-white p-6 rounded shadow-lg" onSubmit={HandleUpdateJobs}>
    <div className="mb-4">
     <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
      Email
     </label>
     <input type="email" id="email" name="email" defaultValue={user.email} readOnly className="input input-bordered focus:outline-none w-full font-medium " />
    </div>
    <div className="mb-4">
     <label htmlFor="job_title" className="block text-gray-700 font-bold mb-2">
      Job Title
     </label>
     <input type="text" id="job_title" name="job_title" className="input input-bordered focus:outline-none w-full font-medium" defaultValue={data.job_title} />
    </div>
    <div className="mb-4">
     <label htmlFor="deadline" className="block text-gray-700 font-bold mb-2">
      Deadline
     </label>
     <input type="date" id="deadline" name="deadline" className="input input-bordered focus:outline-none w-full font-medium" defaultValue={data.deadline} />
    </div>
    <div className="mb-4">
     <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
      Description
     </label>
     <textarea id="description" name="description" className="input input-bordered focus:outline-none w-full font-medium" defaultValue={data.description} rows="4"></textarea>
    </div>
    <div className="mb-4">
     <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
      Category
     </label>
     <select id="category" defaultValue={data.category} name="category" className="input input-bordered focus:outline-none w-full font-medium ">
      <option value="Web Development">Web Development</option>
      <option value="Digital Marketing">Digital Marketing</option>
      <option value="Graphics Design">Graphics Design</option>
     </select>
    </div>
    <div className="flex mb-4">
     <div className="w-1/2 pr-2">
      <label htmlFor="min_price" className="block text-gray-700 font-bold mb-2">
       Minimum Price
      </label>
      <input type="number" id="min_price" defaultValue={data.min_price} name="min_price" className="input input-bordered focus:outline-none w-full font-medium " />
     </div>
     <div className="w-1/2 pl-2">
      <label htmlFor="max_price" className="block text-gray-700 font-bold mb-2">
       Maximum Price
      </label>
      <input type="number" id="max_price" defaultValue={data.max_price} name="max_price" className="input input-bordered focus:outline-none w-full " />
     </div>
    </div>
    <button type="submit" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full ">
     Update Job
    </button>
   </form>
  </div>
 );
};

export default UpdateMyPostedJobs;
