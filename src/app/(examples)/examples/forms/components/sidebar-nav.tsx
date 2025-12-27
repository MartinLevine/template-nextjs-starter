'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string
        title: string
    }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
    const pathname = usePathname()

    return (
        <nav className={cn('flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1', className)} {...props}>
            {items.map((item) => (
                <Link
                    className={cn(
                        buttonVariants({ variant: 'ghost' }),
                        pathname === item.href ? 'bg-accent text-accent-foreground' : 'hover:bg-accent hover:underline',
                        'justify-start'
                    )}
                    href={item.href}
                    key={item.href}>
                    {item.title}
                </Link>
            ))}
        </nav>
    )
}
