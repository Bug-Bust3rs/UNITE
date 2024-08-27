
import { Link } from "react-router-dom"

import { SVGProps } from "react"

import req_img from "../../assets/contact-us-animate (1).svg";


export default function OfferReq() {

const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
};
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-2 md:py-5 lg:py-5">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tighter text-slate-800 md:text-5xl/tight dark:text-white">Offer <span className="text-blue-500"> Support</span></h1>
            <p className="mx-auto max-w-[700px] text-slate-400 md:text-xl lg:text-base xl:text-xl dark:text-white">
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
            <p className="text-muted-foreground  dark:text-white">Speak with one of our support representatives by phone.</p>
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
            <p className="text-muted-foreground  dark:text-white">Chat with a support agent or community member in real-time.</p>
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
            <p className="text-muted-foreground  dark:text-white">Send us an email and we'll get back to you and help you.</p>
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
            <p className="text-muted-foreground  dark:text-white ">Browse our library of articles and guides you how to help.</p>
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
            <p className="text-muted-foreground  dark:text-white ">Open a support offer to help the community and we'll assist you.</p>
            <Link
              to="#"
              className="inline-flex h-9 items-center justify-center bg-primary px-4 py-2 text-sm active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold"
           
            >
              Submit Ticket
            </Link>
          </div>
          <div className="flex flex-col items-start gap-2 rounded-xl bg-card p-6 shadow-2xl">
            <CalendarIcon className="size-6 text-primary" />
            <h3 className="text-lg font-medium ">Schedule a Social Work</h3>
            <p className="text-muted-foreground dark:text-white">Book a time to speak with a support representative.</p>
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
            <h2 className="text-3xl font-bold tracking-tighter text-slate-800 md:text-5xl/tight dark:text-white">Contact <span className="text-blue-600">Us</span></h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-white">
              Have a question or need help? Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="w-full flex">
           <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-full h-[450px] md:block">
          <img
            className="w-full h-[380px]"
            src={req_img}
            alt="Contact Ilustration"
          />
        </div>
        <div className="p-5 ">
        <form onSubmit={handleClick}>
        <div className="mr-[35vh]">
         <input
           id="fullName"
           name="fullName"
           className="border px-4 py-2 mt-4  w-[400px] rounded-xl bg-slate-100 dark:bg-slate-600 dark:border-slate-600 "
           type="text"
           placeholder="Enter your Name"
            />
         <input
         id="email"
         name="email"
         className="border px-4 py-2 mt-4 w-[400px] rounded-xl bg-slate-100 dark:bg-slate-600 dark:border-slate-600"
         type="email"
         placeholder="Enter your email address"
         />

         <input
         id="subject"
         name="subject"
         className="border px-3 py-2 mt-4 w-[400px] rounded-xl bg-slate-100 dark:bg-slate-600 dark:border-slate-600"
         type="text"
         placeholder="Enter Your Subject"
         />

       <textarea
        id="message"
        name="message"
        className="border py-2 px-4 mt-4 resize-y text-base w-[400px] h-[100px] rounded-xl bg-slate-100 dark:bg-slate-600 dark:border-slate-600"
        placeholder="Describe Your Message"
        />
     </div>

  <button
    type="submit"
    className="mt-[5vh] mr-[20vh] w-[180px] active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg font-semibold poppins-extrabold"
  >
    Submit
         </button>
    </form>


        </div>
      </div>
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


