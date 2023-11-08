import { useQuery } from '@tanstack/react-query';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider';
import ErrorElement from './ErrorElement';
import MyPostedJobsCard from './MyPostedJobsCard';
import Loader from '../Loader';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {
 const { user } = useContext(AuthContext);
 useEffect(() => {
  document.title = 'FlexiGig | My Posted jobs';
 }, []);

 const { isPending, error, data, refetch } = useQuery({
  queryKey: ['myPostedJobs'],
  queryFn: async () => axios.get(`http://localhost:5000/jobs`).then(res => res.data),
 });

 const filter = data?.filter(oneData => oneData.email === user.email);

 if (isPending) return <Loader></Loader>;

 if (error) return <ErrorElement></ErrorElement>;

 return (
  <div>
   {filter.length < 1 && (
    <div className="text-center capitalize space-y-4">
     <h1 className="text-3xl font-semibold">You have not posted a job yet</h1>
     <p className="font-medium">you can click here to post a job</p>
     <Link to="/addJob" className="btn btn-success text-white">
      Add job
     </Link>
    </div>
   )}
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {filter.map(myData => (
     <MyPostedJobsCard key={myData._id} myData={myData} refetch={refetch}></MyPostedJobsCard>
    ))}
   </div>
  </div>
 );
};

export default MyPostedJobs;
