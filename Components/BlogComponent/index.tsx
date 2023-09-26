import Link from "next/link";

export interface BlogComponentProps {
    title: string,
    date?: string,
    publishedAt?: string,
    slug: {
        current: string,
        _type: string
    }
}

export default function BlogComponent({title, date, slug}: BlogComponentProps){
    return (
        <Link href={`/writings/${slug.current}`} className="
        flex flex-col rounded-sm p-4 items-start gap-2 cursor-pointer
        hover:bg-[#E8EDDFDD] hover:shadow-blogComponent transition duration-240 ease-in-out
        group
        ">
            <p className="text-[#3C3A36] text-sm md:text-lg">{new Date(`${date}`).toLocaleString("tr-TR",
                {
                    timeZone: "Europe/Istanbul",
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                })}</p>

            <h1 className="text-xl md:text-3xl text-[#231E1B] tracking-tight font-[500] group-hover:underline hover:opacity-80">
                {title}
            </h1>
        </Link>
    )
}