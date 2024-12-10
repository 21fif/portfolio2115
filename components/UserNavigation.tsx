"use client";

import { useState } from "react";
import Link from "next/link";
import { ReactNode } from "react";

const navLinks = [
  { link: "/en", name: "EN"},
  { link: "/", name: "Strona główna" },
  { link: "/projects", name: "Moje projekty" },
  { link: "/about", name: "O mnie" },
  { link: "/contact", name: "Kontakt" },
];

type NavigationProps = {
  children?: ReactNode;
};

const FormNavigation: React.FC<NavigationProps> = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-gray-50 text-primary-foreground px-4 lg:px-20 text-lg">
      <button
        className="block lg:hidden p-4 focus:outline-none"
        onClick={toggleMenu}
      >
        Menu
      </button>
      <div
        className={`${
          showMenu ? "block" : "hidden"
        } lg:flex lg:justify-end lg:items-center`}
      >
        {navLinks.map((el) => (
          <Link
            key={el.name}
            href={el.link}
            className="block lg:inline-block p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground"
          >
            {el.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default FormNavigation;

