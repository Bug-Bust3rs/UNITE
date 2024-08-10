import { useState } from "react";
import log_img from '../../assets/forgot-password-animate.svg';

export default function ForgotPassword(): JSX.Element {
  const [password, setPassword] = useState<string>("");
  const [confirmpassword, confirmPassword] = useState<string>("");

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    confirmPassword(event.target.value);
  };

  return (
    <main className="w-full min-h-[100vh] flex bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] dark:bg-slate-900  bg-cover">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto px-2 py-2 h-[400px] sm:max-w-[850px] rounded-2xl dark:bg-slate-700 ">
        <div className="w-full h-[450px] hidden md:block">
          <img className="w-full mt-4 ml-2 h-[380px]" src={log_img} alt="Forgot Password" />
        </div>
        <div className="p-4 flex mr-[100px]">
          <form>
            <h2 className="text-4xl font-medium text-center mb-10 dark:text-white">
              Forgot <span className="text-blue-700">Password</span>
            </h2>
            <div>
              <label className="poppins-medium ml-1 text-slate-600 dark:text-gray-300">New Password</label>
              <input
                className="border px-3 py-2 w-[350px] rounded-xl bg-slate-100 mt-2 dark:bg-slate-700 dark:text-white"
                type="password"
                placeholder="Enter New Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="mt-5">
              <label className="poppins-medium ml-1 text-slate-600 dark:text-gray-300">Confirm Password</label>
              <input
                className="border px-3 py-2 w-[350px] rounded-xl bg-slate-100 mt-2 dark:bg-slate-700 dark:text-white"
                type="password"
                placeholder="Confirm Your Password"
                value={confirmpassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
            <button
              className="w-44 mt-7 ml-[90px] active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-3 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 text-white poppins-extrabold"
              key="1"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}