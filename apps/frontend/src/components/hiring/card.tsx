// src/components/CancerCareCard.js

import { useState } from 'react';

const CancerCareCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-6 rounded-lg shadow-md transform transition-all duration-300 ${
        isHovered ? 'bg-gradient-to-r from-blue-700 to-blue-500 text-white' : 'bg-white text-blue-600'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center">
        <div className=" w-12 h-12 mb-4">
        </div>
        <h2 className="text-2xl font-bold mb-4">Carpentor</h2>
        <p className={`text-center ${isHovered ? 'text-white' : 'text-gray-700'}`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum ipsum voluptate fuga dolore dolor distinctio molestiae tenetur quisquam incidunt ex?
        </p>
        <a
          href="#"
          className={`mt-4 inline-block text-sm font-semibold underline ${
            isHovered ? 'text-white' : 'text-blue-600'
          }`}
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default CancerCareCard;
