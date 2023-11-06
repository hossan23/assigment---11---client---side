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
    <tbody>
     {/* row 1 */}
     <tr>
      <th>1</th>
      <td>Cy Ganderton</td>
      <td>Quality Control Specialist</td>
      <td>Quality Control Specialist</td>
      <td>Quality Control Specialist</td>
      <td>Blue</td>
     </tr>
     {/* row 2 */}
     <tr>
      <th>2</th>
      <td>Hart Hagerty</td>
      <td>Desktop Support Technician</td>
      <td>Desktop Support Technician</td>
      <td>Desktop Support Technician</td>
      <td>Purple</td>
     </tr>
     {/* row 3 */}
     <tr>
      <th>3</th>
      <td>Brice Swyre</td>
      <td>Tax Accountant</td>
      <td>Tax Accountant</td>
      <td>Tax Accountant</td>
      <td>Red</td>
     </tr>
    </tbody>
   </table>
  </div>
 );
};

export default MyBids;
