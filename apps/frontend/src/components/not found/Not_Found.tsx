import Not_img from "../../assets/error-page.svg"
export default function Not_Found() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] dark:bg-slate-900  bg-cover">
        <div className="w-full h-[650px] md:block">
          <img
            className="w-full mt-[110px] ml-2 h-[500px]"
            src={Not_img}
            alt="Register illustration"
          />
        </div>
      
    </div>
  )
}
