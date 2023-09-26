// @ts-ignore
import MainTitle from "@/Components/MainTitle";
import GalleryComponent from "@/Components/GalleryComponent";

export default function Writings() {
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
                    <GalleryComponent src="https://images.unsplash.com/photo-1638787417399-1e2b2c3688af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt={"photo of eskisehir"} />
                    <GalleryComponent src="https://images.unsplash.com/photo-1668022149405-0b4adc0ea81b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" alt={"photo of eskisehir"} />
                    <GalleryComponent src="https://images.unsplash.com/photo-1668617212157-28ef95b71e25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt={"photo of eskisehir"} />
                    <GalleryComponent src="https://images.unsplash.com/photo-1638787417399-1e2b2c3688af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt={"photo of eskisehir"} />
                    <GalleryComponent src="https://images.unsplash.com/photo-1638787417399-1e2b2c3688af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt={"photo of eskisehir"} />
                </div>
        </main>
    )
}
