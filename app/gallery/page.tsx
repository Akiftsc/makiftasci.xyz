import MainTitle from "@/Components/MainTitle";
import GalleryComponent from "@/Components/GalleryComponent";
import {fetchGallery} from "@/sanity/utils/fetchGallery";


export default async function Writings() {
    const images = await fetchGallery();
    return (
        <main className="container p-12 w-full h-full flex flex-col gap-4">
            <div className="text-left">
                <MainTitle direction="left">
                    Gallery
                </MainTitle>
                <p>
                    I share where I traveled here.
                </p>
            </div>
            {/*TODO: GIVE THE IMAGES' ORIGINAL WIDTH AND HEIGHT*/}
                <div className="grid items-end gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 md:gap-y-20 lg:grid-cols-4">
                    {
                        images.map((image:any, key:any) => (
                            <GalleryComponent place={image.place} image={image.image} key={key} />
                        ))
                    }
                </div>
        </main>
    )
}
