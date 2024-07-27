import { Link } from "react-router-dom"
import verified from "../../assets/verified-animate.svg"
import verify from '../../../public/verify1.png'
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from "react";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}



export default function VerifiedPage() {

  const [verifyEmail, setVerifyEmail] = useState<boolean>(false)



  const query = useQuery();
  const token = query.get('token');
  let { userId } = useParams();
  return (
    <div className="w-full h-screen flex flex-col bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] dark:bg-slate-900 bg-center bg-cover">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[680px] sm:max-w-[800px]">

        <div className="p-4 justify-center">
          <div className="mt-[200px] font-bold text-3xl"><div className="flex gap-1  items-center">Successfullt verified! <img className="h-10 w-auto" src={verify} alt="Verify Badge" /> </div><span className="text-blue-400">puskarroy300@gmail.com</span></div>
          <button
            className="mt-5 justify-center text-center w-[150px] border rounded-3xl active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg font-semibold"><Link to="/login">Go to Login →</Link>
          </button>
        </div>
        <img className="w-full h-[100%] ml-14" src={verified} alt="Verified" />
      </div>
      {token} {userId}
    </div>
  )
}
