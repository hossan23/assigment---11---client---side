import { useContext, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';
import axios from 'axios';
import swal from 'sweetalert';

const JobDetails = () => {
 const { user } = useContext(AuthContext);
 useEffect(() => {
  document.title = 'FlexiGig | Job Details';
 }, []);
 const data = useLoaderData();
 const navigate = useNavigate();
 //  console.log(Object.keys(data).join(','));
 const { email, job_title, deadline, description, min_price, max_price } = data;

 const handleBidProjects = e => {
  e.preventDefault();
  const form = e.target;
  const price = form.price.value;
  const deadline = form.deadline.value;
  const email = form.email.value;
  const buyerEmail = form.buyerEmail.value;
  const bid_Project_Data = {
   job_title,
   price,
   deadline,
   email,
   buyerEmail,
   status: 'pending',
  };

  axios
   .post('http://localhost:5000/bids', bid_Project_Data)
   .then(res => {
    if (res.data.insertedId) {
     swal('Good job!', 'Bid Successful!', 'success');
     navigate('/myBids');
     console.log(res.data);
    }
   })
   .catch(error => console.log(error.message));
 };
 return (
  <div className="my-28">
   <div className="max-w-md mx-auto bg-slate-200 rounded-xl shadow-2xl overflow-hidden md:max-w-2xl">
    <div className="md:flex">
     <div className="md:flex-shrink-0"></div>
     <div className="p-8 w-full">
      <div className="card bg-base-100 shadow-xl">
       <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{description}</p>
        <div className="card-actions items-center font-medium">
         <div className="badge badge-outline p-3">
          Price : ${min_price} - {max_price}$
         </div>
         <div className="badge badge-outline p-3">Deadline : {deadline}</div>
        </div>
       </div>
      </div>

      <div className="mt-4">
       <form onSubmit={handleBidProjects}>
        <div className="grid grid-cols-1 gap-4">
         <div>
          <label htmlFor="price" className="block text-lg font-medium text-gray-700">
           Price <span className="text-sm">(Your bidding amount)</span>
          </label>
          <input type="text" name="price" className="form-input w-full p-3 rounded-lg " placeholder={`Enter your bid amount from minimum ${min_price} - ${max_price} maximum`} />
         </div>
         <div>
          <label htmlFor="deadline" className="block text-lg font-medium text-gray-700">
           Deadline
          </label>
          <input type="date" name="deadline" className="form-input w-full p-3 rounded-lg" />
         </div>
         <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">
           Email <span className="text-sm">(Who is bidding)</span>
          </label>
          <input
           type="email"
           name="email"
           className="form-input w-full p-3 rounded-lg"
           readOnly
           // Assuming you can access user context to get the email value
           defaultValue={user.email}
          />
         </div>
         <div>
          <label htmlFor="buyerEmail" className="block text-lg font-medium text-gray-700 ">
           Buyer Email <span className="text-sm">(Job owner)</span>
          </label>
          <input
           type="email"
           name="buyerEmail"
           className="form-input w-full p-3 rounded-lg"
           readOnly
           // Assuming you can access the job owner's email value
           defaultValue={email}
          />
         </div>
        </div>
        {email === user.email ? (
         <button
          type="submit"
          className="btn btn-primary mt-4"
          disabled={true}
          // Assuming you'll handle the disable logic based on user type
         >
          Bid on the project
         </button>
        ) : (
         <button
          type="submit"
          className="btn btn-primary mt-4"

          // Assuming you'll handle the disable logic based on user type
         >
          Bid on the project
         </button>
        )}
       </form>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default JobDetails;
