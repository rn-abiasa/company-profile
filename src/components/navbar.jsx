//import {}

import { useState } from "react";
import { Menu } from "lucide-react";
import Hamburger from "./hamburger";
import Button from "./button";

const links = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Services", url: "/services" },
  { label: "Contacts", url: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 bg-white border-b border-black/20 p-5 sm:px-16 md:px-26 lg:px-36 xl:px-48">
        <div className="flex justify-between items-center">
          <div>
            <a href="" className="text-lg font-semibold">
              Company
            </a>
          </div>
          <div className="hidden md:flex gap-5">
            {links.map((link) => (
              <a
                href={link.url}
                key={link.label}
                className="text-sm text-black/50 hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
            >
              <Menu />
            </button>
            <Button variant="default" className="hidden md:flex">
              Start Your Project
            </Button>
          </div>
        </div>
      </header>
      {menuOpen && <Hamburger />}
    </>
  );
};

export default Navbar;
