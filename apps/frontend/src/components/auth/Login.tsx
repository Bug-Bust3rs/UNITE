import { useState } from "react";
import log_img from "../../assets/login-animate.svg";
import { Link } from "react-router-dom";

export default function Login(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="w-full min-h-[110vh] flex dark:bg-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[450px] sm:max-w-[800px] rounded-2xl dark:bg-slate-700 bg-white">
        <div className="w-full h-[300px] hidden md:block">
          <img className="mt-12" src={log_img} alt="Login illustration" />
        </div>
        <div className="p-5 flex flex-col justify-around">
          <form onSubmit={handleClick}>
            <h1 className="text-4xl ml-[40px] font-medium mb-8 dark:text-white">Welcome<span className="text-blue-400"> Back!</span></h1>
            <div>
              <label className="poppins-medium ml-1 text-slate-600 dark:text-slate-300">Email Address</label>
              <input
                className="border px-3 py-2 w-[350px] rounded-xl bg-slate-100 dark:bg-slate-600 mt-3 dark:border-slate-600"
                type="text"
                placeholder="example@gmail.com"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mt-3">
              <label className="poppins-medium ml-1 text-slate-600 dark:text-slate-300">Enter Password</label>
              <input
                className="border px-3 py-2 w-[350px] rounded-xl bg-slate-100 dark:bg-slate-600 mt-3 dark:border-slate-600"
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="ml-56">
              <button className="mt-3 font-normal text-base text-blue-500"><Link to='/forgot-password'>Forgot Password?</Link></button>
            </div>
            <button
              className="ml-14 mt-3 w-[230px] active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg font-semibold poppins-extrabold"
              key="1"
            >
              <p>Log in</p>
            </button>
            <div className="mt-6 flex ml-[50px]">
              <p className="font-medium text-base dark:text-slate-300">Did not have an Account?</p>
              <button className="text-blue-500 text-base font-normal ml-2">
                <Link to="/register">Register</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
