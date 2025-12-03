import React from "react";

const ContactsPage: React.FC = () =>
{

  const contactMethods = [
    {
      name: "Email",
      value: "joaopcrema@gmail.com",
      link: "mailto:joaopcrema@gmail.com",
      icon: "📧", 
      color: "hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
    },
    {
      name: "LinkedIn",
      value: "in/joao-rema",
      link: "https://linkedin.com/in/joao-rema",
      icon: "🔗",
      color: "hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
    },
    {
      name: "GitHub",
      value: "github.com/joaorema",
      link: "https://github.com/joaorema",
      icon: "🐙",
      color: "hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
    },
    {
      name: "Resume",
      value: "Download PDF",
      link: "/public/João_Rema_Cv_Eng.pdf", 
      icon: "📄",
      color: "hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-[80vh] flex flex-col justify-center px-4 py-20 bg-white"
    >
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins text-black mb-6">
            Ways to reach me
          </h1>
          <p className="text-xl text-zinc-600 font-mono max-w-2xl mx-auto">
            Currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        {/* The Grid: 1 column on mobile, 2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group flex items-center p-6 
                bg-white border-2 border-zinc-100 rounded-2xl
                transition-all duration-300 ease-out
                hover:shadow-lg hover:-translate-y-1
                ${method.color}
              `}
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center text-3xl mr-6 group-hover:bg-white group-hover:shadow-sm transition-all">
                {method.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span className="text-sm font-bold font-mono text-zinc-400 uppercase tracking-wider mb-1">
                  {method.name}
                </span>
                <span className="text-lg md:text-xl font-bold font-poppins text-black group-hover:underline decoration-2 underline-offset-4">
                  {method.value}
                </span>
              </div>

              {/* Arrow Icon (only shows on hover or nice static placement) */}
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
        
        {/* Footer Note */}
        <div className="mt-20 text-center border-t border-zinc-100 pt-10">
          <p className="font-mono text-sm text-zinc-400">
             Designed & Built by João Rema © {new Date().getFullYear()}
          </p>
        </div>

      </div>
    </section>
  );
};


export default ContactsPage