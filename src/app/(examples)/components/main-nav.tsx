'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { siteConfig } from '@/config'
import { cn } from '@/lib/utils'

import { Icons } from './icons'

export function MainNav() {
    const pathname = usePathname()

    return (
        <div className="mr-4 hidden md:flex">
            <Link className="mr-4 flex items-center gap-2 lg:mr-6" href="/">
                <Icons.logo className="h-6 w-6" />
                <span className="hidden font-bold lg:inline-block">{siteConfig.name}</span>
            </Link>
            <nav className="flex items-center gap-4 text-sm xl:gap-6">
                <Link
                    className={cn(
                        'transition-colors hover:text-foreground/80',
                        pathname === '/docs/installation' ? 'text-foreground' : 'text-foreground/80'
                    )}
                    href="/docs/installation">
                    Docs
                </Link>
                <Link
                    className={cn(
                        'transition-colors hover:text-foreground/80',
                        pathname?.startsWith('/docs/components') && !pathname?.startsWith('/docs/component/chart')
                            ? 'text-foreground'
                            : 'text-foreground/80'
                    )}
                    href="/docs/components">
                    Components
                </Link>
                <Link
                    className={cn(
                        'transition-colors hover:text-foreground/80',
                        pathname?.startsWith('/blocks') ? 'text-foreground' : 'text-foreground/80'
                    )}
                    href="/blocks">
                    Blocks
                </Link>
                <Link
                    className={cn(
                        'transition-colors hover:text-foreground/80',
                        pathname?.startsWith('/docs/component/chart') || pathname?.startsWith('/charts')
                            ? 'text-foreground'
                            : 'text-foreground/80'
                    )}
                    href="/charts">
                    Charts
                </Link>
                <Link
                    className={cn(
                        'transition-colors hover:text-foreground/80',
                        pathname?.startsWith('/themes') ? 'text-foreground' : 'text-foreground/80'
                    )}
                    href="/themes">
                    Themes
                </Link>
                <Link
                    className={cn(
                        'transition-colors hover:text-foreground/80',
                        pathname?.startsWith('/colors') ? 'text-foreground' : 'text-foreground/80'
                    )}
                    href="/colors">
                    Colors
                </Link>
            </nav>
        </div>
    )
}
