"use client"
import setText from "@/Components/Header/setText";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {navLinks} from "@/utils/consts";

const Header = () => {



    const pathname = usePathname();
    const regex = /^(\/[^\/]+)/g;
    const isIndex = pathname === "/";
    // @ts-ignore
    const regexedPath = !isIndex && regex.exec(pathname)[0];
    const regexedTitle = setText({navLinks, pathname: regexedPath});

    const selectedNav = setText({navLinks, pathname}) ?? regexedTitle;

    return (
        <header className="bg-primary h-16 justify-center md:flex text-xs  md:text-base  md:px-7  md:py-4 shadow-default md:items-center md:justify-between tracking-tighter">
            <div className="grid place-items-center">
                <Link href="/" className="text-2xl italic hover:opacity-80">
                    Akif is
                    <p className="inline text-[#3B3B39FF]">
                        {isIndex  ?  " Developing Websites." : ` ${selectedNav?.text}.`}
                    </
                    p>
                </Link>
            </div>

            <nav className="flex md:w-full md:items-center md:flex-1 h-full items-start my-2 justify-center">
                <ul className="flex w-full md:justify-end items-center gap-x-16 justify-center">
                    {navLinks.map((link, index) => (
                        <li key={index} className="transition-all ease-out duration-300 cursor-pointer group ">
                            <Link href={link.to} className={`font-medium group-hover:opacity-80 text-sm tracking-tighter md:text-base ${link === selectedNav && "font-[600] underline"}`}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;