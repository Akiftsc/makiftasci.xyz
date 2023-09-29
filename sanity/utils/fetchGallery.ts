import { groq } from "next-sanity";
//@ts-ignore
import { client } from "@/sanity/lib/client";


export const query = groq`
*[_type=="gallery"]{
    _id,
      image,
      place
  } | order(_createdAt asc)
`;

export const fetchGallery = async () => {
    const images = await client.fetch(query, {
        next: {
            revalidate: 3600
        }
    });
    return images;
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