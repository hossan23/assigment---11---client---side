import { useQuery } from '@tanstack/react-query';

import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import ErrorElement from './ErrorElement';

const MyPostedJobs = () => {
 const { user } = useContext(AuthContext);
 const {
  isPending,
  error,
  data: allData,
 } = useQuery({
  queryKey: ['repoData'],
  queryFn: () => fetch(`http://localhost:5000/jobs?email=${user?.email}`).then(res => res.json()),
 });

 if (isPending) return <span className="loading loading-bars loading-lg"></span>;

 if (error) return <ErrorElement></ErrorElement>;

 return (
  <div>
   {allData.map(duta => (
    <p key={duta._id}>{duta.job_title}</p>
   ))}
  </div>
 );
};

export default MyPostedJobs;
