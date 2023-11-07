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
  data: allData,
 } = useQuery({
  queryKey: ['repoData'],
  queryFn: () => axios.get(`http://localhost:5000/bids?email=${user?.email}`).then(res => res.data),
 });

 if (isPending) return <Loader></Loader>;

 if (error) return <ErrorElement></ErrorElement>;

 return (
  <div>
   <div className="overflow-x-auto">
    <table className="table">
     {/* head */}
     <thead>
      <tr>
       <th></th>
       <th>Job Title</th>
       <th>Email</th>
       <th>Deadline</th>
       <th>Status</th>
       <th>Complete button</th>
      </tr>
     </thead>
     {allData.map(oneData => (
      <tbody key={oneData._id}>
       {/* row 1 */}
       <tr>
        <th>1</th>
        <td>{oneData.job_title}</td>
        <td>Owner : {oneData.buyerEmail}</td>
        <td>{oneData.deadline}</td>
        <td className="font-bold">Pending</td>
        <td>Blue</td>
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
