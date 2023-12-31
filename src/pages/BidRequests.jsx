import { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loader from '../Loader';
import ErrorElement from './ErrorElement';

const BidRequests = () => {
 const { user } = useContext(AuthContext);
 useEffect(() => {
  document.title = 'FlexiGig | Bid Requests';
 }, []);
 const {
  isPending,
  error,
  refetch,
  data: allData,
 } = useQuery({
  queryKey: ['repoData'],
  queryFn: () => axios.get(`https://assignment-11-server-woad-six.vercel.app/bids?buyerEmail=${user.email}`, { withCredentials: true }).then(res => res.data),
 });

 if (isPending) return <Loader></Loader>;

 if (error) return <ErrorElement></ErrorElement>;

 const handleAccept = _id => {
  axios
   .patch(`https://assignment-11-server-woad-six.vercel.app/bids/${_id}`, { status: 'in progress' })
   .then(res => {
    refetch();
    console.log(res.data);
   })
   .catch(err => console.log(err.message));
  refetch();
 };

 const handleReject = _id => {
  axios
   .patch(`https://assignment-11-server-woad-six.vercel.app/bids/${_id}`, { status: 'canceled' })
   .then(res => {
    refetch();
    console.log(res.data);
   })
   .catch(err => console.log(err.message));
  refetch();
 };

 return (
  <div className="">
   <h1 className="text-center text-2xl font-semibold my-4">Bid Request</h1>
   <hr />
   <div className="overflow-x-auto font-medium">
    <table className="table">
     {/* head */}
     <thead>
      <tr>
       <th></th>
       <th>Job Title</th>
       <th>Bidder Email</th>
       <th>Deadline</th>
       <th>Price</th>
       <th>Status</th>
       <th>Respond</th>
      </tr>
     </thead>
     {allData?.map(oneData => (
      <tbody key={oneData._id} className="text-lg">
       {/* row 1 */}
       <tr>
        <th></th>
        <td>{oneData.job_title}</td>
        <td>{oneData.email}</td>
        <td>{oneData.deadline}</td>
        <td>{oneData.price}</td>
        <td className="font-bold">{oneData.status}</td>

        {oneData.status === 'pending' && (
         <td onClick={() => handleAccept(oneData._id)} className="btn btn-success mr-2">
          Accept
         </td>
        )}
        {oneData.status === 'pending' && (
         <td onClick={() => handleReject(oneData._id)} className="btn btn-error">
          Reject
         </td>
        )}
       </tr>
       {/* row 2 */}
      </tbody>
     ))}
    </table>
   </div>
  </div>
 );
};

export default BidRequests;
