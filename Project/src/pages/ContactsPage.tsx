import React from "react";

const ContactsPage: React.FC = () =>
{
    return(
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-16">
          <div className="inline-block px-3 py-1 bg-white border border-black mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-xs font-mono font-bold text-black uppercase tracking-wider">
              05. CONTACTS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-black mb-6 tracking-tight">
            HOW TO REACH ME
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl font-mono">
            &gt; Crafting digital experiences using modern technologies, focusing
            on performance, accessibility, and interactions.
          </p>
        </div>
          
          {/* Grid for contacts allows them to stack on mobile and row on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-poppins">
            <a href="mailto:joaopcrema@gmail.com" className="hover:text-green-500 text-xl md:text-2xl flex flex-col items-center gap-2 transition-colors">
              <span className="text-4xl">📧</span> Email
            </a>
            <a href="https://github.com/joaorema" target="_blank" className="hover:text-green-500 text-xl md:text-2xl flex flex-col items-center gap-2 transition-colors">
              <span className="text-4xl">🐙</span> GitHub
            </a>
            <a href="https://linkedin.com/in/joao-rema" target="_blank" className="hover:text-green-500 text-xl md:text-2xl flex flex-col items-center gap-2 transition-colors">
              <span className="text-4xl">🔗</span> LinkedIn
            </a>
            <a href="https://joaorema.dev" target="_blank" className="hover:text-green-500 text-xl md:text-2xl flex flex-col items-center gap-2 transition-colors">
              <span className="text-4xl">🌐</span> Portfolio
            </a>
          </div>
        </div>
    );
}

export default ContactsPage