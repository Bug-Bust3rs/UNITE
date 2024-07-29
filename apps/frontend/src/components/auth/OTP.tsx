import { useState, useRef } from 'react';
import log_img from '../../assets/enter-otp-animate.svg';
import { useVerifyLogin } from '../../hooks/useLoginVerify';
import { useParams } from 'react-router-dom';
import { useToast } from '../ui/use-toast';

export default function OTP() {
  const { verify, error, isLoading, isSucess } = useVerifyLogin();
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  let { userId } = useParams();
  const {toast} = useToast();
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = event.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

     
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
  
    const verifydata = { email:userId, otp: otp.join('') };
    await verify(verifydata);
    toast({ description: 'Login successfully!' ,  title : "OTP Verifyed !" } ,);
  };

  return (
    <div className="w-full h-screen flex flex-col bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] dark:bg-slate-900 bg-center bg-cover">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[350px] sm:max-w-[800px] rounded-2xl">
        <div className="w-full h-[350px] hidden md:block">
          <img className="w-full h-[100%]" src={log_img} alt="OTP" />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <h2 className="text-4xl font-medium poppins-medium text-center mb-4 mr-4 dark:text-white">
            Enter Your <span className="text-blue-500">OTP</span>
          </h2>
          <p className="justify-center items-center dark:text-gray-300 mb-4">
            Enter the OTP sent to your registered email address to verify your identity and
            continue.
          </p>
          <div className="flex flex-col space-y-12">
            <div className="flex flex-row items-center justify-between mx-auto w-full max-w-[27rem]">
              {otp.map((digit, index) => (
                <div key={index} className="w-12 h-14">
                  <input
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border border-gray-600 text-lg bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-blue-500 dark:bg-slate-600 dark:text-white dark:focus:bg-slate-500"
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-7">
            <button

              onClick={handleVerify}
              disabled={isLoading}
              className=" flex flex-row items-center justify-center text-center w-full border rounded-3xlactive:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg font-semibold"

            >
             {isLoading ?<p>Verifying..</p>:  <p>Verify Account</p>}
            </button>
          </div>
          <div className="mt-5">
            <button
              className=" flex flex-row items-center justify-center text-center w-full border rounded-3xl py-3 bg-white border-black text-black shadow-sm text-base font-semibold"
            >
              <p>Resend OTP</p>
            </button>
          </div>
        </div>
        {error && (
            <div className="bg-rose-200 text-rose-500 p-5 rounded-lg mt-4">
              {error}
            </div>
          )}
          {isSucess && (
            <div className="bg-green-200 text-green-500 p-5 rounded-lg mt-4">
              Successfully logged in!
            </div>
          )}
      </div>
    </div>
  );
}