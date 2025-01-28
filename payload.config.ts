import { MoviesCollection } from '@/app/collections/Movies/movie'
import { postgresAdapter } from '@payloadcms/db-postgres'
import {
    lexicalEditor
} from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { en } from 'payload/i18n/en'
import sharp from 'sharp'
import { fileURLToPath } from 'url';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import { MediaCollection } from '@/app/collections/Media/media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    //editor: slateEditor({}),
    plugins: process.env.BLOB_READ_WRITE_TOKEN
        ? [
            vercelBlobStorage({
                collections: {
                    [MediaCollection.slug]: true,
                },
                token: process.env.BLOB_READ_WRITE_TOKEN || ''
            })
        ]
        : [],
    editor: lexicalEditor(),
    collections: [
        {
            slug: 'users',
            auth: true,
            access: {
                delete: () => false,
                update: () => false,
            },
            fields: [],
        },
        MoviesCollection,
        {
            slug: 'media',
            upload: true,
            fields: [
                {
                    name: 'text',
                    type: 'text',
                },
            ],
        },
    ],
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.POSTGRES_URL || ''
        }
    }),

    /**
     * Payload can now accept specific translations from 'payload/i18n/en'
     * This is completely optional and will default to English if not provided
     */
    i18n: {
        supportedLanguages: { en },
    },

    admin: {
        autoLogin: {
            email: 'dev@payloadcms.com',
            password: 'test',
            prefillOnly: true,
        },
    },
    async onInit(payload) {
        const existingUsers = await payload.find({
            collection: 'users',
            limit: 1,
        })

        if (existingUsers.docs.length === 0) {
            await payload.create({
                collection: 'users',
                data: {
                    email: 'dev@payloadcms.com',
                    password: 'test',
                },
            })
        }
    },
    sharp,
})
