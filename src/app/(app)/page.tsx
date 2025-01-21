import { Badge } from '@/components/Badge'
import { Background } from '@/components/Background'
import Link from 'next/link'
import React from 'react'
import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

const Page = async () => {
    const payload = await getPayloadHMR({
        config,
    })
    return (
        <>
            <Background />
        </>
    )
}

export default Page
