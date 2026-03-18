'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { bangers, sauces, sauceBundle } from '@/lib/data';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
}

interface OrderForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postcode: string;
  notes: string;
}

export default function ShopPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderSubmitting, setOrderSubmitting] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [orderError, setOrderError] = useState('');
  const [orderForm, setOrderForm] = useState<OrderForm>({
    name: '', email: '', phone: '', address: '', city: '', postcode: '', notes: '',
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('eds-cart');
      if (saved) setCart(JSON.parse(saved));
    } catch {}
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('eds-cart', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  const addToCart = (product: { id: string; name: string; price: number; size?: string }) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
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
    if (quantity < 1) { removeFromCart(id); return; }
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleOrderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setOrderForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSubmitting(true);
    setOrderError('');
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'order',
          ...orderForm,
          cart,
          total: cartTotal.toFixed(2),
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setOrderSubmitted(true);
      setCart([]);
      localStorage.removeItem('eds-cart');
    } catch {
      setOrderError('Something went wrong. Please email us at edsbangers@gmail.com with your order.');
    } finally {
      setOrderSubmitting(false);
    }
  };

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
          Order our award-winning sauces for UK delivery. Bangers available for events and wholesale — get in touch.
        </p>
      </div>

      {/* Coming Soon Banner */}
      <section className="max-w-6xl mx-auto px-4 mb-10">
        <div className="bg-gradient-to-br from-eds-charcoal to-eds-charcoal-dark rounded-2xl p-6 md:p-8 text-white text-center">
          <div className="text-4xl mb-3">🚧</div>
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: '"Fredoka One", cursive' }}>
            Online Shop Coming Soon!
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-4">
            We&apos;re not quite up and running with online ordering yet — but we&apos;re working on it!
            Follow us on social media for updates on when you can get your hands on our award-winning sauces.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://instagram.com/edsbangers"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-eds-red text-white font-bold rounded-full hover:bg-eds-red-dark transition-all"
            >
              Follow on Instagram
            </a>
            <a
              href="https://facebook.com/edsbangers1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all"
            >
              Follow on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Sauce Bundle */}
      <section className="max-w-6xl mx-auto px-4 mb-10">
        <div className="bg-gradient-to-br from-eds-charcoal to-eds-charcoal-dark rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-gray-600 text-white text-sm font-bold rounded-full">Coming Soon</span>
            </div>
            <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: '"Fredoka One", cursive' }}>
              🎁 {sauceBundle.name}
            </h2>
            <p className="text-gray-300 mb-2">{sauceBundle.description}</p>
            <p className="text-sm text-gray-400">{sauceBundle.includes.join(' · ')}</p>
          </div>
          <div className="text-center flex-shrink-0">
            <button disabled className="mt-3 px-8 py-3 bg-gray-600 text-gray-400 font-bold rounded-full cursor-not-allowed">
              Coming Soon
            </button>
          </div>
        </div>
      </section>

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
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group flex flex-col"
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

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-eds-charcoal mb-2">{sauce.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{sauce.description}</p>
                <p className="text-sm text-gray-500 mb-2">{sauce.size}</p>

                {/* Allergen info */}
                <div className="text-xs text-gray-400 mb-4 space-y-1">
                  <p><span className="font-semibold">Allergens:</span> {sauce.allergens}</p>
                  <p><span className="font-semibold">Suitable for:</span> {sauce.suitable}</p>
                </div>

                <div className="flex items-center justify-end mt-auto">
                  <button
                    disabled
                    className="px-6 py-3 bg-gray-300 text-gray-500 font-bold rounded-full cursor-not-allowed text-sm"
                  >
                    Coming Soon
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

        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          {/* Bangers hero photo */}
          <div className="relative">
            <Image
              src="/images/raw-sausages.jpg"
              alt="Ed's Bangers — award-winning artisan sausages freshly made"
              width={1200}
              height={500}
              className="w-full object-cover max-h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <p className="text-white text-xl font-bold">Handcrafted in small batches. Made to order.</p>
            </div>
          </div>

          <div className="p-8">
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
                <div className="w-16 h-16 rounded-full flex-shrink-0 overflow-hidden">
                  <Image
                    src="/images/raw-sausages.jpg"
                    alt={banger.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-eds-charcoal">{banger.name}</h4>
                  <p className="text-sm text-gray-600">{banger.description}</p>
                </div>
                <span className="text-xs font-bold text-eds-red bg-eds-red/10 px-3 py-1 rounded-full whitespace-nowrap hidden sm:block">
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
            onClick={() => { setShowCart(true); setShowOrderForm(false); }}
            className="w-16 h-16 bg-eds-red text-white rounded-full shadow-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform relative"
          >
            🛒
            <span className="absolute -top-2 -right-2 w-6 h-6 bg-eds-gold text-black text-sm font-bold rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </button>
        </div>
      )}

      {/* Cart / Order Sidebar */}
      {(showCart || showOrderForm) && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => { setShowCart(false); setShowOrderForm(false); }}
          />
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl overflow-y-auto">

            {orderSubmitted ? (
              <div className="p-8 text-center h-full flex flex-col items-center justify-center">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-eds-charcoal mb-3">Order Received!</h3>
                <p className="text-gray-600 mb-6">
                  Thanks! We&apos;ll be in touch within 24 hours to confirm your order and arrange payment.
                </p>
                <button
                  onClick={() => { setOrderSubmitted(false); setShowCart(false); setShowOrderForm(false); }}
                  className="px-6 py-3 bg-eds-red text-white font-bold rounded-full"
                >
                  Close
                </button>
              </div>
            ) : showOrderForm ? (
              <>
                <div className="p-6 border-b sticky top-0 bg-white z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">Complete Your Order</h3>
                      <p className="text-sm text-gray-500">Total: £{cartTotal.toFixed(2)}</p>
                    </div>
                    <button onClick={() => setShowOrderForm(false)} className="text-gray-500 hover:text-gray-700 text-2xl">←</button>
                  </div>
                </div>

                <form onSubmit={handleOrderSubmit} className="p-6 space-y-4">
                  <p className="text-sm text-gray-600 bg-eds-cream rounded-lg p-3">
                    We&apos;ll confirm your order by email and arrange payment (bank transfer or PayPal). UK delivery only.
                  </p>

                  <div>
                    <label className="block text-sm font-bold text-eds-charcoal mb-1">Full Name *</label>
                    <input
                      type="text" name="name" required value={orderForm.name}
                      onChange={handleOrderChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-eds-red outline-none"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-eds-charcoal mb-1">Email Address *</label>
                    <input
                      type="email" name="email" required value={orderForm.email}
                      onChange={handleOrderChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-eds-red outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-eds-charcoal mb-1">Phone</label>
                    <input
                      type="tel" name="phone" value={orderForm.phone}
                      onChange={handleOrderChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-eds-red outline-none"
                      placeholder="07123 456789"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-eds-charcoal mb-1">Delivery Address *</label>
                    <input
                      type="text" name="address" required value={orderForm.address}
                      onChange={handleOrderChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-eds-red outline-none"
                      placeholder="123 High Street"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-bold text-eds-charcoal mb-1">City</label>
                      <input
                        type="text" name="city" value={orderForm.city}
                        onChange={handleOrderChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-eds-red outline-none"
                        placeholder="Portsmouth"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-eds-charcoal mb-1">Postcode *</label>
                      <input
                        type="text" name="postcode" required value={orderForm.postcode}
                        onChange={handleOrderChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-eds-red outline-none"
                        placeholder="PO1 2AB"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-eds-charcoal mb-1">Notes</label>
                    <textarea
                      name="notes" rows={2} value={orderForm.notes}
                      onChange={handleOrderChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-eds-red outline-none resize-none"
                      placeholder="Any special instructions..."
                    />
                  </div>

                  {orderError && (
                    <p className="text-sm text-eds-red font-semibold">{orderError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={orderSubmitting}
                    className="w-full py-4 bg-eds-red text-white font-bold rounded-full hover:bg-eds-red-dark transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {orderSubmitting ? 'Sending Order...' : `Place Order — £${cartTotal.toFixed(2)} →`}
                  </button>
                </form>
              </>
            ) : (
              <>
                <div className="p-6 border-b sticky top-0 bg-white z-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Your Cart ({cartCount})</h3>
                    <button onClick={() => setShowCart(false)} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
                  </div>
                </div>

                {cart.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">Your cart is empty</div>
                ) : (
                  <>
                    <div className="p-6 space-y-4">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 p-4 bg-eds-cream rounded-xl">
                          <div className="flex-1">
                            <h4 className="font-bold">{item.name}</h4>
                            {item.size && <p className="text-sm text-gray-600">{item.size}</p>}
                            <p className="font-bold text-eds-red">£{(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                            >-</button>
                            <span className="w-8 text-center font-bold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                            >+</button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-6 border-t sticky bottom-0 bg-white">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-bold">Total:</span>
                        <span className="text-2xl font-bold text-eds-red">£{cartTotal.toFixed(2)}</span>
                      </div>
                      <button
                        onClick={() => { setShowOrderForm(true); setShowCart(false); }}
                        className="w-full py-4 bg-eds-red text-white font-bold rounded-full hover:bg-eds-red-dark transition-all"
                      >
                        Checkout →
                      </button>
                      <p className="text-center text-xs text-gray-500 mt-2">
                        We&apos;ll confirm & arrange payment by email
                      </p>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
