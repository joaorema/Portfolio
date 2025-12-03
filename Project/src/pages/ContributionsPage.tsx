import React from "react";
import { GitHubCalendar } from "react-github-calendar";

const ContributionsPage: React.FC = () => 
{
    return(
        <div className="max-w-7xl mx-auto w-full">
                  <div className="mb-16">
                  <div className="inline-block px-3 py-1 bg-white border border-black mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-xs font-mono font-bold text-black uppercase tracking-wider">
                      04. CONTRIBUTIONS
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold font-poppins text-black mb-6 tracking-tight">
                    BUILDING WITH PURPOSE
                  </h2>
                  <p className="text-xl text-zinc-600 max-w-3xl font-mono">
                    &gt; Crafting digital experiences using modern technologies, focusing
                    on performance, accessibility, and interactions.
                  </p>
                </div>
                  <GitHubCalendar
                    username="joaorema"
                    colorScheme="light" // Switched to light to match white bg, change back if needed
                    blockSize={14} // Slightly smaller blocks for mobile safety
                    blockMargin={4}
                  />
                </div>
    );
}

export default ContributionsPage