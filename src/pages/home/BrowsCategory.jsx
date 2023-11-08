import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BrowsCategoryCard from './BrowsCategoryCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BrowsCategory = () => {
 const [allData, setAllData] = useState();

 //   const { _id, email, job_title, deadline, description, category, min_price, max_price } = data;

 useEffect(() => {
  axios.get('http://localhost:5000/jobs', { withCredentials: true }).then(res => {
   setAllData(res.data);
  });
 }, []);

 const webDevelopment = allData?.filter(data => data.category === 'Web Development');
 const digitalMarketing = allData?.filter(data => data.category === 'Digital Marketing');
 const graphicsDesign = allData?.filter(data => data.category === 'Graphics Design');

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
