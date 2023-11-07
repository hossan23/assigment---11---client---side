import { useQuery } from '@tanstack/react-query';

import { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider';
import ErrorElement from './ErrorElement';
import MyPostedJobsCard from './MyPostedJobsCard';
import Loader from '../Loader';
import axios from 'axios';

const MyPostedJobs = () => {
 const { user } = useContext(AuthContext);
 useEffect(() => {
  document.title = 'FlexiGig | My Posted jobs';
 }, []);

 const { isPending, error, data, refetch } = useQuery({
  queryKey: ['myPostedJobs'],
  queryFn: async () => axios.get(`http://localhost:5000/jobs?email=${user?.email}`, { withCredentials: true }).then(res => res.data),

  //   {
  //     const data = await fetch(`http://localhost:5000/jobs?email=${user?.email}`);
  //     return await data.json();
  //    }
  //  { withCredentials: true }
 });
 if (isPending) return <Loader></Loader>;

 if (error) return <ErrorElement></ErrorElement>;

 return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
   {data.map(myData => (
    <MyPostedJobsCard key={myData._id} myData={myData} refetch={refetch}></MyPostedJobsCard>
   ))}
  </div>
 );
};

export default MyPostedJobs;
