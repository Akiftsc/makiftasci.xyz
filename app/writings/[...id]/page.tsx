import MainTitle from "@/Components/MainTitle";
import Image from "next/image";
import { fetchPosts, fetchPost } from "@/sanity/utils/fetchPosts";
// @ts-ignore
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "@/sanity/utils/UrlFor";
import type { Metadata, ResolvingMetadata } from 'next'


export default async function BlogDetail({ params }: any) {
    const slug = params.id;
    const post = await fetchPost(slug);
    const MainImage = {
        url: urlFor(post.mainImage).url(),
        width: urlFor(post.mainImage).options.width,
        height: urlFor(post.mainImage).options.height
    }

    const authorImage = {
        url: urlFor(post.author.image).url()
    }


    return (
        <main className="container-sm p-12 w-full h-full flex flex-col items-center gap-8 text-defaultBlogText">
            <div className="flex flex-col items-center gap-4 text-center tracking-tight text-2xl ">
                <h4 className="text-lg">{
                    new Date(`${post.publishedAt}`).toLocaleString("tr-TR",
                        {
                            timeZone: "Europe/Istanbul",
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        })
                }</h4>
                <MainTitle size="two" direction="center" wide={false}>
                    {post.title}
                </MainTitle>
                <h4 className="text-lg">From: {post.author.name} <span className="inline">
                    <Image alt="photo of author" src={authorImage.url} width={32} height={36} className="inline rounded-2xl" />
                </span></h4>
            </div>
            <div className="flex flex-col items-center justify-between gap-3 tracking-tight text-base max-w-[960px] !text-left">

                <Image src={MainImage.url} width={MainImage.width} height={MainImage.height} alt="Blog post's image" className="rounded" style={{ boxShadow: "0px 6px 5px 0px rgba(0, 0, 0, 0.25)" }} priority={true} />
                <div className="text-left text-lg">
                    <BlockContent blocks={post.body} projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID} dataset={"production"} />
                </div>
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    const posts = await fetchPosts()

    return posts.map((post) => ({
        slug: post.slug,
    }))
}


interface Twitter {
    site: string;
    url: string;
    title: any;
    description: any;
    image: string;
}

export async function generateMetadata(
    { params }: any,
    parent: ResolvingMetadata
): Promise<any> {
    const slug = params.id;
    const post = await fetchPost(slug);
    return {
        title: post.title,
        description: post.description ?? `${post.title} from Mehmet Akif Taşçı`,
        openGraph: {
            title: post.title,
            description: post.description ?? `${post.title} from Mehmet Akif Taşçı`,
            type: "article",
            locale: "tr_TR",
            url: `https://makiftasci.xyz/writings/${post.slug.current}`,
            images: [
                urlFor(post.mainImage).url()
            ],
        },
        twitter: {
            site: "@akif2442",
            url: `https://makiftasci.xyz/writings/${post.slug.current}`,
            title: post.title,
            description: post.description ?? `${post.title} from Mehmet Akif Taşçı`,
            image: urlFor(post.mainImage).url(),
        },
        article: {
            publishedTime: post.publishedAt,
            modifiedTime: post._updatedAt ?? post.publishedAt,
            image: urlFor(post.mainImage).url(),
            tags: post.tags ?? ["Mehmet Akif Taşçı", post.title],
        }
    }
}


