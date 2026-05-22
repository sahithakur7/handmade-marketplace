import React, { useState } from 'react';
import { Heart, Share2, ShoppingCart, Star, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const mockProduct = { id: 1, name: 'Handwoven Ceramic Pot', artist: 'Sarah Ceramics', artistId: 1, price: 2499, rating: 4.8, reviews: 124, description: 'A beautiful handcrafted ceramic pot made with traditional techniques.', details: ['Material: Premium ceramic clay', 'Size: 8" diameter × 10" height', 'Made to order - Ships in 7-10 days'], images: ['https://via.placeholder.com/500x500?text=Ceramic+1', 'https://via.placeholder.com/500x500?text=Ceramic+2'] };

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="mb-4 bg-beige rounded-lg overflow-hidden h-96 flex items-center justify-center">
              <img src={mockProduct.images[selectedImage]} alt={mockProduct.name} className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <p className="text-soft-brown font-semibold text-sm uppercase">
              <Link to={`/artist/${mockProduct.artistId}`} className="hover:text-terracotta">{mockProduct.artist}</Link>
            </p>
            <h1 className="text-4xl font-serif text-dark mt-2 mb-4">{mockProduct.name}</h1>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < Math.floor(mockProduct.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />)}
              </div>
              <span className="text-dark">{mockProduct.rating}</span>
              <span className="text-dark opacity-70">({mockProduct.reviews} reviews)</span>
            </div>
            <div className="mb-8 pb-8 border-b border-beige">
              <p className="text-4xl font-bold text-terracotta">₹{mockProduct.price}</p>
            </div>
            <p className="text-dark opacity-80 mb-8">{mockProduct.description}</p>
            <div className="mb-8">
              <h3 className="font-semibold text-dark mb-4">Details</h3>
              <ul className="space-y-2 text-sm text-dark opacity-80">
                {mockProduct.details.map((detail, i) => <li key={i} className="flex items-start gap-3"><span className="text-terracotta mt-1">•</span>{detail}</li>)}
              </ul>
            </div>
            <div className="flex gap-4 mb-8">
              <div className="flex items-center border border-beige rounded-lg">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 text-dark hover:bg-beige">−</button>
                <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} className="w-16 text-center py-2 border-l border-r border-beige" />
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 text-dark hover:bg-beige">+</button>
              </div>
              <button className="flex-1 flex items-center justify-center gap-2 bg-terracotta text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"><ShoppingCart size={20} />Add to Cart</button>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setIsWishlisted(!isWishlisted)} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold border-2 transition ${isWishlisted ? 'bg-terracotta border-terracotta text-white' : 'border-beige text-dark hover:bg-beige'}`}>
                <Heart size={20} className={isWishlisted ? 'fill-white' : ''} />
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
