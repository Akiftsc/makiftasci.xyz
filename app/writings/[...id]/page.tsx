import MainTitle from "@/Components/MainTitle";
import Image from "next/image";
import { fetchPosts, fetchPost } from "@/sanity/utils/fetchPosts";
//@ts-ignore
import {PortableText} from '@portabletext/react'
import { urlFor } from "@/sanity/utils/UrlFor";
import type { Metadata, ResolvingMetadata } from 'next'
import urlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'


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

    // @ts-ignore
    const SampleImageComponent = ({value}) => {
        const {width, height} = getImageDimensions(value)
        const imageDimensions = {
            url: urlFor(value).url(),
            width: urlFor(value).options.width,
            height: urlFor(value).options.height
        }
        return (
            <Image
                width={imageDimensions.width}
                height={imageDimensions.height}
                src={imageDimensions.url
                    }
                alt={value.alt || ' '}
            />
        )
    }

    const components = {
        types: {
            image: SampleImageComponent,

        },
    }


    return (
        <main className="container-sm py-12 px-8 w-full h-full flex flex-col items-center gap-8 text-defaultBlogText">
            <div className=" prose-img:rounded-xl flex flex-col items-center text-center tracking-tight text-2xl gap-4">
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
                    <Image alt="photo of author" src={authorImage.url} width={36} height={36} className="inline rounded-full" />
                </span></h4>
            </div>
            <div className="!text-left prose prose-stone">

                <Image src={MainImage.url} width={MainImage.width} height={MainImage.height} alt="Blog post's image" className="rounded" style={{ boxShadow: "0px 6px 5px 0px rgba(0, 0, 0, 0.25)" }} priority={true} />
                <div className="text-left text-lg">
                    <PortableText value={post.body}  components={components} />
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


