import React from "react";

const ContactsPage: React.FC = () => {
  const contactMethods = [
    {
      name: "Email",
      value: "joaopcrema@gmail.com",
      link: "mailto:joaopcrema@gmail.com",
      color: "hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
    },
    {
      name: "LinkedIn",
      value: "in/joao-rema",
      link: "https://linkedin.com/in/joao-rema",

      color: "hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
    },
    {
      name: "GitHub",
      value: "github.com/joaorema",
      link: "https://github.com/joaorema",

      color: "hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
    },
    {
      name: "Resume",
      value: "Download PDF",
      link: "https://drive.google.com/file/d/1X_81nQlN2mc2ARXPLtPj6guzNTBtbp8h/view?usp=drive_link",
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
              {/* Text */}
              <div className="flex flex-col">
                <span className="text-sm font-bold font-poppins text-black uppercase tracking-wider mb-1">
                  {method.name}
                </span>
                <span className="text-lg md:text-xl font-bold font-poppins text-zinc-600  decoration-2 underline-offset-4">
                  {method.value}
                </span>
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

export default ContactsPage;
