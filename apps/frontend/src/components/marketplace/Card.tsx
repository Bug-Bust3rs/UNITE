import { XIcon } from 'lucide-react';
import { useState, useMemo } from 'react';

// Define the type for an item
interface Item {
  id: number;
  name: string;
  condition: string;
  price: number;
  verified: boolean;  // New property to indicate if the product is verified
  description: string; // New property for product description
  username: string;    // New property for the user's name
  image: string;       // New property for the user's image
}

// Props for the ItemCard component
interface ItemCardProps {
  item: Item;
  onAddToCart: (item: Item) => void;
}

function ItemCard({ item, onAddToCart }: ItemCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-lg relative">
      {item.verified && (
        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
          Verified Product
        </span>
      )}
      <img
        src={item.image}
        alt={item.name}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
        style={{ aspectRatio: '400/300', objectFit: 'cover' }}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{item.name}</h3>
        <p className="text-sm text-muted-foreground">Sold by: {item.username}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-medium text-muted-foreground">Condition: {item.condition}</span>
          <span className="text-lg font-bold">${item.price}</span>
        </div>
        <button className="mt-4 w-full bg-primary text-white py-2 rounded-md" onClick={() => onAddToCart(item)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

// Props for the Cart component
interface CartProps {
  cart: Item[];
  onRemoveFromCart: (itemId: number) => void;
}

function Cart({ cart, onRemoveFromCart }: CartProps) {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <footer className="bg-muted py-4 px-6">
      <div className="container mx-auto flex flex-col gap-4">
        <h3 className="text-lg font-bold">Cart</h3>
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">{item.name}</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold">${item.price}</span>
                  <button
                    className="text-muted-foreground hover:text-foreground"
                    onClick={() => onRemoveFromCart(item.id)}
                  >
                    <XIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                <p><strong>Condition:</strong> {item.condition}</p>
                <p><strong>Description:</strong> {item.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-bold">
          <span>Total:</span>
          <span>${totalPrice}</span>
        </div>
      </div>
    </footer>
  );
}

export default function Component() {
  const [searchTerm] = useState<string>('');
  const [cart, setCart] = useState<Item[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('date');

  const items: Item[] = [
    { id: 1, name: 'Laptop Motherboard', condition: 'Good', price: 25, verified: true, description: 'Used laptop motherboard in good condition.', username: 'John Doe', image: '/images/john-doe.jpg' },
    { id: 2, name: 'Smartphone Battery', condition: 'Refurbished', price: 12, verified: false, description: 'Refurbished smartphone battery, 80% capacity.', username: 'Jane Smith', image: '/images/jane-smith.jpg' },
    { id: 3, name: 'Desktop RAM', condition: 'Used', price: 20, verified: true, description: 'Used desktop RAM, 8GB DDR4.', username: 'Alice Brown', image: '/images/alice-brown.jpg' },
    { id: 4, name: 'Printer Cartridge', condition: 'Refurbished', price: 15, verified: false, description: 'Refurbished printer cartridge, compatible with most models.', username: 'Bob Green', image: '/images/bob-green.jpg' },
    { id: 5, name: 'Keyboard', condition: 'Used', price: 10, verified: false, description: 'Used keyboard in good working condition.', username: 'Charlie White', image: '/images/charlie-white.jpg' },
    { id: 6, name: 'Mouse', condition: 'Refurbished', price: 8, verified: true, description: 'Refurbished wireless mouse, works great.', username: 'Diana Black', image: '/images/diana-black.jpg' },
    { id: 7, name: 'Hard Drive', condition: 'Used', price: 30, verified: true, description: 'Used 1TB hard drive, tested and working.', username: 'Eve Blue', image: '/images/eve-blue.jpg' },
    { id: 8, name: 'Tablet Screen', condition: 'Refurbished', price: 40, verified: false, description: 'Refurbished tablet screen, compatible with various models.', username: 'Frank Yellow', image: '/images/frank-yellow.jpg' },
  ];

  const filteredItems = useMemo(() => {
    return items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm]);

  const addToCart = (item: Item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <div className="flex flex-col min-h-screen">
        <div className="text-center mb-8 mt-24 z-10"> 
        <h1 className="text-5xl text-slate-800 font-bold mb-2">
          Market<span className="text-blue-500">Place</span>
        </h1>
        <p className="mx-auto max-w-[700px] text-slate-400 md:text-xl lg:text-base xl:text-xl dark:text-white">
        Turning Trash into Treasure: Your e-Waste, Our Marketplace!
            </p>
      </div>
      <div className="search-filter-bar mb-10 flex space-x-4 p-5 z-10">
        <input
          type="text"
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar flex-grow p-2 border border-gray-300 rounded-2xl"
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="sort-by p-2 border border-gray-300 rounded-2xl"
        >
          <option value="date">Sort by Date</option>
          <option value="popularity">Sort by Popularity</option>
          <option value="price">Sort by Price</option>
        </select>
        <select className="category-filter p-2 border border-gray-300 rounded-2xl">
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="office">Office Equipment</option>
          <option value="power">Power & Accessories</option>
        </select>
      </div>
      <main className="flex-1 bg-background py-8 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} onAddToCart={addToCart} />
            ))}
          </div>
        </div>
      </main>
      <Cart cart={cart} onRemoveFromCart={removeFromCart} />
    </div>
  );
}
