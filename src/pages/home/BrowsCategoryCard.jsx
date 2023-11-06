import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const BrowsCategoryCard = ({ data }) => {
 //  console.log(Object.keys(data).join(','));
 const { _id, job_title, deadline, description, min_price, max_price } = data;

 return (
  <div className="card bg-base-100 shadow-xl">
   <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <hr />
    <p>{description}</p>
    <div className="card-actions justify-between items-center font-medium">
     <div className="space-x-4">
      <div className="badge badge-outline p-3">
       Price : ${min_price} - {max_price}$
      </div>
      <div className="badge badge-outline p-3">Deadline : {deadline}</div>
     </div>
     <Link to={`/jobs/${_id}`} className="btn btn-primary capitalize">
      Bid Now
     </Link>
    </div>
   </div>
  </div>
 );
};

export default BrowsCategoryCard;
