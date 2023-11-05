const Banner = () => {
 return (
  <div>
   <div className="flex justify-between items-center ">
    <div className="flex-1 space-y-4">
     <h1 className="md:text-6xl font-semibold">
      Hire the best freelancers for<br></br> any job, online.
     </h1>
     <p className="text-xl">Millions of people use freeio.com to turn their ideas into reality.</p>

     <button className="btn btn-success mr-4 text-white">Find Work</button>
     <button className="btn btn-success text-white">Find Talent</button>
    </div>
    <div className="flex-1">
     <img src="https://freeio-app-nextjs.vercel.app/_next/image?url=%2Fimages%2Fabout%2Fhome4-hero-element-1.png&w=750&q=75" alt="" />
    </div>
   </div>
   <div className="space-y-10 mt-10">
    <h4 className="text-xl font-medium text-center">Trusted by the world’s best</h4>
    <div className="flex items-center justify-between">
     <img src="https://freeio-app-nextjs.vercel.app/_next/image?url=%2Fimages%2Fpartners%2F13.png&w=96&q=75" alt="" />
     <img src="https://freeio-app-nextjs.vercel.app/_next/image?url=%2Fimages%2Fpartners%2F15.png&w=96&q=75" alt="" />
     <img src="https://freeio-app-nextjs.vercel.app/_next/image?url=%2Fimages%2Fpartners%2F16.png&w=96&q=75" alt="" />
     <img src="https://freeio-app-nextjs.vercel.app/_next/image?url=%2Fimages%2Fpartners%2F17.png&w=96&q=75" alt="" />
     <img src="https://freeio-app-nextjs.vercel.app/_next/image?url=%2Fimages%2Fpartners%2F18.png&w=96&q=75" alt="" />
    </div>
   </div>
  </div>
 );
};

export default Banner;
