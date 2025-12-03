import Cvbtn from "@/components/Cvbtn";
import React from "react"

const HeroPage: React.FC = () => {
    return(
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-20">
          
          {/* Image - Order 2 on mobile (text first), Order 1 on desktop? 
              Or keep image top on mobile. Current: Image Top.
          */}
          <div className="shrink-0">
            <img
              src="/fotojoao.jpg"
              // Adjusted sizing for mobile vs desktop
              className="w-64 h-64 md:w-96 md:h-auto object-cover rounded-3xl shadow-lg mx-auto"
              alt="João"
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins text-dark">
              Hello, I'm <span className="text-green-600">João Rema</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl font-mono text-gray-700 leading-relaxed">
              8 years of experience in client facing roles and sales. Very
              curious, proactive and passionate about problem solving using
              logical thinking. Currently finishing a software development
              program at 42 Porto using C, C++, TypeScript and React.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-8">
              <Cvbtn />
            </div>
          </div>
        </div>
    );
}

export default HeroPage