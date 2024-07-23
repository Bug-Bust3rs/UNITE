// import React from 'react';
import book from "../../assets/book feed.png"
function Card() {
  return (
    <div className=" w-[500px] bg-white rounded shadow-md overflow-hidden">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Ram Ch</div>
        <p className="text-gray-700 text-base">
          Carpenter
        </p>
      </div>
      <img className="w-full" src={book} alt="Card Image" />
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi modi optio veritatis quidem corporis! Temporibus perspiciatis, rerum maxime aperiam adipisci sit soluta voluptatum ratione iste atque, beatae consequatur labore et.
        </p>
      </div>

      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">
          John Doe and 2,078 others
        </p>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">22 comments. 1 repost</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Like
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Comment
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Repost
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send
        </button>
      </div>
    </div>
  );
}

export default Card;
