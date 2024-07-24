const OfferReqForm= () => {

    return (
      <div>
        <div className=" w-full h-[500px] p-10 bg-slate-100  z-10 dark:bg-slate-800">
          <div className="grid gap-8 grid-cols-1">
            <div className="flex flex-col">
              <div className="mt-2">
                <form>
                  <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                  <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2 dark:text-gray-300">
                        Your Role<abbr title="required"/>*
                      </label>
                      <select
                        className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full dark:bg-gray-700 dark:text-white"
                        required
                        name="role"
                      >
                        <option value="">Choose</option>
                        <option value="">Owner</option>
                        <option value="">Member</option>
  
                      </select>
                    </div> 
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2 dark:text-gray-300">
                        Category<abbr title="required"/>*
                      </label>
                      <select
                        className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full dark:bg-gray-700 dark:text-white"
                        required
                        name="Category"
                      >
                        <option value="">Choose </option>
                        <option value="">A</option>
                        <option value="">B</option>
                        <option value="">C</option>
                        <option value="">D</option>
                      </select>
                    </div>
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2 dark:text-gray-300">
                        Cost<abbr title="required"/>*
                      </label>
                      <select
                        className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full dark:bg-gray-700 dark:text-white"
                        required
                        name="role"
                      > 
                        <option value="">Choose</option>
                        <option value="">Free</option>
                        <option value="">Paid</option>
  
                      </select>
                    </div> 
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2 dark:text-gray-300">
                        Your Role<abbr title="required"/>*
                      </label>
                      <select
                        className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full dark:bg-gray-700 dark:text-white"
                        required
                        name="role"
                      >
                        <option value="">Choose</option>     
                        <option value="">Owner</option>
                        <option value="">Member</option>
  
                      </select>
                    </div> 
                  </div>
                  <div className="text-xs">
                  <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2 dark:text-gray-300">
                        Upload Your Post
                      </label>
                  </div>
                  <div className="flex w-full text-xs">    
                    <input
                    className="border ml-2 w-[230px]  bg-white"
                    type="file"
                     />
                  <button
                      type="submit"
                      className="w-[80px] mb-2 ml-3 md:mb-0 bg-blue-400 px-1 py-1 text-xs font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-blue-500"
                    >
                      Upload
                    </button>
                    </div>
                 </div>
                  <div className="flex-auto w-full mt-3 mb-1 text-xs space-y-2">
                    <label className="font-semibold text-gray-600 py-2 dark:text-gray-300">Offer Description</label>
                    <textarea
                      required
                      name="description"
                      className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg py-4 px-4 dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your description"
                    ></textarea>
                  </div>
                  <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                    <button
                      type="submit"
                      className="mt-5 mr-[140px] justify-center text-center w-[150px] border rounded-3xl active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-1 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg font-semibold"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default OfferReqForm;