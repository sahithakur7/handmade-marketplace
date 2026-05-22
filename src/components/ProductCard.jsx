import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = React.useState(false);

  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition">
      <Link to={`/product/${product.id}`} className="relative overflow-hidden h-64 bg-beige block">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
        <button onClick={() => setIsWishlisted(!isWishlisted)} className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:scale-110 transition">
          <Heart size={18} className={isWishlisted ? 'fill-terracotta text-terracotta' : 'text-dark'} />
        </button>
      </Link>
      <div className="p-4">
        <Link to={`/artist/${product.artistId}`} className="text-xs text-soft-brown hover:text-terracotta font-semibold uppercase">{product.artist}</Link>
        <Link to={`/product/${product.id}`} className="block mt-1 font-serif text-lg text-dark hover:text-terracotta transition">{product.name}</Link>
        <p className="text-sm text-dark opacity-70 mt-2 line-clamp-2">{product.description}</p>
        <div className="flex items-center gap-1 mt-2"><span className="text-yellow-400">★</span><span className="text-xs text-dark">{product.rating}</span></div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold text-terracotta">₹{product.price}</span>
          <button className="p-2 bg-beige hover:bg-soft-brown text-dark rounded-lg transition"><ShoppingCart size={18} /></button>
        </div>
      </div>
    </div>
  );
}
