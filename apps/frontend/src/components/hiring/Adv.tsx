
import AdvCard from "./card" 


const AdvC: React.FC = () => {
  const cardsData = [
    {
      title: 'Carpentor',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum ipsum voluptate fuga dolore dolor '
    },
    {
      title: 'Electrician',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore dolorem quisquam incidunt nostrum!'
    },
    {
      title: 'Plumber',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore dolorem incidunt nostrum!'
    },
    {
      title: 'Painter',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore dolorem quisquam incidunt nostrum!'
    },
    {
      title: 'Mechanic',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore dolorem incidunt nostrum!'
    }
  ];

  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto mt-[20vh]">
      <h1 className="text-5xl text-slate-900 font-bold ">Expert <span className="text-blue-600">Members</span> Nationwide</h1>
      <p className="text-gray-600 mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsa fuga aperiam laboriosam maxime a maiores sapiente nostrum cumque sit voluptas illum, quis deleniti nobis, ducimus cum tempore quasi repellendus.</p>
        <div className="max-w-screen-xl flex flex-row gap-7 justify-between  mt-[10vh] ">
          {cardsData.map((card, index) => (
            <AdvCard key={index} title={card.title} description={card.description} />
          ))}
        </div>
      
    </div>
  );
}

export default AdvC;
