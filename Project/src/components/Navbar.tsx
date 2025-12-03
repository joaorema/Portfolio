import React from "react";


const links = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Technologies", href: "#technologies" },
  { name: "Contributions", href: "#contributions" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-4xl mx-auto flex justify-center gap-10 py-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-dark font-semibold hover:text-yellow-300 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};


export default Navbar;


