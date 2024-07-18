import { ThreeDCardDemo } from "./ThreeDCard";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const CardsSection = () => {


  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="flex justify-center items-center flex-col sm:flex-row gap-2 sm:gap-[10rem] w-[80%] sm:w-full">
      <div data-aos={'fade-right'}>
        <h1 className="font-manrope dark:text-white text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]text-center sm:text-left sm:text-6xl font-bold text-grey-900">
        If you need assistance <br /> 
          <span className={` font-extrabold text-blue-600`}>
            Unite
          </span> <br/>
          makes it   simple  to <br/>request help.
        </h1>
        {/* <p className="sm:max-w-lg md:text-base mt-8  text-center sm:text-left text-base font-normal leading-7 text-gray-500">
         
          <span className={` font-extrabold text-blue-600`}>
            Unite
          </span>{" "}
          CLI simplifies API project setup. It lets you create RESTful APIs
          swiftly, supporting various backend tech and DBs. Ideal for devs at
          any level
        </p> */}
      </div>
      <ThreeDCardDemo data-aos={'fade-left'} />
    </div>
  );
}

export default CardsSection