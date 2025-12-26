import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

import { SiteFooter } from './components/site-footer'
import { SiteHeader } from './components/site-header'

interface AppLayoutProps {
    children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
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
                    <main className="flex flex-1 flex-col">{children}</main>
                    <SiteFooter />
                </div>
            </div>
        </div>
    )
}
