import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => e.preventDefault();

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige to-cream flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif text-terracotta mb-2">Artisan Market</h1>
          <p className="text-dark opacity-70">{isLogin ? 'Sign in to your account' : 'Create your account'}</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-dark mb-2">Email</label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-3 text-soft-brown" />
                <input type="email" placeholder="you@example.com" className="w-full pl-10 pr-4 py-2 border border-beige rounded-lg focus:outline-none focus:border-terracotta" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark mb-2">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-3 text-soft-brown" />
                <input type={showPassword ? 'text' : 'password'} placeholder="••••••••" className="w-full pl-10 pr-10 py-2 border border-beige rounded-lg focus:outline-none focus:border-terracotta" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-soft-brown">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            {!isLogin && <div><label className="block text-sm font-semibold text-dark mb-2">Confirm Password</label><div className="relative"><Lock size={18} className="absolute left-3 top-3 text-soft-brown" /><input type={showPassword ? 'text' : 'password'} placeholder="••••••••" className="w-full pl-10 pr-10 py-2 border border-beige rounded-lg focus:outline-none focus:border-terracotta" /></div></div>}
            {isLogin && <div className="text-right"><a href="#" className="text-sm text-terracotta hover:opacity-70 transition">Forgot password?</a></div>}
            <button type="submit" className="w-full bg-terracotta text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">{isLogin ? 'Sign In' : 'Create Account'}</button>
          </form>

          <div className="relative my-6"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-beige"></div></div><div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-dark opacity-70">or continue with</span></div></div>

          <div className="grid grid-cols-2 gap-4">
            <button className="py-2 border border-beige rounded-lg text-dark hover:bg-beige transition font-semibold">Google</button>
            <button className="py-2 border border-beige rounded-lg text-dark hover:bg-beige transition font-semibold">Facebook</button>
          </div>
        </div>

        <div className="text-center text-dark opacity-80">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button onClick={() => setIsLogin(!isLogin)} className="text-terracotta hover:opacity-70 transition font-semibold ml-2">{isLogin ? 'Sign Up' : 'Sign In'}</button>
        </div>

        <p className="text-center text-xs text-dark opacity-70 mt-8">By continuing, you agree to our Terms of Service and Privacy Policy</p>
      </div>
    </div>
  );
}
