import book from "../../assets/book feed.png"
import { Pencil } from 'lucide-react';
import { Trash2 } from 'lucide-react';


export default function Pevoffer() {
  return (
    <div className="mt-[10px] w-[700px] h-[100px] px-3 py-2 bg-indigo-200 rounded-2xl dark:bg-slate-800">
      <div className="flex justify-between">
        <div className="p-3 flex gap-4">
            <img src={book} className="h-[50px] w-[50px]"/>
           <h2 className="mt-2 text-2xl font-semibold">FreeBook Distribution</h2>
        </div>
        <div className="flex text-end gap-[60px] text-red-700 mt-5 mr-[50px]">
         <Pencil/>
         <Trash2/>
        </div>

      </div>
    </div>
  )
}
