"use client";

// add next import
import { usePathname } from "next/navigation";
import Link from "next/link";

// clsx lib for manage tailwind style
import clsx from "clsx";


// types
type TNavLinkProps = {
  path: string;
  children: React.ReactNode;
};


const NavLink = ({ path, children }: TNavLinkProps) => {
    
  const pathname = usePathname();
  const isActive =pathname === path || (pathname.startsWith(path) && path !== "/");
    

  const classNames = clsx({
    "text-blue-400 pb-1 border-b": isActive,
    "text-gray-400": !isActive,
  });



  return (
    <Link className={classNames} href={path}>
      {children}
    </Link>
  );
};
export default NavLink;
