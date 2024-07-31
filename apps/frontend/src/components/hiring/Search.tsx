
export default function Search() {
  return (
    <div className="h-[500px] mt-[6vh]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto ">
      <div className="text-center mb-8 ">
        <h1 className="text-5xl text-slate-800 font-bold mb-2">Hire a Skilled<span className="text-blue-500"> Member </span></h1>
        <p className="text-gray-600 mt-5">
          Search for workers by name, specialty, or condition
          from our comprehensive list of experts.
        </p>
      </div>
      </div>
      <div className="mt-10 bg-blue-400 text-white px-8 py-5 rounded-3xl shadow-2xl w-full max-w-4xl ml-[40vh] ">
        <div className="flex flex-col md:flex-row items-center md:space-x-4">
          <div className="flex-1 mb-4 md:mb-0">
            <label className="block mb-2">Select Area</label>
            <select className="w-full p-2 rounded-2xl bg-white text-gray-800">
              <option>Golapbag</option>
              <option>Kanchannagar</option>
              <option>BadamTala</option>
              <option>Borehat</option>
            </select>
          </div>
          <div className="flex-1 mb-4 md:mb-0">
            <label className="block mb-2">Select Date</label>
            <input
              type="date"
              className="w-full p-2 rounded-2xl bg-white text-gray-800"
            />
          </div>
          <div className="flex-1 mb-4 md:mb-0">
            <label className="block mb-2">Search Worker by</label>
            <input
              type="text"
              placeholder="Type of Worker You Need"
              className="w-full p-2 rounded-2xl bg-white text-gray-800"
            />
          </div>
          <button className=" mt-6 w-[100px] active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg font-semibold">
            Search
          </button>
        </div>
      </div>
    </div>
  )
}
