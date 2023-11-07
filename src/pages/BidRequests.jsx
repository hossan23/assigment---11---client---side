import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loader from '../Loader';
import ErrorElement from './ErrorElement';

const BidRequests = () => {
 const { user } = useContext(AuthContext);
 const {
  isPending,
  error,
  data: allData,
 } = useQuery({
  queryKey: ['repoData'],
  queryFn: () => axios.get(`http://localhost:5000/bids`).then(res => res.data),
 });
 const filter = allData?.filter(oneData => oneData.email !== user.email);

 if (isPending) return <Loader></Loader>;

 if (error) return <ErrorElement></ErrorElement>;

 const { _id } = allData;

 const handleAccept = () => {
  console.log('handleAccept', _id);
  //   axios.put(`http://localhost:5000/bids/${_id}`);
 };

 console.log(filter);
 return (
  <div>
   <div className="overflow-x-auto">
    <h1>Bid request</h1>
    <table className="table">
     {/* head */}
     <thead>
      <tr>
       <th></th>
       <th>Job Title</th>
       <th>Email</th>
       <th>Deadline</th>
       <th>Price</th>
       <th>Status</th>
       <th>Complete button</th>
      </tr>
     </thead>
     {filter?.map(oneData => (
      <tbody key={oneData._id}>
       {/* row 1 */}
       <tr>
        <th>1</th>
        <td>{oneData.job_title}</td>
        <td>{oneData.email}</td>
        <td>{oneData.deadline}</td>
        <td>{oneData.price}</td>
        <td className="font-bold">Pending</td>
        <td onClick={() => handleAccept(_id)} className="btn btn-success mr-2">
         Accept
        </td>
        <td className="btn btn-error">Reject</td>
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
