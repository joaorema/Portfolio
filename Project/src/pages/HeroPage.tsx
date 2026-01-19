import React from "react";

const HeroPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-20">
      <div className="shrink-0">
        <img
          src="/fotojoao.jpg"
          className="w-64 h-64 md:w-96 md:h-auto object-cover rounded-3xl shadow-lg mx-auto"
          alt="João"
        />
      </div>

      {/* Text */}
      <div className="text-center md:text-left max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold font-poppins text-dark">
          Hello, I'm João Rema 
        </h1>
        <p className="mt-6 text-lg md:text-xl font-mono text-gray-700 leading-relaxed">
          Friendly, proactive, curious, and passionate about problem solving
          using logical thinking. With a Degree in Tourism Management and 8
          years of experience in customer service roles and sales. Finished
          recently a software development program at 42 Porto using C, C++
          and TypeScript. Looking to transition into tech by combining my
          strong soft skills with a growing expertise in software development.
        </p>
      </div>
    </div>
  );
};

export default HeroPage;
