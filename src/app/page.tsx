'use client'

import { useRef } from 'react'

import { Button } from '@/components/ui/button'

export default function Home() {
    const container = useRef<HTMLDivElement>(null)

    return (
        <div
            className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"
            ref={container}>
            <Button onClick={() => {}} size="lg">
                Click Me
            </Button>
        </div>
    )
}
