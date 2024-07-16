import { useState } from "react";
import log_img from '../assets/forgot-password-animate.svg'

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
    <main className='w-full h-screen flex' >
    <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[500px] sm:max-w-[900px] rounded-2xl'>
       <div className='w-full  h-[450px] hidden md:block '>
         <img className="w-full mt-4 ml-2 h-[380px]" src={log_img} alt="/" />   
       </div>
       <div className='p-4 flex mr-[100px]'> 
           <form>
               <h2 className='text-4xl font-medium text-center mb-10'>Forgot <span className='text-blue-700'>Password</span></h2>
               <div >
               <label className="poppins-medium ml-1 text-slate-600">New Password</label>
                   <input 
                   className='border px-3 py-2 w-[350px] rounded-xl bg-slate-100 mt-2' 
                   type='password' 
                   placeholder='Enter New Password' 
                   value={password}
                   onChange={handlePasswordChange}
                   />
               
               </div>               
               <div className="mt-5">
                   <label className="poppins-medium ml-1 text-slate-600">Confirm Password</label>
                   <input 
                   className='border px-3 py-2 w-[350px] rounded-xl bg-slate-100 mt-2' 
                   type='password' 
                   placeholder='Confirm Your Password' 
                   value={confirmpassword}
                   onChange={handleConfirmPasswordChange}
                   />
               
               </div>
               <button 
               className=" w-44 mt-7 ml-24 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-3 rounded-3xl  bg-gradient-to-r from-blue-700 to-blue-500  text-white  poppins-extrabold"
               key="1"
               >Update Password
               </button>               

               </form>
       </div>
    </div>
</main>

  );


}