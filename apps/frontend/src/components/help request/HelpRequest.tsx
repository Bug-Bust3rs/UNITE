import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="mb-4">
      <button
        onClick={toggleOpen}
        className="w-full text-left font-medium text-gray-700 py-2 flex justify-between items-center"
      >
        {question}
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && <p className="text-gray-600 mt-2 bg-slate-300 p-3 rounded-xl">{answer}</p>}
    </div>
  );
};



export default function HelpRequest() {

return (
  <div className="bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-cover " >    
      <div className="max-w-xl w-full mx-auto p-6 sm:p-8 mt-10 ">
      <h2 className="text-3xl sm:text-4xl font-bold ml-16 mb-10 sm:mb-14">Help <span className='text-blue-600'>Request</span> Assistance</h2>
      <form>
        <div className="mb-3 sm:mb-4">
          <label className="block text-gray-700 mb-1 sm:mb-2">Name</label>
          <input
            type="text"
            className="w-full p-1 sm:p-2 border border-gray-300 rounded-2xl"
            placeholder="Enter your full name"
          />
        </div>

        <div className="mb-3 sm:mb-4">
          <label className="block text-gray-700 mb-1 sm:mb-2">Email</label>
          <input
            type="email"
            className="w-full p-1 sm:p-2 border border-gray-300 rounded-2xl"

            placeholder="Enter your email address"
          />
        </div>

        <div className="mb-3 sm:mb-4">
          <label className="block text-gray-700 mb-1 sm:mb-2">Phone</label>
          <input
            type="tel"
            className="w-full p-1 sm:p-2 border border-gray-300 rounded"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="mb-3 sm:mb-4">
          <label className="block text-gray-700 mb-1 sm:mb-2">Assistance Needed</label>
          <textarea
            className="w-full p-1 sm:p-2 border border-gray-300 rounded"
            placeholder="Describe the type of assistance you need"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1 sm:mb-2">Upload Document</label>
          <input
            type="file"
            className="w-full p-1 sm:p-2 border border-gray-300 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg font-semibold"
        >
          Submit Request
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Frequently Asked Questions</h3>
        <FAQItem 
          question="What types of assistance are available?" 
          answer="Various types of assistance are available, including financial aid, food supplies, and medical support." 
        />
        <FAQItem 
          question="How long does the application process take?" 
          answer="The application process typically takes 1-2 weeks depending on the volume of requests." 
         />
         <FAQItem 
          question="What documentation is required?" 
          answer="You will need to provide proof of identity, proof of residence, and any documents relevant to your request." 
         />
         </div>
       </div>
     </div>  
     )
  }


  