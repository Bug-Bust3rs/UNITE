import book from "../../assets/book feed.png"
import { Pencil } from 'lucide-react';
import { Trash2 } from 'lucide-react';


export default function Pevoffer() {
  return (
    <main>
      <h2 className="ml-[190px] text-3xl font-semibold">Your Previous<span className="text-blue-500"> Offers</span></h2>
       <div className="mt-[20px] w-[700px] h-[100px] px-3 py-2 bg-gradient-to-r from-slate-100 to-slate-200 rounded-3xl dark:bg-slate-800 shadow-lg active:duration-100 hover:scale-[1.17] ease-in-out transition-all">
          <div className="flex justify-between">
            <div className="p-3 flex gap-4">
              <img src={book} className="h-[50px] w-[50px]"/>
            <h2 className="mt-2 text-2xl font-semibold">FreeBook Distribution</h2>
            </div>
            <div className="flex text-end gap-[60px] text-slate-700 mt-6 mr-[50px] cursor-pointer">
            <Pencil/>
            <Trash2/>
          </div>
       </div>
     </div>
     <div className="mt-[20px] w-[700px] h-[100px] px-3 py-2 bg-gradient-to-r from-slate-100 to-slate-200 rounded-3xl dark:bg-slate-800 shadow-lg active:duration-100 hover:scale-[1.17] ease-in-out transition-all">
      <div className="flex justify-between">
        <div className="p-3 flex gap-4">
            <img src={book} className="h-[50px] w-[50px]"/>
           <h2 className="mt-2 text-2xl font-semibold">FreeBook Distribution</h2>
        </div>
        <div className="flex text-end gap-[60px] text-slate-700 mt-6 mr-[50px] cursor-pointer">
         <Pencil/>
         <Trash2/>
        </div>
      </div>
    </div>
    </main>
  )
}
