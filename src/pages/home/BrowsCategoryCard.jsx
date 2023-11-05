import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const BrowsCategoryCard = ({ data }) => {
 //  console.log(Object.keys(data).join(','));
 const { _id, email, job_title, deadline, description, category, min_price, max_price } = data;

 return (
  <div className="card  bg-base-100 shadow-xl">
   <div className="card-body font-medium">
    <h2 className="card-title">{job_title}</h2>
    <p className="">{deadline}</p>
    <p className="">
     {min_price}$ - {max_price}$
    </p>
    <small>{description}</small>
    <div className="card-actions justify-end">
     <Link to={`/jobs/${_id}`} className="btn btn-primary">
      Bid Now
     </Link>
    </div>
   </div>
  </div>
 );
};

export default BrowsCategoryCard;
