import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config'

import { CommandMenu } from './command-menu'
import { Icons } from './icons'
import { MainNav } from './main-nav'
import { ModeSwitcher } from './mode-switcher'

export function SiteHeader() {
    return (
        <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container-wrapper">
                <div className="container flex h-14 items-center gap-2 md:gap-4">
                    <MainNav />
                    <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
                        <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
                            <CommandMenu />
                        </div>
                        <nav className="flex items-center gap-0.5">
                            <Button asChild className="h-8 w-8 px-0" size="icon" variant="ghost">
                                <Link href={siteConfig.links.github} rel="noreferrer" target="_blank">
                                    <Icons.gitHub className="h-4 w-4" />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                            </Button>
                            <ModeSwitcher />
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
