import React, { useState } from "react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call or action for subscribing
    console.log("Subscribed with email:", email);
  };

  return (
    <section className="relative bg-black text-center py-20 px-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 text-gray-800 text-7xl font-extrabold uppercase opacity-10 tracking-widest flex items-center justify-center">
        NEWSLETTER NEWSLETTER NEWSLETTER
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Small Title */}
        <p className="text-sm tracking-wide text-pink-500 uppercase mb-3">
          Newsletter
        </p>

        {/* Main Title */}
        <h2 className="text-5xl font-extrabold text-white uppercase mb-6">
          Subscribe to Our Newsletter
        </h2>

        {/* Subscription Form */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            className="w-full sm:w-auto px-6 py-4 bg-white text-gray-900 text-lg rounded-full outline-none border-2 border-transparent focus:border-pink-500 transition duration-300 placeholder-gray-500"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-pink-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-pink-600 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
