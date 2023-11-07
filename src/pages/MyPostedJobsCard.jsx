import axios from 'axios';

import { Link } from 'react-router-dom';
import swal from 'sweetalert';

/* eslint-disable react/prop-types */
const MyPostedJobsCard = ({ myData, refetch }) => {
 const { _id, email, job_title, deadline, description, category, min_price, max_price } = myData;

 const handleDelete = id => {
  axios.delete(`http://localhost:5000/jobs/${id}`).then(res => {
   if (res.data.deletedCount > 0) {
    swal('Good job!', 'Deleted Successfully!', 'success');
    console.log(res.data);
    refetch();
   }
  });
 };

 return (
  <div className="card  bg-base-100 shadow-xl">
   <div className="card-body">
    <h1 className="text-2xl font-semibold ">Job Title : {job_title}</h1>
    <hr />
    <h2 className="text-success text-lg">Category : {category}</h2>
    <h2 className="text-gray-500">Email : {email}</h2>
    <h2 className="text-gray-500">Deadline : {deadline}</h2>
    <h2 className="text-gray-500">
     Price : ${min_price} - ${max_price}
    </h2>
    <h2 className="text-gray-500">Description : {description}</h2>

    <div className="card-actions">
     <Link to={`/updateMyJobs/${_id}`} className="btn btn-primary">
      Update
     </Link>
     <Link onClick={() => handleDelete(_id)} className="btn bg-red-500">
      Delete
     </Link>
    </div>
   </div>
  </div>
 );
};

export default MyPostedJobsCard;
