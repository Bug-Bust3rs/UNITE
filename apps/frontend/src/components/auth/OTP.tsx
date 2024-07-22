import log_img from '../../assets/enter-otp-animate.svg';

export default function OTP() {
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
              <div className="w-12 h-14">
                <input
                  className="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border border-gray-600 text-lg bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-blue-500 dark:bg-slate-600 dark:text-white dark:focus:bg-slate-500"
                  type="text"
                  maxLength={1}
                />
              </div>
              <div className="w-12 h-14">
                <input
                  className="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border border-gray-600 text-lg bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-blue-500 dark:bg-slate-600 dark:text-white dark:focus:bg-slate-500"
                  type="text"
                  maxLength={1}
                />
              </div>
              <div className="w-12 h-14">
                <input
                  className="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border border-gray-600 text-lg bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-blue-500 dark:bg-slate-600 dark:text-white dark:focus:bg-slate-500"
                  type="text"
                  maxLength={1}
                />
              </div>
              <div className="w-12 h-14">
                <input
                  className="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border border-gray-600 text-lg bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-blue-500 dark:bg-slate-600 dark:text-white dark:focus:bg-slate-500"
                  type="text"
                  maxLength={1}
                />
              </div>
              <div className="w-12 h-14">
                <input
                  className="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border border-gray-600 text-lg bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-blue-500 dark:bg-slate-600 dark:text-white dark:focus:bg-slate-500"
                  type="text"
                  maxLength={1}
                />
              </div>
              <div className="w-12 h-14">
                <input
                  className="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border border-gray-600 text-lg bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-blue-500 dark:bg-slate-600 dark:text-white dark:focus:bg-slate-500"
                  type="text"
                  maxLength={1}
                />
              </div>
            </div>
          </div>
          <div className="mt-7">
            <button
              className="flex flex-row items-center justify-center text-center w-full border rounded-3xl hover:bg-cyan-400 outline-none py-3 bg-cyan-500 border-none text-white shadow-sm text-base font-semibold poppins-extrabold"
            >
              <p>Verify Account</p>
            </button>
          </div>
          <div className="mt-7">
            <button
              className=" flex flex-row items-center justify-center text-center w-full border rounded-3xl py-3 bg-white border-black text-black shadow-sm text-base font-semibold poppins-extrabold"
            >
              <p>Resend OTP</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}