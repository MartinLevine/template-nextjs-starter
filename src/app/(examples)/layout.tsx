import { ArrowRightIcon } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { Announcement } from './components/announcement'
import { ExamplesNav } from './components/nav'
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from './components/page-header'
import { SiteFooter } from './components/site-footer'
import { SiteHeader } from './components/site-header'

import './styles.css'

const title = 'Examples'
const description = 'Check out some examples app built using the components.'

export const metadata: Metadata = {
    description,
    openGraph: {
        images: [
            {
                url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`
            }
        ]
    },
    title,
    twitter: {
        card: 'summary_large_image',
        images: [
            {
                url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`
            }
        ]
    }
}

export default function ExamplesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div vaul-drawer-wrapper="">
            <div className="bg-background relative flex min-h-svh flex-col">
                <div className="bg-muted text-muted-foreground sticky top-0 z-[100] flex h-10 items-center justify-center gap-2 px-4 text-sm">
                    You are viewing the v3 docs.{' '}
                    <Link className="text-primary flex items-center gap-1 underline" href="https://ui.shadcn.com">
                        Switch to latest <ArrowRightIcon className="size-3" />
                    </Link>
                </div>
                <div className="border-grid flex flex-1 flex-col" data-wrapper="">
                    <SiteHeader />
                    <main className="flex flex-1 flex-col">
                        <PageHeader>
                            <Announcement />
                            <PageHeaderHeading>Build your component library</PageHeaderHeading>
                            <PageHeaderDescription>
                                A set of beautifully-designed, accessible components and a code distribution platform.
                                Works with your favorite frameworks. Open Source. Open Code.
                            </PageHeaderDescription>
                            <PageActions>
                                <Button asChild size="sm">
                                    <Link href="/docs">Get Started</Link>
                                </Button>
                                <Button asChild size="sm" variant="ghost">
                                    <Link href="/blocks">Browse Blocks</Link>
                                </Button>
                            </PageActions>
                        </PageHeader>
                        <div className="border-grid border-b">
                            <div className="container-wrapper">
                                <div className="container py-4">
                                    <ExamplesNav />
                                </div>
                            </div>
                        </div>
                        <div className="container-wrapper">
                            <div className="container py-6">
                                <section className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
                                    {children}
                                </section>
                            </div>
                        </div>
                    </main>
                    <SiteFooter />
                </div>
            </div>
        </div>
    )
}
