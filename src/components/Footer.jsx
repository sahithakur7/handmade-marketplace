import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-beige mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-serif text-terracotta mb-4">Artisan Market</h3>
            <p className="text-sm text-dark opacity-70">Connecting artists with art lovers worldwide.</p>
          </div>
          <div>
            <h4 className="font-semibold text-dark mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/explore" className="text-dark opacity-70 hover:text-terracotta">Browse Products</Link></li>
              <li><a href="#" className="text-dark opacity-70 hover:text-terracotta">Discover Artists</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-dark mb-4">For Sellers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/dashboard" className="text-dark opacity-70 hover:text-terracotta">Sell with Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-dark mb-4">Follow</h4>
            <div className="flex gap-4">
              <a href="#" className="text-soft-brown hover:text-terracotta"><Instagram size={20} /></a>
              <a href="#" className="text-soft-brown hover:text-terracotta"><Twitter size={20} /></a>
              <a href="#" className="text-soft-brown hover:text-terracotta"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-beige pt-8 text-center text-sm text-dark opacity-70">
          <p>© 2024 Artisan Market. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
