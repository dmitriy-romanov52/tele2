'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavLink ({href, title}){
    const pathname = usePathname()
    const [path, setPath] = useState(href)
    let isActive = pathname == path ? "navlink-active" : ""
    return(
        <Link className={`navlink ${isActive}`} href={path}>{title}</Link>
    )
}