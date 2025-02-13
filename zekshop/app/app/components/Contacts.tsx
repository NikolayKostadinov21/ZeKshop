import React from "react";

const Contacts: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Section - Brand & Description */}
        <div className="max-w-lg">
          <h2 className="text-4xl font-extrabold uppercase tracking-wider relative inline-block">
            <span className="text-pink-900 opacity-500">Z</span>
            <span className="text-white opacity-40">e</span>
            <span className="text-pink-900 opacity-500">K</span>
            <span className="text-white opacity-40">shop</span>
          </h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            E2E Privacy adult store.
          </p>
        </div>

        {/* Right Section - Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold uppercase">Contacts</h3>

          <div className="flex items-center gap-3">
            {/* Phone Icon */}
            <svg
              className="w-6 h-6 text-pink-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3.5A1.5 1.5 0 013.5 2h3a1.5 1.5 0 011.5 1.5V5a1 1 0 01-1 1H5.87a13.48 13.48 0 004.25 4.25V10a1 1 0 011-1h1.5A1.5 1.5 0 0116 10.5v3a1.5 1.5 0 01-1.5 1.5h-.75a15.47 15.47 0 01-10-10H2.5A1.5 1.5 0 012 3.5z" />
            </svg>
            <p className="text-gray-300">+359 888 150 787</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Email Icon */}
            <svg
              className="w-6 h-6 text-pink-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 10.382l7.997-4.498A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4.5-8-4.5V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <p className="text-gray-300">zekshopofficial@gmail.com</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Location Icon */}
            <svg
              className="w-6 h-6 text-pink-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2a6 6 0 00-6 6c0 3.866 6 10 6 10s6-6.134 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-gray-300">Sofia, Bulgaria</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contacts;
