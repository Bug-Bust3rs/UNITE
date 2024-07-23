import { useState, ChangeEvent, FormEvent } from 'react';
import { useAuthContext } from "../hooks/useAuthContext";
interface FormData {
  cName?: string;
  companyMail?: string;
  companyWebsite: string;
  companyAddress: string;
  location: string;
  description: string;
  logo: File | null;
}

const ProfileSetup = () => {

  const {state} = useAuthContext()
  
  const [formData, setFormData] = useState<FormData>({
    cName: state.user?.name,
    companyMail: state.user?.email,
    companyWebsite: '',
    companyAddress: '',
    location: '',
    description: '',
    logo: null,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({ ...formData, logo: file });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover dark:bg-gray-900"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1532423622396-10a3f979251a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80)',
      }}
    >
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10 dark:bg-gray-800">
        <div className="grid gap-8 grid-cols-1">
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row items-center">
              <h2 className="font-semibold text-4xl mr-auto dark:text-white">Profile </h2>
              <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
            </div>
            <div className="mt-5">
              <form onSubmit={handleSubmit}>
                <div className="md:space-y-2 mb-3">
                  <label className="text-xl font-semibold text-gray-600 py-2 dark:text-gray-300">
                     Hey, {state.user?.name}<abbr className="hidden" title="required">*</abbr>
                  </label>
                  <div className="flex items-center py-6">
                    <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                      {formData.logo && (
                        <img
                          className="w-12 h-12 mr-4 object-cover"
                          src={URL.createObjectURL(formData.logo)}
                          alt="Avatar Upload"
                        />
                      )}
                    </div>
                    <label className="cursor-pointer">
                      <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-blue-400 hover:bg-blue-500 hover:shadow-lg">
                        Upload
                      </span>
                      <input type="file" className="hidden" onChange={handleFileChange} />
                    </label>
                  </div>
                </div>
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2 dark:text-gray-300">
                      Your Name <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="Name"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 dark:bg-gray-700 dark:text-white"
                      required
                      type="text"
                      name="cName"
                      value={formData.cName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2 dark:text-gray-300">
                      Your Mail <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="Email ID"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 dark:bg-gray-700 dark:text-white"
                      required
                      type="email"
                      name="companyMail"
                      value={formData.companyMail}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold text-gray-600 py-2 dark:text-gray-300">Your Any Social</label>
                  <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                    <div className="flex">
                      <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center text-xl rounded-lg text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </div>
                    <input
                      type="url"
                      className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow dark:bg-gray-700 dark:text-white"
                      placeholder="https://"
                      name="companyWebsite"
                      value={formData.companyWebsite}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                  <div className="w-full flex flex-col mb-3">
                    <label className="font-semibold text-gray-600 py-2 dark:text-gray-300">Your Address</label>
                    <input
                      placeholder="Address"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 dark:bg-gray-700 dark:text-white"
                      type="text"
                      name="companyAddress"
                      value={formData.companyAddress}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full flex flex-col mb-3">
                    <label className="font-semibold text-gray-600 py-2 dark:text-gray-300">
                      Your Service<abbr title="required">*</abbr>
                    </label>
                    <select
                      className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full dark:bg-gray-700 dark:text-white"
                      required
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                    >
                      <option value="USER">USER</option>
                      <option value="CHARITY ">CHARITY </option>
                      <option value="ELECTRICIAN">ELECTRICIAN</option>
                      <option value="PLUMBER">PLUMBER</option>
                      <option value="CARPENTER">CARPENTER</option>
                    </select>
                  </div>
                </div>
                <div className="flex-auto w-full mb-1 text-xs space-y-2">
                  <label className="font-semibold text-gray-600 py-2 dark:text-gray-300">Description</label>
                  <textarea
                    required
                    name="description"
                    className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg py-4 px-4 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your description"
                    value={formData.description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                  <button
                    type="submit"
                    className="mb-2 md:mb-0 bg-blue-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-blue-500"
                  >
                    Update
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

export default ProfileSetup;