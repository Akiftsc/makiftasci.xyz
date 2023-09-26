import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface bookProps {
    title: string,
    cover: string,
    readPercents: number
    slug: string
}

export default function ReadingBook({ title, cover, readPercents, slug }: bookProps) {

    return (
        <Link className="flex flex-col items-center justify-center text-center w-48 mx-0" href={`https://literal.club/book/${slug}`} target={"_blank"}>

            <div
                className={`flex flex-col p-0 cursor-pointer book relative min-w-full`}
                style={{ "--percentage": (readPercents + "%") } as React.CSSProperties}
            >
                <Image alt={""} className="z-10 object-contain shadow-bookCover" src={cover} layout="responsive" width={176} height={256} />

            </div>
            <span>
                <h2 className="w-full mt-1 text-[#3C3A36] text-base tracking-tighter capitalize font-[500] text-center">
                    {title}
                </h2>
            </span>
        </Link>
    )
}