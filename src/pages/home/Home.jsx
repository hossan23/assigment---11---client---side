import { useEffect } from 'react';
import Banner from './Banner';
import BrowsCategory from './BrowsCategory';
import About from './About';
import HowItWorks from './HowItWorks';

const Home = () => {
 useEffect(() => {
  document.title = 'FlexiGig | Home';
 }, []);
 return (
  <div className="container mx-auto my-20 space-y-20">
   <Banner></Banner>
   <BrowsCategory></BrowsCategory>
   <HowItWorks></HowItWorks>
   <About></About>
  </div>
 );
};

export default Home;
