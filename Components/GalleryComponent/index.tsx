import Image from "next/image";
import { urlFor } from "@/sanity/utils/UrlFor";



interface GalleryComponentProps {
    image : any;
    place: string
}

export default function GalleryComponent({image, place}: GalleryComponentProps){

    const {alt} = image;


    const GalleryImage = {
        url: urlFor(image).url(),
        width: urlFor(image).options.width,
        height: urlFor(image).options.height
    }

    return(
        <div className="block overflow-hidden relative rounded-lg saturate-50 transition-all duration-350 hover:scale-105 hover:saturate-100 cursor-pointer group">
            <Image src={GalleryImage.url}
                   alt={alt} width={GalleryImage.width} height={GalleryImage.height}
                   className="w-full h-full object-cover"/>
            <div className="hidden group-hover:block absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent ">
                <div className="p-4 text-white">
                    <h3 className="text-lg font-semibold">{place}</h3>
                </div>
            </div>
        </div>
    )
}