import Link from "next/link"
import {usePathname} from 'next/navigation'

type NavItemProps ={
    label: string
    href: string
}

export const NavItem = ({label, href}: NavItemProps) => {
    const pathname = usePathname();
    return(
        <Link href={href} className="text-gray-400 flex items-center gap-2 font-medium font-mono">
            <span className="text-emerald-400">#</span>
            {label}
        </Link>
    )
}