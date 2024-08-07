import Adv from "./Adv"
import Searchbar from "./Search"
// import Appoitment from "./Appoitment"


export default function hired() {
  return (
    <div className=" pt-14 pb-24 mt-[100px] lg:mt-0 lg:pt-32 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] dark:bg-slate-900  bg-cover">
        <div className="">
            <Searchbar/>
        </div>
        <div>
         <Adv/>
        </div>
    </div>
  )
}





