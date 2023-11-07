import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';
import ErrorElement from '../ErrorElement';
import axios from 'axios';
import Loader from '../../Loader';

const MyBids = () => {
 const { user } = useContext(AuthContext);
 const {
  isPending,
  error,
  refetch,
  data: allData,
 } = useQuery({
  queryKey: ['repoData'],
  queryFn: () => axios.get(`http://localhost:5000/bids?email=${user?.email}`).then(res => res.data),
 });

 if (isPending) return <Loader></Loader>;

 if (error) return <ErrorElement></ErrorElement>;

 const handleAccept = _id => {
  axios
   .patch(`http://localhost:5000/bids/${_id}`, { status: 'complete' })
   .then(res => {
    refetch();
    console.log(res.data);
   })
   .catch(err => console.log(err.message));
 };

 return (
  <div className="h-screen">
   <h1 className="text-center text-2xl font-semibold my-4">My Bids</h1>
   <hr />
   <div className="overflow-x-auto font-medium">
    <table className="table">
     {/* head */}
     <thead>
      <tr>
       <th></th>
       <th>Job Title</th>
       <th>Job owner Email</th>
       <th>Deadline</th>
       <th>Status</th>
       <th>Respond</th>
      </tr>
     </thead>
     {allData.map(oneData => (
      <tbody key={oneData._id} className="text-lg">
       {/* row 1 */}
       <tr>
        <th>1</th>
        <td>{oneData.job_title}</td>
        <td>{oneData.buyerEmail}</td>
        <td>{oneData.deadline}</td>
        <td className="font-bold">{oneData.status}</td>
        {(oneData.status === 'Pending' && <td className="btn bg-red-500 disabled">Accept</td>) ||
         (oneData.status === 'in progress' && (
          <td className="btn btn-success" onClick={() => handleAccept(oneData._id)}>
           Accept
          </td>
         ))}
       </tr>
       {/* row 2 */}
      </tbody>
     ))}
    </table>
   </div>
  </div>
 );
};

export default MyBids;
