import { Link, useLocation, useParams } from "react-router-dom";
import verified from "../../assets/verified-animate.svg";
import verify from '../../../public/verify1.png';
import cross from '../../../public/cross.jpg'
import crossed from '../../../public/fail_verify.jpg'
import { useState, useEffect } from "react";
import axios from "axios";
import AuthLoder from "./AuthLoder";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function VerifiedPage() {
  const query = useQuery();
  const token = query.get('token');
  const { userId } = useParams();
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}/api/v0.1/auth/verify-email/${userId}/?token=${token}`);
      console.log(response.data);
      setVerifyEmail(true);
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId && token && !hasFetched) {
      fetchProfile();
      setHasFetched(true);
    }
  }, [userId, token, hasFetched]);

  return (
    <div className="w-full h-screen flex flex-col bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] dark:bg-slate-900 bg-center bg-cover">
      {loading && <AuthLoder/>}
      {!loading && verifyEmail && (
        <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[680px] sm:max-w-[800px]">
          <div className="p-4 justify-center">
            <div className="mt-[200px] font-bold text-3xl">
              <div className="flex gap-1 items-center">
                Successfully verified! <img className="h-10 w-auto" src={verify} alt="Verify Badge" />
              </div>
             
            </div>
            <button className="mt-5 justify-center text-center w-[150px] border rounded-3xl active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg font-semibold">
              <Link to="/login">Go to Login →</Link>
            </button>
          </div>
          <img className="w-full h-[100%] ml-14" src={verified} alt="Verified" />
          
        </div>
      )}
      {!loading && !verifyEmail && <div className="flex justify-center items-center flex-col-reverse  m-auto h-[680px] sm:max-w-[800px]">
          <div className="p-4 flex flex-col items-center justify-center">
            <div className="font-bold text-xl  lg:text-3xl">
              <div className="flex gap-1 flex-col lg:flex-row items-center">
              Verification failed or already verified <img className="h-12 w-auto" src={cross} alt="Verify Badge" />
              </div>
             
            </div>
            <button className="mt-5 justify-center text-center w-[150px] border rounded-3xl active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg font-semibold">
              <Link to="/login">Go to Login →</Link>
            </button>
          </div>
          <img className="h-[250px]  lg:h-[400px]  " src={crossed} alt="Verified" />
          
        </div>}
    </div>
  );
}