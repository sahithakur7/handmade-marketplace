import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ArtistCard from '../components/ArtistCard';

const mockProducts = [
  { id: 1, name: 'Handwoven Ceramic Pot', artist: 'Sarah Ceramics', artistId: 1, image: 'https://via.placeholder.com/300x300?text=Ceramic', description: 'Beautiful handcrafted ceramic pot with natural glaze', price: 2499, rating: 4.8, reviews: 124 },
  { id: 2, name: 'Macramé Wall Hanging', artist: 'Artisan Threads', artistId: 2, image: 'https://via.placeholder.com/300x300?text=Macrame', description: 'Bohemian macramé wall hanging, handmade with love', price: 1899, rating: 4.9, reviews: 89 },
  { id: 3, name: 'Leather Journal', artist: 'Craft & Bind', artistId: 3, image: 'https://via.placeholder.com/300x300?text=Journal', description: 'Premium leather journal with hand-stitched pages', price: 1299, rating: 4.7, reviews: 45 },
  { id: 4, name: 'Wooden Sculpture', artist: 'Wood Artistry', artistId: 4, image: 'https://via.placeholder.com/300x300?text=Sculpture', description: 'Unique wooden sculpture from reclaimed wood', price: 3999, rating: 5.0, reviews: 23 },
];

const mockArtists = [
  { id: 1, name: 'Sarah Ceramics', avatar: 'https://via.placeholder.com/100x100?text=Sarah', specialty: 'Ceramic Art', location: 'Jaipur, India', bio: 'Creating beautiful handmade ceramics since 2015', products: 24, followers: 1250 },
  { id: 2, name: 'Artisan Threads', avatar: 'https://via.placeholder.com/100x100?text=Threads', specialty: 'Textile & Fiber', location: 'Bangalore, India', bio: 'Sustainable textiles and handwoven fabrics', products: 18, followers: 890 },
  { id: 3, name: 'Craft & Bind', avatar: 'https://via.placeholder.com/100x100?text=Craft', specialty: 'Bookbinding', location: 'Delhi, India', bio: 'Preserving the art of traditional bookbinding', products: 12, followers: 540 },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-beige to-cream overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif text-dark leading-tight mb-6">Discover <span className="text-terracotta">Handmade Culture</span></h1>
            <p className="text-lg text-dark opacity-80 mb-8 leading-relaxed">Connect with authentic artists and craftspeople creating beautiful, unique handmade items. Every product has a story.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/explore" className="inline-flex items-center justify-center gap-2 bg-terracotta text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">Explore Artists<ArrowRight size={18} /></Link>
              <Link to="/dashboard" className="inline-flex items-center justify-center gap-2 bg-white text-terracotta px-8 py-3 rounded-lg font-semibold border-2 border-terracotta hover:bg-beige transition">Start Selling<ArrowRight size={18} /></Link>
            </div>
          </div>
          <div className="relative h-96 bg-gradient-to-br from-soft-brown to-terracotta rounded-lg flex items-center justify-center text-white text-6xl">🎨</div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div><h2 className="text-4xl font-serif text-dark mb-2">Featured Artists</h2><p className="text-dark opacity-70">Discover talented creators from around the world</p></div>
            <Link to="/explore" className="text-terracotta hover:opacity-70 transition font-semibold flex items-center gap-2">View All<ArrowRight size={18} /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockArtists.map(artist => <ArtistCard key={artist.id} artist={artist} />)}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div><h2 className="text-4xl font-serif text-dark mb-2">Trending Handmade</h2><p className="text-dark opacity-70">Most loved by our community right now</p></div>
            <Link to="/explore" className="text-terracotta hover:opacity-70 transition font-semibold flex items-center gap-2">Shop All<ArrowRight size={18} /></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProducts.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-dark mb-12 text-center">Artist Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition">
              <div className="relative h-64 bg-gradient-to-br from-soft-brown to-beige overflow-hidden flex items-center justify-center text-6xl">📸
                <button className="absolute inset-0 flex items-center justify-center hover:bg-black hover:bg-opacity-30 transition">
                  <div className="bg-white rounded-full p-4 group-hover:scale-110 transition"><Play size={24} className="text-terracotta ml-1" /></div>
                </button>
              </div>
              <div className="p-6"><h3 className="text-xl font-serif text-dark mb-2">Meet Sarah - Master Potter</h3><p className="text-dark opacity-70">From clay to masterpiece: A journey of 15 years</p></div>
            </div>
            <div className="group rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition">
              <div className="relative h-64 bg-gradient-to-br from-beige to-cream overflow-hidden flex items-center justify-center text-6xl">🧵
                <button className="absolute inset-0 flex items-center justify-center hover:bg-black hover:bg-opacity-30 transition">
                  <div className="bg-white rounded-full p-4 group-hover:scale-110 transition"><Play size={24} className="text-terracotta ml-1" /></div>
                </button>
              </div>
              <div className="p-6"><h3 className="text-xl font-serif text-dark mb-2">Weaving Traditions</h3><p className="text-dark opacity-70">Keeping ancient textile arts alive in modern times</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-dark mb-12 text-center">Explore by Region</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Jaipur', 'Bangalore', 'Delhi', 'Kolkata', 'Kerala', 'Rajasthan', 'Gujarat', 'Maharashtra'].map(region => (
              <button key={region} className="p-6 bg-beige hover:bg-soft-brown text-dark rounded-lg transition text-center font-semibold group">
                <span className="text-3xl mr-2">📍</span>
                {region}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-soft-brown to-terracotta text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif mb-6">Ready to Showcase Your Art?</h2>
          <p className="text-lg mb-8 opacity-90">Join thousands of artists selling authentic handmade products on Artisan Market.</p>
          <Link to="/dashboard" className="inline-block bg-white text-terracotta px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">Start Your Store Today</Link>
        </div>
      </section>
    </div>
  );
}
