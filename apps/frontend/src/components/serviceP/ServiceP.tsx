import log_img from "../../assets/delivery-animate.svg"

export default function ServiceP() {
  return (
    <div className="mt-[10vh] bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] dark:bg-slate-900  bg-cover">
      <div>
        <div>
        <section className="w-full py-3 sm:py-8 lg:py-15">
          <div className="container px-2 md:px-4">
            <div className="grid gap-1 lg:grid-cols-[1fr_300px] lg:gap-2 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-5 ml-[80px] ">
                  <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl xl:text-5xl/none">
                    Elevate Your Work with Our Comprehensive Services
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    At Acme Services, we offer a wide range of solutions to help your work thrive. From strategy and
                    design to development and support, our team of experts is dedicated to delivering exceptional
                    results.
                  </p>
                </div>
              </div>
              <img
                src={log_img}
                width="350"
                height="350"
                alt="Services"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        </div>
        <h1 className=" ml-[75vh] font-semibold justify-center items-center text-5xl">Provide Your<span className="text-blue-600"> Service</span></h1>
      </div>
      <div className="w-full max-w-4xl mx-auto mt-10 mb-10">
      <div className="border rounded-lg shadow-md">
        <div className="p-4">
          <form className="grid gap-6">
            <div className="grid grid-cols-2 gap-6 items-end">
              <div className="space-y-2">
                <label htmlFor="job-type" className="ml-2 block font-medium">
                  Job Type
                </label>
                <div className="relative">
                <select
                      className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full dark:bg-gray-700 dark:text-white"
                      required
                      name="location"
                    >

                      <option value="ELECTRICIAN">ELECTRICIAN</option>
                      <option value="PLUMBER">PLUMBER</option>
                      <option value="CARPENTER">CARPENTER</option>
                    </select>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="location" className="mt-2 block font-medium">
                  Location
                </label>
                <div className="flex items-center">
                  <input
                    id="location"
                    type="text"
                    placeholder="Enter job location"
                    className="flex-1 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                  />
                  <button
                    type="button"
                    className="ml-2 flex items-center active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all px-3 py-2 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg "
                  >
                    Get Current Location
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="job-description" className="mt-2 block font-medium">
                Job Description
              </label>
              <textarea
                id="job-description"
                placeholder="Describe the job"
                rows={5}
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="author-id" className="block font-medium">
                Author ID
              </label>
              <input
                id="author-id"
                type="text"
                placeholder="Enter your ID"
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
          </form>
        </div>
        <div className="p-4 flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg font-semibold"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}