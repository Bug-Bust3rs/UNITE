import { useState } from 'react';

interface CardProps {
  title: string;
  description: string;
}

const AdvCard : React.FC<CardProps> = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-6 w-[35vh] h-[50vh] rounded-2xl shadow-md transform transition-all duration-300 ${
        isHovered ? 'bg-gradient-to-r from-blue-700 to-blue-500 text-white' : 'bg-white text-blue-600'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center">
        <div className=" w-12 h-12 mb-4">
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className={`text-center ${isHovered ? 'text-white' : 'text-gray-700'}`}>
        {description}
        </p>
        <a
          href="#"
          className={`mt-4 inline-block text-sm font-semibold ${
            isHovered ? 'text-white' : 'text-blue-600'
          }`}
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default AdvCard;
