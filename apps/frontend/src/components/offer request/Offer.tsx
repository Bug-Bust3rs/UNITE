import OfferReqForm from "./OfferReq";
import Pevoffer from "./Pevoffer";
import Avatar from "../../assets/Avatar.png";


export default function Offer() {
  return (
    <div className="justify-center items-center w-full  flex flex-col bg-[url('https://pagedone.io/asset/uploads/1691055810.png')]  bg-center bg-cover">
      <div className="mt-[100px] rounded-2xl bg-slate-100 px-7 py-5">
        <img src={Avatar} alt="Avatar" className="w-[50px] h-[50px] ml-[100px]" />
      <h1 className="mt-5 text-4xl font-medium ">Hey! <span className="text-blue-500 font-semibold">Puskar Roy</span>
      </h1>
      </div>
      <h2 className="mt-10 text-3xl font-semibold">Your Previous Offers</h2>
      <div className="mt-6">
        <Pevoffer/>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">New Offer Request</h2>
      <div className="mt-5">
      <OfferReqForm/>
      </div>  
    </div>
  )
}
