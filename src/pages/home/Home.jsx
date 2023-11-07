import { useEffect } from 'react';
import Banner from './Banner';
import BrowsCategory from './BrowsCategory';

const Home = () => {
 useEffect(() => {
  document.title = 'FlexiGig | Home';
 }, []);
 return (
  <div className="container mx-auto my-20 space-y-20">
   <Banner></Banner>
   <BrowsCategory></BrowsCategory>
  </div>
 );
};

export default Home;
