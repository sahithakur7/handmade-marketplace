import React, { useState } from 'react';
import { MapPin, Heart, Share2, UserPlus, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const mockArtist = { id: 1, name: 'Sarah Ceramics', avatar: 'https://via.placeholder.com/150x150?text=Sarah', specialty: 'Ceramic Art', location: 'Jaipur, India', bio: 'I create handmade ceramics inspired by nature.', products: 24, followers: 1250, rating: 4.8, verified: true, joinDate: 'Joined in 2015', story: 'Sarah started as a hobby 15 years ago.' };

const mockProducts = [
  { id: 1, name: 'Handwoven Ceramic Pot', artist: 'Sarah Ceramics', artistId: 1, image: 'https://via.placeholder.com/300x300?text=Ceramic', description: 'Beautiful handcrafted ceramic pot', price: 2499, rating: 4.8, reviews: 124 },
  { id: 2, name: 'Blue Ceramic Vase', artist: 'Sarah Ceramics', artistId: 1, image: 'https://via.placeholder.com/300x300?text=Vase', description: 'Elegant vase with hand-painted patterns', price: 1999, rating: 4.9, reviews: 67 },
  { id: 3, name: 'Ceramic Dinnerware', artist: 'Sarah Ceramics', artistId: 1, image: 'https://via.placeholder.com/300x300?text=Dinnerware', description: 'Complete dinnerware set for 4 people', price: 4999, rating: 4.7, reviews: 34 },
];

export default function ArtistProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="h-64 bg-gradient-to-r from-soft-brown to-terracotta"></div>
      <section className="bg-white border-b border-beige px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 py-8 -mt-24">
            <img src={mockArtist.avatar} alt={mockArtist.name} className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg" />
            <div className="flex-1 pt-12">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-serif text-dark">{mockArtist.name}</h1>
                {mockArtist.verified && <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full font-semibold">Verified</span>}
              </div>
              <p className="text-soft-brown font-semibold mb-2">{mockArtist.specialty}</p>
              <div className="flex items-center gap-2 text-dark opacity-70 mb-4"><MapPin size={16} />{mockArtist.location}</div>
              <div className="flex gap-4 mb-6">
                <div><p className="font-semibold text-dark">{mockArtist.followers}</p><p className="text-xs text-dark opacity-70">Followers</p></div>
                <div><p className="font-semibold text-dark">{mockArtist.products}</p><p className="text-xs text-dark opacity-70">Products</p></div>
                <div><p className="font-semibold text-dark flex items-center gap-1">{mockArtist.rating}<Star size={14} className="fill-yellow-400 text-yellow-400" /></p><p className="text-xs text-dark opacity-70">Rating</p></div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setIsFollowing(!isFollowing)} className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition ${isFollowing ? 'bg-beige text-dark' : 'bg-terracotta text-white hover:bg-opacity-90'}`}>
                  <UserPlus size={18} />
                  {isFollowing ? 'Following' : 'Follow'}
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-beige text-dark rounded-lg hover:bg-soft-brown transition"><Share2 size={18} /></button>
              </div>
            </div>
          </div>
          <div className="pb-8 border-b border-beige">
            <p className="text-dark opacity-80 leading-relaxed mb-4">{mockArtist.bio}</p>
            <p className="text-sm text-dark opacity-70">{mockArtist.joinDate}</p>
          </div>
        </div>
      </section>

      <section className="bg-beige py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-dark mb-6">My Story</h2>
          <p className="text-dark opacity-80 leading-relaxed text-lg">{mockArtist.story}</p>
        </div>
      </section>

      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-dark mb-12">Featured Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProducts.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-terracotta text-white rounded-lg font-semibold hover:bg-opacity-90 transition">View All {mockArtist.products} Products</button>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-dark mb-8">Customer Reviews</h2>
          <div className="space-y-6">
            {[{ name: 'Priya M.', rating: 5, text: 'Absolutely beautiful!' }, { name: 'Arun K.', rating: 5, text: 'Perfect quality. Highly recommended!' }].map((review, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-semibold text-dark">{review.name}</p>
                  <span className="text-yellow-400">{'★'.repeat(review.rating)}</span>
                </div>
                <p className="text-dark opacity-80">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
