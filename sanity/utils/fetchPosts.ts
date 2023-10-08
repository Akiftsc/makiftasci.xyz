import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import {BlogComponentProps} from "@/Components/BlogComponent"


export const query = groq`
*[_type=="post"]{
    _id,
      title,
      publishedAt,
      slug,
  } | order(_createdAt asc)
`;

export const fetchPosts = async () => {
    const posts:BlogComponentProps[] = await client.fetch(query, {
        cache: "no-cache",
        next: {
            revalidate: 60 * 60
        }
    });
    return posts;
};

export const fetchPost = async (querySlug: string) => {
    const query = groq`
    *[_type=="post" && slug.current == "${querySlug}"][0]{
    _id,
      title,
      description,
      mainImage,
      publishedAt,
      slug,
      author->{
        name,
        image
      },
      categories[]->{
        _id,
        description,
        title
      },
      body
  }
`;

    const post = await client.fetch(query);
    return post;
};