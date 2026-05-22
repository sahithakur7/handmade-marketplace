import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-beige shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif text-terracotta">Artisan</span>
            <span className="text-sm text-soft-brown">Market</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/explore" className="text-dark hover:text-terracotta transition">Explore</Link>
            <Link to="/dashboard" className="text-dark hover:text-terracotta transition">Sell</Link>
            <a href="#about" className="text-dark hover:text-terracotta transition">About</a>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/cart" className="relative p-2 hover:bg-beige rounded-lg transition">
              <ShoppingCart size={20} className="text-dark" />
              <span className="absolute -top-1 -right-1 bg-terracotta text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
            </Link>
            <Link to="/login" className="p-2 hover:bg-beige rounded-lg transition">
              <User size={20} className="text-dark" />
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-beige animate-in fade-in">
            <Link to="/explore" className="block py-2 text-dark hover:text-terracotta">Explore</Link>
            <Link to="/dashboard" className="block py-2 text-dark hover:text-terracotta">Sell with Us</Link>
            <a href="#about" className="block py-2 text-dark hover:text-terracotta">About</a>
          </div>
        )}
      </div>
    </nav>
  );
}
