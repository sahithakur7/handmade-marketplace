import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';

const mockCartItems = [
  { id: 1, name: 'Handwoven Ceramic Pot', artist: 'Sarah Ceramics', price: 2499, quantity: 1, image: 'https://via.placeholder.com/150x150?text=Ceramic' },
  { id: 2, name: 'Macramé Wall Hanging', artist: 'Artisan Threads', price: 1899, quantity: 2, image: 'https://via.placeholder.com/150x150?text=Macrame' },
];

export default function CartPage() {
  const [items, setItems] = useState(mockCartItems);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 150;
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + shipping + tax;

  const removeItem = (id) => setItems(items.filter(item => item.id !== id));
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) removeItem(id);
    else setItems(items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-serif text-dark mb-12">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag size={64} className="mx-auto text-beige mb-4" />
            <h2 className="text-2xl font-serif text-dark mb-2">Your cart is empty</h2>
            <p className="text-dark opacity-70 mb-8">Start shopping to discover amazing handmade products.</p>
            <Link to="/explore" className="inline-block bg-terracotta text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">Continue Shopping</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.id} className="bg-white rounded-lg p-6 border border-beige flex gap-6">
                    <img src={item.image} alt={item.name} className="w-24 h-24 rounded-lg object-cover flex-shrink-0" />
                    <div className="flex-1">
                      <Link to={`/product/${item.id}`} className="font-serif text-lg text-dark hover:text-terracotta mb-1 block">{item.name}</Link>
                      <p className="text-sm text-dark opacity-70 mb-3">{item.artist}</p>
                      <p className="text-lg font-semibold text-terracotta">₹{item.price}</p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700"><Trash2 size={20} /></button>
                      <div className="flex items-center border border-beige rounded-lg">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 text-dark hover:bg-beige">−</button>
                        <span className="w-8 text-center py-1">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 text-dark hover:bg-beige">+</button>
                      </div>
                      <p className="font-semibold text-dark">₹{item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-8 border border-beige h-fit sticky top-24">
                <h2 className="text-xl font-serif text-dark mb-6">Order Summary</h2>
                <div className="space-y-3 mb-6 pb-6 border-b border-beige">
                  <div className="flex justify-between text-dark opacity-80"><span>Subtotal</span><span>₹{subtotal}</span></div>
                  <div className="flex justify-between text-dark opacity-80"><span>Shipping</span><span>₹{shipping}</span></div>
                  <div className="flex justify-between text-dark opacity-80"><span>Tax</span><span>₹{tax}</span></div>
                </div>
                <div className="flex justify-between mb-6 text-xl font-semibold text-dark"><span>Total</span><span className="text-terracotta">₹{total}</span></div>
                <button className="w-full bg-terracotta text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition mb-3">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
