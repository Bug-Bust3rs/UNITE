import logo from "/Unite__Logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 relative flex items-center justify-center pb-10">
      <footer className="bg-transparent rounded-lg m-4 mx-auto w-[80%] z-10">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} height={50} width={50} alt="logo" />
              <h2 className="text-2xl font-bold text-black dark:text-white">
                UNITE
              </h2>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black dark:text-gray-300 sm:mb-0">
              <li>
                <Link to="/" className="hover:underline me-4 md:me-6">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/hiring" className="hover:underline me-4 md:me-6">
                  Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline me-4 md:me-6">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-400 dark:border-gray-600 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-black dark:text-gray-300 sm:text-center">
            © Design And Developed By{" "}
            <Link to="/" className="hover:underline">
              Bug_Busters™
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;