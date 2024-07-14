import { useState } from "react";
import reg_img from "../assets/mobile-login-animate.svg";
import { Link } from "react-router-dom";

export default function Register(): JSX.Element {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [username, setName] = useState<string>("");
    const [phonenumber, setPhonenumber] = useState<string>("");
  
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };
    const handlePhonenumberChange = (
      event: React.ChangeEvent<HTMLInputElement>) => {
      setPhonenumber(event.target.value);
    };
  
    const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    };
    return (
      <main className="w-full h-screen flex">
        <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[520px] sm:max-w-[900px] rounded-2xl">
          <div className="w-full  h-[450px] hidden md:block ">
            <img
              className="w-full mt-[100px] ml-2 h-[380px]"
              src={reg_img}
              alt="/"
            />
          </div>
          <div className="p-4 flex flex-col justify-around">
            <form onSubmit={handleClick}>
              <h2 className="text-4xl font-medium text-center mb-8 mr-10">
                Create <span className="text-blue-600">Account</span>
              </h2>
              <div className="mt-3">
              <label className="poppins-medium ml-1 text-slate-600">Enter Username</label>
                <input
                  className="border px-3 py-2 w-[350px] rounded-xl bg-slate-100 mt-3"
                  type="username"
                  placeholder="eg.John Doe"
                  value={username}
                  onChange={handleNameChange}
                />
              </div>
              <div className="mt-3">
              <label className="poppins-medium ml-1 text-slate-600">Email Address</label>
                <input
                  className="border px-3 py-2 w-[350px] rounded-xl bg-slate-100 mt-3 "
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
  
              <div className="mt-3">
              <label className="poppins-medium ml-1 text-slate-600">Phone Number</label>
                <input
                  className="border px-3 py-2 w-[350px] rounded-xl bg-slate-100 mt-3"
                  type="phone"
                  placeholder="+91 9876543210"
                  value={phonenumber}
                  onChange={handlePhonenumberChange}
                />
              </div>
  
              <div className='mt-3'>
              <label className="poppins-medium ml-1 text-slate-600">Enter Password</label>
                <input
                  className="border px-3 py-2 w-[350px] rounded-xl bg-slate-100 mt-3"
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button
                className=" ml-[60px] mt-4 w-[230px] active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500  text-white text-lg font-semibold poppins-extrabold"
                key="1"
              >
                Register
              </button>
  
              <div className="mt-6 flex ml-[55px]">
                <p className="font-medium text-base">Already have an account ?</p>
                <button className="text-blue-500 text-base font-normal ml-2 ">
                  <Link to="/login">Login</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
}