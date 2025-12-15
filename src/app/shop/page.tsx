'use client';

import { useState } from 'react';
import Link from 'next/link';
import { bangers, sauces } from '@/lib/data';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
}

export default function ShopPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product: { id: string; name: string; price: number; size?: string }) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setShowCart(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-eds-cream pt-24 pb-16">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <h1
          className="text-4xl md:text-5xl font-bold text-eds-charcoal text-center mb-4"
          style={{ fontFamily: '"Fredoka One", cursive' }}
        >
          🛒 Shop
        </h1>
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
          Order our award-winning sauces for delivery, or get in touch about our bangers for events and wholesale.
        </p>
      </div>

      {/* Sauces Section */}
      <section id="sauces" className="max-w-6xl mx-auto px-4 mb-16">
        <div className="flex items-center gap-4 mb-8">
          <h2
            className="text-3xl font-bold text-eds-charcoal"
            style={{ fontFamily: '"Fredoka One", cursive' }}
          >
            🔥 Great Taste Sauces
          </h2>
          <span className="px-3 py-1 bg-eds-gold text-black text-sm font-bold rounded-full">
            Available Now
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sauces.map((sauce) => (
            <div
              key={sauce.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              {/* Product Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-eds-charcoal to-eds-charcoal-dark flex items-center justify-center relative overflow-hidden">
                <div className="text-6xl group-hover:scale-110 transition-transform">
                  {sauce.id === 'chilli-paste' ? '🌶️' : sauce.id === 'proper-gravy' ? '🥄' : '🔥'}
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-eds-gold text-black text-xs font-bold rounded-full">
                    ⭐ Great Taste
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-eds-charcoal mb-2">
                  {sauce.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{sauce.description}</p>
                <p className="text-sm text-gray-500 mb-4">{sauce.size}</p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-eds-red">
                    £{sauce.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart({ id: sauce.id, name: sauce.name, price: sauce.price, size: sauce.size })}
                    className="px-6 py-3 bg-eds-red text-white font-bold rounded-full hover:bg-eds-red-dark transition-all hover:-translate-y-0.5"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bangers Section */}
      <section id="bangers" className="max-w-6xl mx-auto px-4 mb-16">
        <div className="flex items-center gap-4 mb-8">
          <h2
            className="text-3xl font-bold text-eds-charcoal"
            style={{ fontFamily: '"Fredoka One", cursive' }}
          >
            🌭 Award-Winning Bangers
          </h2>
          <span className="px-3 py-1 bg-eds-brown text-white text-sm font-bold rounded-full">
            Made to Order
          </span>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <p className="text-gray-600 text-lg mb-6">
            Our award-winning sausages are made fresh to order. Available for:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-eds-cream rounded-xl text-center">
              <div className="text-4xl mb-3">🎪</div>
              <h4 className="font-bold text-lg mb-2">Events & Festivals</h4>
              <p className="text-gray-600 text-sm">Catch us at local food festivals</p>
            </div>
            <div className="p-6 bg-eds-cream rounded-xl text-center">
              <div className="text-4xl mb-3">💒</div>
              <h4 className="font-bold text-lg mb-2">Wedding Catering</h4>
              <p className="text-gray-600 text-sm">Street food for your special day</p>
            </div>
            <div className="p-6 bg-eds-cream rounded-xl text-center">
              <div className="text-4xl mb-3">🏪</div>
              <h4 className="font-bold text-lg mb-2">Wholesale</h4>
              <p className="text-gray-600 text-sm">For shops, delis & restaurants</p>
            </div>
          </div>

          <div className="space-y-4">
            {bangers.map((banger) => (
              <div
                key={banger.id}
                className="flex items-center gap-4 p-4 bg-eds-cream/50 rounded-xl"
              >
                <div
                  className="w-16 h-16 rounded-full flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #A0522D, #8B5A2B, #6B4423)',
                  }}
                />
                <div className="flex-1">
                  <h4 className="font-bold text-eds-charcoal">{banger.name}</h4>
                  <p className="text-sm text-gray-600">{banger.description}</p>
                </div>
                <span className="text-xs font-bold text-eds-red bg-eds-red/10 px-3 py-1 rounded-full whitespace-nowrap">
                  🏆 {banger.award.split(' - ')[0]}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-eds-charcoal text-white font-bold rounded-full hover:bg-eds-charcoal-dark transition-all"
            >
              Enquire About Bangers →
            </Link>
          </div>
        </div>
      </section>

      {/* Small Batch Orders */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-br from-eds-red to-eds-red-dark rounded-3xl p-8 md:p-12 text-white text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: '"Fredoka One", cursive' }}
          >
            🏠 Small Batch Orders
          </h2>
          <p className="text-lg opacity-95 mb-6 max-w-2xl mx-auto">
            Looking for something special? We produce small batches of our sauces locally. 
            Perfect for gifts, hampers, or just stocking up your cupboard!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-eds-red font-bold rounded-full hover:bg-eds-cream transition-all"
          >
            Get in Touch →
          </Link>
        </div>
      </section>

      {/* Floating Cart */}
      {cartCount > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setShowCart(!showCart)}
            className="w-16 h-16 bg-eds-red text-white rounded-full shadow-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform relative"
          >
            🛒
            <span className="absolute -top-2 -right-2 w-6 h-6 bg-eds-gold text-black text-sm font-bold rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </button>
        </div>
      )}

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowCart(false)}
          />
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl overflow-y-auto">
            <div className="p-6 border-b sticky top-0 bg-white z-10">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Your Cart ({cartCount})</h3>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            {cart.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                Your cart is empty
              </div>
            ) : (
              <>
                <div className="p-6 space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 p-4 bg-eds-cream rounded-xl"
                    >
                      <div className="flex-1">
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.size}</p>
                        <p className="font-bold text-eds-red">
                          £{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 border-t sticky bottom-0 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold">Total:</span>
                    <span className="text-2xl font-bold text-eds-red">
                      £{cartTotal.toFixed(2)}
                    </span>
                  </div>
                  <button className="w-full py-4 bg-eds-red text-white font-bold rounded-full hover:bg-eds-red-dark transition-all">
                    Checkout →
                  </button>
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Secure checkout coming soon!
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
