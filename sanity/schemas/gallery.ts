import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'gallery',
    title: 'gallery',
    type: 'document',
    fields: [
        defineField({
            name: 'place',
            title: 'Place',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ]
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),

    ],
})
