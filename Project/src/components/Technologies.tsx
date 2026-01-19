import React from "react";


const Technologies: React.FC = () => 
{
  const skillCategories = [
    {
      title: "Software & Game Dev",
      icon: "i-ph:code-bold",
      description: "Building responsive, performant and maintanable code.",
      tags: ["C", "C++", "TypeScript", "JavaScript", "Godot Script"],
    },
    {
      title: "Web Development",
      icon: "i-ph:palette-bold",
      description: "Crafting Portefolios, building games and managing back and front end development.",
      tags: ["Tailwind CSS", "Vite", "React", "CSS", "Fastify", "Babylon", "Sql", "MariaDb"],
    },
    {
      title: "Tools & Workflow",
      icon: "i-ph:gear-bold",
      description: "Leveraging modern development tools for efficient workflows.",
      tags: ["Git", "Github", "Notion", "Canvas", "Docker", "Bash"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-8 relative border-b border-zinc-200 bg-zinc-50/50 w-full"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="inline-block px-3 py-1 bg-white border border-black mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-xs font-mono font-bold text-black uppercase tracking-wider">
              02. TECHNOLOGIES
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

        {/* THE GRID: 
           - grid-cols-1: Mobile (stacks vertically)
           - md:grid-cols-2: Tablets (2 columns)
           - lg:grid-cols-3: Desktop (3 columns side by side)
           - gap-8: Space between cards
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="
                group bg-white border border-black p-8 
                hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
                transition-all duration-300
                flex flex-col h-full 
              "
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-zinc-100 border border-black flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300 shrink-0">
                <span
                  className={`iconify ${category.icon} text-2xl`}
                  aria-hidden="true"
                ></span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-4 font-mono uppercase">
                {category.title}
              </h3>

              {/* Description (Removed fixed height h-12 to prevent mobile overflow) */}
              <p className="text-zinc-600 mb-8 text-sm leading-relaxed font-mono grow">
                {category.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-bold font-mono text-black px-3 py-1 bg-zinc-50 border border-zinc-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
