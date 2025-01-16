import { CollectionConfig, FieldHook } from "payload";

export const MoviesCollection: CollectionConfig = {
    slug: 'movies',
    admin: {
        useAsTitle: 'name'
    },
    access: {
        create: () => true,
        read: () => true
    },
    fields: [
        {
            name: 'name',
            type: "text",
            required: true
        },
        {
            name: 'url',
            type: 'text',
            required: true
        },
        {
            name: 'votes',
            type: 'number',
            required: true
        }
    ]
}