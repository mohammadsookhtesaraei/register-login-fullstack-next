"use client";

import { menuLink } from "@/constant/menuItems";
import NavLink from "@/components/layout/navLink";

const Header = () => {
  return (
    <header className="shadow-md mb-8 border-b border-b-gray-300/30 sticky top-0 z-99 transition-all duration-150">
      <nav className="container px-4 lg:px-0 flex items-center h-15">
        <ul className="flex gap-x-4">
          {menuLink.map((item) => (
            <li key={item.id}>
              <NavLink path={item.path}>{item.children}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
