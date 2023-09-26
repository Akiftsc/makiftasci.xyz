"use client"

type navLink = {
    title: string,
    to: string,
    text: string
}

interface TProps{
    navLinks: navLink[],
    pathname?: any
}

export default function setText({navLinks, pathname}: TProps): navLink{
    const selectedLink: navLink[] = navLinks.filter((link: navLink) => link.to === pathname);
    return selectedLink[0];
}