import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BrowsCategoryCard from './BrowsCategoryCard';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Loader';
import ErrorElement from '../ErrorElement';

const BrowsCategory = () => {
 const { isPending, error, data } = useQuery({
  queryKey: ['myPostedJobs'],
  queryFn: async () => axios.get(`http://localhost:5000/jobs`).then(res => res.data),
 });

 if (isPending) return <Loader></Loader>;

 if (error) return <ErrorElement></ErrorElement>;

 const webDevelopment = data?.filter(data => data.category === 'Web Development');
 const digitalMarketing = data?.filter(data => data.category === 'Digital Marketing');
 const graphicsDesign = data?.filter(data => data.category === 'Graphics Design');

 return (
  <Tabs>
   <TabList className="text-center font-medium mb-10 ">
    <Tab>Web Development</Tab>
    <Tab>Digital Marketing</Tab>
    <Tab>Graphics Design</Tab>
   </TabList>

   <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
     {webDevelopment?.map(data => (
      <BrowsCategoryCard key={data._id} data={data}></BrowsCategoryCard>
     ))}
    </div>
   </TabPanel>
   <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
     {digitalMarketing?.map(data => (
      <BrowsCategoryCard key={data._id} data={data}></BrowsCategoryCard>
     ))}
    </div>
   </TabPanel>
   <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
     {graphicsDesign?.map(data => (
      <BrowsCategoryCard key={data._id} data={data}></BrowsCategoryCard>
     ))}
    </div>
   </TabPanel>
  </Tabs>
 );
};

export default BrowsCategory;
