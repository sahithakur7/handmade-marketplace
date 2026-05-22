import React, { useState } from 'react';
import { Filter, Grid } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ArtistCard from '../components/ArtistCard';

const mockProducts = [
  { id: 1, name: 'Handwoven Ceramic Pot', artist: 'Sarah Ceramics', artistId: 1, image: 'https://via.placeholder.com/300x300?text=Ceramic', description: 'Beautiful handcrafted ceramic pot', price: 2499, rating: 4.8, reviews: 124 },
  { id: 2, name: 'Macramé Wall Hanging', artist: 'Artisan Threads', artistId: 2, image: 'https://via.placeholder.com/300x300?text=Macrame', description: 'Bohemian macramé wall hanging', price: 1899, rating: 4.9, reviews: 89 },
  { id: 3, name: 'Leather Journal', artist: 'Craft & Bind', artistId: 3, image: 'https://via.placeholder.com/300x300?text=Journal', description: 'Premium leather journal', price: 1299, rating: 4.7, reviews: 45 },
  { id: 4, name: 'Wooden Sculpture', artist: 'Wood Artistry', artistId: 4, image: 'https://via.placeholder.com/300x300?text=Sculpture', description: 'Unique wooden sculpture', price: 3999, rating: 5.0, reviews: 23 },
];

const mockArtists = [
  { id: 1, name: 'Sarah Ceramics', avatar: 'https://via.placeholder.com/100x100?text=Sarah', specialty: 'Ceramic Art', location: 'Jaipur, India', bio: 'Creating beautiful handmade ceramics', products: 24, followers: 1250 },
  { id: 2, name: 'Artisan Threads', avatar: 'https://via.placeholder.com/100x100?text=Threads', specialty: 'Textile & Fiber', location: 'Bangalore, India', bio: 'Sustainable textiles and fabrics', products: 18, followers: 890 },
];

export default function ExplorePage() {
  const [view, setView] = useState('products');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen">
      <section className="bg-beige py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-serif text-dark mb-2">Explore Handmade</h1>
          <p className="text-dark opacity-70">Discover unique products from talented artists</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-6">
          <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}>
            <div className="bg-white rounded-lg p-6 shadow-sm h-fit sticky top-20">
              <h3 className="font-semibold text-dark mb-6 flex items-center gap-2"><Filter size={18} />Filters</h3>
              <div className="mb-8">
                <h4 className="font-semibold text-sm text-dark mb-4">Category</h4>
                <div className="space-y-2">
                  {['All', 'Ceramics', 'Textiles', 'Jewelry'].map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" onChange={() => setSelectedCategory(cat.toLowerCase())} className="rounded" />
                      <span className="text-sm text-dark">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex gap-4 mb-8 justify-between items-center">
              <p className="text-sm text-dark opacity-70">{mockProducts.length} products found</p>
              <div className="flex gap-2 md:hidden">
                <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2 px-4 py-2 bg-beige rounded-lg text-dark"><Filter size={18} />Filters</button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockProducts.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
