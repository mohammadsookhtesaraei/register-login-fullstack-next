"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

import clsx from "clsx"


type TNavLinkProps={
path:string,
children:React.ReactNode
}
const NavLink = ({path,children}:TNavLinkProps) => {
 const pathname=usePathname();
 const isActive=pathname === path || (pathname.startsWith(path) && path !== "/");

 const classNames=clsx("text-gray-400",{"text-blue-400":isActive});
  return (
    <Link className={classNames} href={path}>
        {children}
    </Link>
  )
}
export default NavLink