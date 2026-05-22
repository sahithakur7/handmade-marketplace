import React, { useState } from 'react';
import { Plus, Edit2, Eye, MoreVertical, TrendingUp } from 'lucide-react';

const mockProducts = [
  { id: 1, name: 'Ceramic Pot', views: 234, sales: 12, price: 2499 },
  { id: 2, name: 'Macramé Hanging', views: 189, sales: 8, price: 1899 },
  { id: 3, name: 'Leather Journal', views: 145, sales: 5, price: 1299 },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12"><h1 className="text-4xl font-serif text-dark mb-2">Artist Dashboard</h1><p className="text-dark opacity-70">Manage your products and track your sales</p></div>

        <div className="flex gap-8 border-b border-beige mb-8 overflow-x-auto">
          {['overview', 'products', 'orders', 'analytics', 'settings'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`py-4 font-semibold text-sm whitespace-nowrap transition ${activeTab === tab ? 'text-terracotta border-b-2 border-terracotta' : 'text-dark opacity-70 hover:text-dark'}`}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[{ label: 'Total Sales', value: '₹45,299', change: '+12%' }, { label: 'Total Orders', value: '24', change: '+3' }, { label: 'Products', value: '12', change: '2 pending' }, { label: 'Followers', value: '1,250', change: '+89' }].map((stat, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-sm"><p className="text-dark opacity-70 text-sm font-semibold mb-2">{stat.label}</p><p className="text-3xl font-bold text-dark mb-2">{stat.value}</p><p className="text-xs text-terracotta font-semibold">{stat.change}</p></div>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-serif text-dark mb-6">Recent Orders</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-beige"><th className="text-left py-3 text-dark opacity-70">Order ID</th><th className="text-left py-3 text-dark opacity-70">Product</th><th className="text-left py-3 text-dark opacity-70">Customer</th><th className="text-left py-3 text-dark opacity-70">Amount</th><th className="text-left py-3 text-dark opacity-70">Status</th></tr></thead>
                  <tbody>
                    {[{ id: '#ORD001', product: 'Ceramic Pot', customer: 'Priya M.', amount: '₹2,499', status: 'Completed' }, { id: '#ORD002', product: 'Macramé', customer: 'Arun K.', amount: '₹1,899', status: 'Pending' }].map((order, i) => (
                      <tr key={i} className="border-b border-beige hover:bg-cream"><td className="py-3 text-dark font-semibold">{order.id}</td><td className="py-3 text-dark">{order.product}</td><td className="py-3 text-dark">{order.customer}</td><td className="py-3 text-dark font-semibold">{order.amount}</td><td className="py-3"><span className={`px-3 py-1 rounded-full text-xs font-semibold ${order.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>{order.status}</span></td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-serif text-dark">Your Products</h2>
              <button className="flex items-center gap-2 bg-terracotta text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition"><Plus size={20} />Add Product</button>
            </div>
            <div className="space-y-4">
              {mockProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg p-6 flex justify-between items-center shadow-sm hover:shadow-md transition">
                  <div className="flex-1">
                    <h3 className="font-semibold text-dark mb-2">{product.name}</h3>
                    <div className="flex gap-6 text-sm text-dark opacity-70">
                      <span className="flex items-center gap-1"><Eye size={16} />{product.views} views</span>
                      <span><TrendingUp size={16} className="inline mr-1" />{product.sales} sales</span>
                      <span className="font-semibold text-terracotta">₹{product.price}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-beige rounded-lg"><Edit2 size={18} className="text-dark" /></button>
                    <button className="p-2 hover:bg-beige rounded-lg"><MoreVertical size={18} className="text-dark" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {['orders', 'analytics', 'settings'].includes(activeTab) && (
          <div className="bg-white rounded-lg p-8 text-center"><p className="text-dark opacity-70 text-lg">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} section coming soon...</p></div>
        )}
      </div>
    </div>
  );
}
