import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';
import ErrorElement from '../ErrorElement';

const MyBids = () => {
 const { user } = useContext(AuthContext);
 const {
  isPending,
  error,
  data: allData,
 } = useQuery({
  queryKey: ['repoData'],
  queryFn: () => fetch(`http://localhost:5000/bids?email=${user?.email}`).then(res => res.json()),
 });

 if (isPending) return <span className="loading loading-bars loading-lg"></span>;

 if (error) return <ErrorElement></ErrorElement>;

 return (
  <div>
   {allData.map(duta => (
    <p key={duta._id}>
     {/* {duta.price} */}
     {duta.email}
    </p>
   ))}
  </div>
 );
};

export default MyBids;
