
import logo from "../../assets/Unite__Logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="w-full bg-slate-50 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center pb-10">
      <footer className="bg-transparent rounded-lg  m-4 mx-auto w-[80%] z-10">
        <div className="w-full max-w-screen-xl mx-auhref p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} height={50} width={50} alt="logo" />
              <h2 className={`text-2xl font-bold`}>
                  UNITE
              </h2>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 ">
              <li>
                <Link to="/" className="hover:underline me-4 md:me-6">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:underline me-4 md:me-6"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:underline me-4 md:me-6"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-400 sm:mx-auhref  lg:my-8" />
          <span className="block text-sm text-black sm:text-center ">
            © Design And Devloped By{" "}
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