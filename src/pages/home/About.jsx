const About = () => {
 return (
  <section className="py-16 px-10 bg-gray-100 rounded-lg">
   <div className=" flex flex-col lg:flex-row items-center justify-center gap-12">
    <div className=" order-2 lg:order-1 font-medium">
     <h2 className="text-4xl font-bold mb-6 text-gray-800 flex justify-center items-center">
      About <img src="https://i.ibb.co/0YXxypZ/freelance-1.png" className="mx-4" alt="" /> Flexigig
     </h2>
     <p className="text-gray-700 text-lg mb-6 leading-relaxed">Flexigig is a dynamic online marketplace connecting talented freelancers with businesses and entrepreneurs seeking top-notch services. Whether youa re a skilled professional looking to showcase your expertise or a business in need of specialized services, Flexigig provides a platform where talent meets opportunity.</p>
     <p className="text-gray-700 text-lg mb-6 leading-relaxed">Our mission is to empower freelancers to thrive in the digital economy and enable businesses to access a global pool of skilled professionals. With Flexigig, you can find the perfect match for your project or offer your unique skills to a wide range of clients.</p>
     <p className="text-gray-700 text-lg leading-relaxed">Join us in revolutionizing the way talent connects with opportunity. Get started today!</p>
    </div>
    <div className=" order-1 lg:order-2">
     <img
      src="https://freeio-app-nextjs.vercel.app/_next/image?url=%2Fimages%2Fabout%2Fabout-9.png&w=750&q=75" // Path to your about section image
      alt="About Flexigig"
      className="w-full rounded-lg shadow-lg"
     />
    </div>
   </div>
  </section>
 );
};

export default About;
