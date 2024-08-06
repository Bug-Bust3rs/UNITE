import OfferReqForm from "./OfferReq.tsx";
// import Pevoffer from "./Pevoffer.tsx";




export default function Offer() {
  return (
    <main className="bg-[url('https://pagedone.io/asset/uploads/1691055810.png')]  bg-center bg-cover">
      <div className="flex flex-col sm:flex-row w-auto lg:w-[80%] mx-auto pt-10 lg:pt-[100px] min-h-screen ">
      {/* <div className="min-h-screen justify-center items-center w-full  flex flex-col">
        <div className="mt-2">
         <Pevoffer/>
        </div> */}
      <div className="mt-10">
      <OfferReqForm/>
      </div>  
      {/* </div> */}
    </div>
  
</main>



)
}
