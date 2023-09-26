import MainTitle from "@/Components/MainTitle";
import BlogComponent, {BlogComponentProps} from "@/Components/BlogComponent";
import {fetchPosts} from "@/sanity/utils/fetchPosts";


export default async function Writings() {

    const posts:BlogComponentProps[] = await fetchPosts();

    return (
        <main className="container p-12 w-full h-full flex flex-col md:gap-0 gap-4">
            <div className="text-left">
                <MainTitle direction="left">
                    Writings
                </MainTitle>
                <p>
                    you can find my <i>thoughts</i> here.
                </p>
            </div>
            <div className="p-8 flex flex-col gap-6">
                {posts.map((post, index) => (
                    <BlogComponent key={index} slug={post.slug} title={post.title} date={post.publishedAt} />
                ))}

            </div>
        </main>
    )
}

