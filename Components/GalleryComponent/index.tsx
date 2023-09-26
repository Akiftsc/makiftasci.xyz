"use client";
import Image from "next/image"

interface GalleryComponentProps {
    src: string;
    alt: string;
    details?: {
        title: string;
        description: string;
        width: number;
        height: number;
    }
}

export default function GalleryComponent({src, alt, details}: GalleryComponentProps){
    return(
        <div className="block overflow-hidden relative rounded-lg saturate-50 transition-all duration-350 hover:scale-105 hover:saturate-100 cursor-pointer group">
            <Image src={src} alt={alt} width={2722} height={3397} className="w-full h-full object-cover"/>
            <div className="hidden group-hover:block absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent ">
                <div className="p-4 text-white">
                    <h3 className="text-lg font-semibold">Pazarköy - Eskişehir, Türkiye</h3>
                </div>
            </div>
        </div>
    )
}