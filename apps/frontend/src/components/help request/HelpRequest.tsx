
import reg_img from "../../assets/humanitarian-help-animate (1).svg";
import FAQSection from "./FaQ"

export default function HelpRequest() {

return (
  <div className="w-full mx-auto p-6  sm:p-8  bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-cover mt-[10vh] " >    
      <div className="">
      <h2 className="text-3xl font-bold leading-tight text-center sm:text-4xl lg:text-5xl">Help <span className='text-blue-600'>Request</span> Assistance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto sm:max-w-[120vh] rounded-2xl ">
        <div className="w-full h-[450px] md:block">
          <img
            className="w-full mt-[100px] ml-2 h-[480px]"
            src={reg_img}
            alt="Register illustration"
          />
        </div>
        <div className=" p-4 flex flex-col justify-around">
          <form>
          <div className="mt-16">
          <label
            htmlFor="username"
            className="poppins-medium ml-1 text-slate-600 dark:text-slate-300"
          >
            Enter Username
          </label>
          <input
            id="username"
            className="border border-black px-3 py-2 w-[350px] rounded-2xl bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-blue-500 dark:bg-slate-600 mt-3 dark:border-slate-600"
            type="text"
            placeholder="e.g. John Doe"
 
          />
        </div>

        <div className="mt-3">
          <label
            htmlFor="email"
            className="poppins-medium ml-1 text-slate-600 dark:text-slate-300"
          >
            Email Address
          </label>
          <input
            id="email"
            className="border border-black px-3 py-2 w-[350px] rounded-2xl bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-blue-500 dark:bg-slate-600 mt-3 dark:border-slate-600"
            type="email"
            placeholder="example@gmail.com"

          />
        </div>

        <div className="mt-3">
          <label
            htmlFor="phonenumber"
            className="poppins-medium ml-1 text-slate-600 dark:text-slate-300"
          >
            Phone Number
          </label>
          <input
            id="phonenumber"
            className="border border-black px-3 py-2 w-[350px] rounded-2xl bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-blue-500 dark:bg-slate-600 mt-3 dark:border-slate-600"
            type="tel"
            placeholder="+91 9876543210"
 
          />
        </div>

        <div className="mt-3">
          <label
            htmlFor="assistance"
            className="poppins-medium ml-1 text-slate-600 dark:text-slate-300"
          >
            Assistance Needed
          </label>
          <textarea
            id="assistance"
            className="border border-black px-3 py-2 w-[350px] rounded-xl bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-blue-500 dark:bg-slate-600 mt-3 dark:border-slate-600"
            placeholder="Describe the type of assistance you need"

          />
        </div>

        <div className="mt-3">
          <label
            htmlFor="document"
            className="poppins-medium ml-1 text-slate-600 dark:text-slate-300"
          >
            Upload Document
          </label>
          <input
            id="document"
            type="file"
            className="border border-black px-3 py-2 w-[350px] rounded-2xl bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-blue-500 dark:bg-slate-600 mt-3 dark:border-slate-600"
     
          />
        </div>

        <button
          type="submit"
          className="ml-[60px] mt-6 w-[220px] active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg font-semibold"
        >
          Request
        </button>
       </form>
       </div>
     </div> 
     <FAQSection/>
    </div>
  </div>
   
     )
  }

  


  