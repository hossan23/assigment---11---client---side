const HowItWorks = () => {
 const steps = [
  {
   id: 1,
   title: 'Create an Account',
   description: 'Sign up for a Flexigig account to get started. It only takes a few minutes!',
   image: 'https://i.ibb.co/4NhML7k/accountant.png',
  },
  {
   id: 2,
   title: 'Post Your Project',
   description: 'Describe your project and specify your requirements. Receive proposals from skilled freelancers.',
   image: 'https://i.ibb.co/sJh3ZCL/postman.png',
  },
  {
   id: 3,
   title: 'Select Your Freelancer',
   description: 'Review proposals, view freelancer profiles, and choose the best fit for your project.',
   image: 'https://i.ibb.co/FxtrhVN/panda.png',
  },
  {
   id: 4,
   title: 'Collaborate and Complete',
   description: 'Work closely with your chosen freelancer to bring your project to life. Pay securely through Flexigig.',
   image: 'https://i.ibb.co/6rvXGcK/high-five.png',
  },
 ];
 return (
  <section className="py-16 bg-white max-sm:p-4">
   <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8 text-gray-800">How it Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
     {steps.map(step => (
      <div key={step.id} className="flex flex-col items-center">
       <img src={step.image} alt={step.title} className="w-24 h-24 mb-6" />
       <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
       <p className="text-gray-700 mb-6 font-medium">{step.description}</p>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default HowItWorks;
