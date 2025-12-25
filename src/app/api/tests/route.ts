import { NextResponse } from 'next/server'

import { prisma } from '@/database'

export async function GET() {
    const res = await prisma.test.create({
        data: {
            message: 'Hello World!'
        }
    })
    return NextResponse.json({ data: res, status: 200 })
}
