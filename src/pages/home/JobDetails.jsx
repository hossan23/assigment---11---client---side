import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
 const data = useLoaderData();
 const { _id } = data;
 return (
  <div>
   <h1>Details of : {_id}</h1>
  </div>
 );
};

export default JobDetails;
