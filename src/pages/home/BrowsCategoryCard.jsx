import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const BrowsCategoryCard = ({ data }) => {
 //  console.log(Object.keys(data).join(','));
 const { _id, job_title, deadline, description, min_price, max_price } = data;

 return (
  <div className="bg-white shadow-lg rounded-lg p-6 mx-auto max-w-md">
   <h2 className="text-2xl font-bold mb-4">{job_title}</h2>
   <hr className="my-4" />
   <p className="text-base text-gray-700 mb-6">{description}</p>
   <div className="flex flex-col md:flex-row justify-between items-center font-medium">
    <div className="mb-4 md:mb-0">
     <div className="bg-blue-100 text-blue-700 font-bold py-2 px-4 rounded-full mb-2">
      Price: ${min_price} - ${max_price}
     </div>
     <div className="bg-green-100 text-green-700 font-bold py-2 px-4 rounded-full">Deadline: {deadline}</div>
    </div>
    <Link to={`/jobs/${_id}`} className="btn capitalize btn-success">
     Bid Now
    </Link>
   </div>
  </div>
 );
};

export default BrowsCategoryCard;
