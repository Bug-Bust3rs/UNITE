// const OfferReqForm= () => {

//     return (
//       <div>
//         <h2 className="mt-5 ml-[210px] text-3xl font-semibold">New Offer<span className="text-blue-500" > Request</span></h2>
//         <div className="justify-center items-center w-[700px] h-[450px] p-10 bg-slate-100  dark:bg-slate-800 mt-5 mb-14 shadow-lg rounded-2xl hover:scale-[1.05]">
//           <div className="grid gap-8 grid-cols-1">
//             <div className="flex flex-col">
//               <div className="mt-2">
//                 <form>
//                   <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
//                   <div className="w-full flex flex-col mb-3">
//                       <label className="font-semibold text-gray-600 py-2 dark:text-gray-300  ml-2">
//                         Your Role<abbr title="required"/>*
//                       </label>
//                       <select
//                         className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full dark:bg-gray-700 dark:text-white"
//                         required
//                         name="role"
//                       >
//                         <option value="">Choose</option>
//                         <option value="">Owner</option>
//                         <option value="">Member</option>
  
//                       </select>
//                     </div> 
//                     <div className="w-full flex flex-col mb-3">
//                       <label className="font-semibold text-gray-600 py-2 dark:text-gray-300 ml-2">
//                         Category<abbr title="required"/>*
//                       </label>
//                       <select
//                         className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full dark:bg-gray-700 dark:text-white"
//                         required
//                         name="Category"
//                       >
//                         <option value="">Choose </option>
//                         <option value="">A</option>
//                         <option value="">B</option>
//                         <option value="">C</option>
//                         <option value="">D</option>
//                       </select>
//                     </div>
//                     <div className="w-full flex flex-col mb-3">
//                       <label className="font-semibold text-gray-600 py-2 dark:text-gray-300 ml-2">
//                         Cost<abbr title="required"/>*
//                       </label>
//                       <select
//                         className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full dark:bg-gray-700 dark:text-white"
//                         required
//                         name="role"
//                       > 
//                         <option value="">Choose</option>
//                         <option value="">Free</option>
//                         <option value="">Paid</option>
  
//                       </select>
//                     </div> 
//                     <div className="w-full flex flex-col mb-3">
//                       <label className="font-semibold text-gray-600 py-2 dark:text-gray-300 ml-2">
//                         Your Role<abbr title="required"/>*
//                       </label>
//                       <select
//                         className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full dark:bg-gray-700 dark:text-white"
//                         required
//                         name="role"
//                       >
//                         <option value="">Choose</option>     
//                         <option value="">Owner</option>
//                         <option value="">Member</option>
  
//                       </select>
//                     </div> 
//                   </div>
//                   <div className="text-xs">
//                   <div className="w-full flex flex-col mb-3">
//                       <label className="font-semibold text-gray-600 py-2 dark:text-gray-300 ml-2">
//                         Upload Your Post
//                       </label>
//                   </div>
//                   <div className="flex w-full text-xs">    
//                     <input
//                     className="border ml-2 w-[230px]  bg-white"
//                     type="file"
//                      />
//                   <button
//                       type="submit"
//                       className="w-[80px] mb-2 ml-3 md:mb-0 bg-blue-400 px-1 py-1 text-xs font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-blue-500"
//                     >
//                       Upload
//                     </button>
//                     </div>
//                  </div>

//                  <div className="w-full flex flex-col mb-2 text-xs">
//                     <label className="font-semibold text-gray-600 py-2 dark:text-gray-300 ml-2">Your Address<abbr title="required"/>*</label>
//                   </div>
//                   <div className="flex w-full text-xs"> 
//                     <input
//                     className="border ml-2 w-[230px] p-2 bg-white rounded-lg"
//                     type="location"
//                      />
//                     <button></button> 
//                   </div>

//                   <div className="flex-auto w-full mt-3 mb-1 text-xs space-y-2">
//                     <label className="font-semibold text-gray-600 py-2 dark:text-gray-300 ml-2">Offer Description</label>
//                     <textarea
//                       required
//                       name="description"
//                       className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg py-4 px-4 dark:bg-gray-700 dark:text-white"
//                       placeholder="Enter your description"
//                     ></textarea>  
//                   </div>
//                   <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
//                     <button
//                       type="submit"
//                       className="mt-5 mr-[245px] justify-center text-center w-[150px] border rounded-3xl active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg font-semibold"
//                     >
//                       Request →
//                     </button>


//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default OfferReqForm;


import { Link } from "react-router-dom"

import { SVGProps } from "react"


export default function Component() {

const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
};
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-2 md:py-5 lg:py-5">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tighter text-slate-800 md:text-5xl/tight">Offer <span className="text-blue-500"> Support</span></h1>
            <p className="mx-auto max-w-[700px] text-slate-400 md:text-xl lg:text-base xl:text-xl">
              We're here to help. Choose from our support options or contact us directly.
            </p>
          </div>
          <Link
            to="#"
            className="ml-[175px] mt-[20px] inline-flex items-center justify-center w-[310px] active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg font-semibold"
           
          >
            Get Support
          </Link>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
          <div className="flex flex-col items-start gap-2 rounded-xl bg-card p-6 shadow-2xl">
            <PhoneIcon className="size-6 text-primary" />
            <h3 className="text-lg font-medium">Phone Support</h3>
            <p className="text-muted-foreground">Speak with one of our support representatives by phone.</p>
            <Link
              to="#"
              className="inline-flex h-9 items-center justify-center bg-primary px-4 py-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white text-sm font-semibold"
        
            >
              Call Now
            </Link>
          </div>
          <div className="flex flex-col items-start gap-2 rounded-xl bg-card p-6 shadow-2xl">
            <WebcamIcon className="size-6 text-primary" />
            <h3 className="text-lg font-medium">Live Chat</h3>
            <p className="text-muted-foreground">Chat with a support agent or community member in real-time.</p>
            <Link
              to="#"
              className="inline-flex h-9 items-center justify-center  bg-primary px-4 py-2 text-sm active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white  font-semibold"
           
            >
              Start Chat
            </Link>
          </div>
          <div className="flex flex-col items-start gap-2 rounded-xl bg-card p-6 shadow-2xl">
            <MailIcon className="size-6 text-primary" />
            <h3 className="text-lg font-medium">Email Support</h3>
            <p className="text-muted-foreground">Send us an email and we'll get back to you and help you.</p>
            <Link
              to="#"
              className="inline-flex h-9 items-center justify-center bg-primary px-4 py-2 text-sm active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold"
           
            >
              Send Email
            </Link>
          </div>
          <div className="flex flex-col items-start gap-2 rounded-xl bg-card p-6 shadow-2xl">
            <BookIcon className="size-6 text-primary" />
            <h3 className="text-lg font-medium">Knowledge Base</h3>
            <p className="text-muted-foreground">Browse our library of articles and guides you how to help.</p>
            <Link
              to="#"
              className="inline-flex h-9 items-center justify-center bg-primary px-4 py-2 text-sm active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold"
           
            >
              View Knowledge Base
            </Link>
          </div>
          <div className="flex flex-col items-start gap-2 rounded-xl bg-card p-6 shadow-2xl">
            <TicketIcon className="size-6 text-primary" />
            <h3 className="text-lg font-medium">Submit a Offer</h3>
            <p className="text-muted-foreground">Open a support offer to help the community and we'll assist you.</p>
            <Link
              to="#"
              className="inline-flex h-9 items-center justify-center bg-primary px-4 py-2 text-sm active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold"
           
            >
              Submit Ticket
            </Link>
          </div>
          <div className="flex flex-col items-start gap-2 rounded-xl bg-card p-6 shadow-2xl">
            <CalendarIcon className="size-6 text-primary" />
            <h3 className="text-lg font-medium">Schedule a Social Work</h3>
            <p className="text-muted-foreground">Book a time to speak with a support representative.</p>
            <Link
              to="#"
              className="inline-flex h-9 items-center justify-center bg-primary px-4 py-2 text-sm active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold"
           
            >
              Schedule Call
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-2 md:py-5 lg:py-10">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter text-slate-800 md:text-5xl/tight">Contact <span className="text-blue-600">Us</span></h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a question or need help? Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="p-4 ml-[45vh] justify-center grid grid-cols-1 md:grid-cols-2">
          <form onSubmit={handleClick}>
            <div className="mt-3">
              <label className="poppins-medium ml-10 text-slate-600 dark:text-slate-300"> Enter your full Name</label>
              <input
                className="border px-4 py-2 w-[450px] rounded-xl bg-slate-100 dark:bg-slate-600 mt-3 dark:border-slate-600"
                type="username"
                placeholder="eg. John Doe"

              />
            </div>
            <div className="mt-3">
              <label className="poppins-medium ml-10 text-slate-600 dark:text-slate-300">Email Address</label>
              <input
                className="border px-4 py-2 w-[450px] rounded-xl bg-slate-100 dark:bg-slate-600 mt-3 dark:border-slate-600"
                type="email"
                placeholder="example@gmail.com"

              />
            </div>
            <div className="mt-3">
              <label className="poppins-medium ml-10 text-slate-600 dark:text-slate-300">Enter your Subject</label>
              <input
                className="border px-3 py-2 w-[450px] rounded-xl bg-slate-100 dark:bg-slate-600 mt-3 dark:border-slate-600"
                type="phone"
                placeholder="Your Subject"

              />
            </div>
            <div className="mt-3">
              <label className="poppins-medium ml-10 text-slate-600 dark:text-slate-300">Enter your Message</label>
              <textarea
                className="border py-2 px-4 resize-none text-base w-[450px] h-[100px] rounded-xl bg-slate-100 dark:bg-slate-600 mt-3 dark:border-slate-600"
                placeholder="Your Message"    
              />
            </div>
            <button
              className="ml-[10vh] mt-[5vh] w-[180px] active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg font-semibold poppins-extrabold"
              key="1"
            >
              Send →
            </button>
          </form>
          </div>
        </div>
      </section>
    </div>
  )
}

function BookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function TicketIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  )
}


function WebcamIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </svg>
  )
}


