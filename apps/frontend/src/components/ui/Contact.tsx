import { useState } from "react";
import req_img from "../../assets/contact-us-animate (1).svg";


export default function Contact(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phonenumber, setPhonenumber] = useState<string>("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePhonenumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhonenumber(event.target.value);
  };

  const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="pt-8 mt-[100px] lg:mt-0 lg:pt-22 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] dark:bg-slate-900 bg-center bg-cover">
    <div className="w-full min-h-[110vh] flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[620px] sm:max-w-[900px]">
        <div className="w-full h-[450px] hidden md:block">
          <img
            className="w-full mt-[130px] ml-2 h-[380px]"
            src={req_img}
            alt="Contact Ilustration"
          />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <form onSubmit={handleClick}>
            <div className="mt-3">
              <label className="poppins-medium ml-1 text-slate-600 dark:text-slate-300">Full Name</label>
              <input
                className="border px-4 py-2 w-[480px] rounded-xl bg-slate-100 dark:bg-slate-600 mt-3 dark:border-slate-600"
                type="username"
                placeholder="eg. John Doe"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="mt-3">
              <label className="poppins-medium ml-1 text-slate-600 dark:text-slate-300">Email Address</label>
              <input
                className="border px-4 py-2 w-[480px] rounded-xl bg-slate-100 dark:bg-slate-600 mt-3 dark:border-slate-600"
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mt-3">
              <label className="poppins-medium ml-1 text-slate-600 dark:text-slate-300">Subject</label>
              <input
                className="border px-3 py-2 w-[480px] rounded-xl bg-slate-100 dark:bg-slate-600 mt-3 dark:border-slate-600"
                type="phone"
                placeholder="Your Subject"
                value={phonenumber}
                onChange={handlePhonenumberChange}
              />
            </div>
            <div className="mt-3">
              <label className="poppins-medium ml-1 text-slate-600 dark:text-slate-300">Message</label>
              <textarea
                className="border py-2 px-4 resize-none text-base w-[480px] h-[100px] rounded-xl bg-slate-100 dark:bg-slate-600 mt-3 dark:border-slate-600"
                placeholder="Your Message"    
              />
            </div>
            <button
              className="ml-[40vh] mt-[5vh] w-[180px] active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg font-semibold poppins-extrabold"
              key="1"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      </div>
    </main>
  );
}