import React from "react";

const companies = [
  { name: "Company 1", logo: "/obsidion-logo.jpg" },
  { name: "Company 2", logo: "/aztec-logo.png" },
  { name: "Company 3", logo: "/noir-logo.jpg" },
];

const BackedBy: React.FC = () => {
  return (
    <section className="bg-black py-16 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <p className="text-sm tracking-wide text-gray-400 uppercase mb-6">
          Backed By
        </p>

        {/* Logos - Fully Transparent, No Borders */}
        <div className="flex flex-wrap justify-center items-center gap-12">
          {companies.map((company, index) => (
            <img
              key={index}
              src={company.logo}
              alt={company.name}
              className="max-w-[150px] md:max-w-[180px] lg:max-w-[200px] object-contain transition transform hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackedBy;
