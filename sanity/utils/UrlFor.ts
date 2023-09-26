import {client} from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils';

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source).size(getImageDimensions(source).width, getImageDimensions(source).height).auto('format')
}

