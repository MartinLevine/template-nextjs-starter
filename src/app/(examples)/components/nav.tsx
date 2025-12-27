'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

const examples = [
    {
        code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/mail',
        hidden: false,
        href: '/examples/mail',
        name: 'Mail'
    },
    {
        code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/dashboard',
        hidden: false,
        href: '/examples/dashboard',
        name: 'Dashboard'
    },
    {
        code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/tasks',
        hidden: false,
        href: '/examples/tasks',
        name: 'Tasks'
    },
    {
        code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/playground',
        hidden: false,
        href: '/examples/playground',
        name: 'Playground'
    },
    {
        code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/forms',
        hidden: false,
        href: '/examples/forms',
        name: 'Forms'
    },
    {
        code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/music',
        hidden: false,
        href: '/examples/music',
        name: 'Music'
    },
    {
        code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/authentication',
        hidden: false,
        href: '/examples/authentication',
        name: 'Authentication'
    }
]

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExamplesNav({ className, ...props }: ExamplesNavProps) {
    const pathname = usePathname()

    return (
        <div className="relative">
            <ScrollArea className="max-w-[600px] lg:max-w-none">
                <div className={cn('flex items-center', className)} {...props}>
                    <ExampleLink
                        example={{ code: '', hidden: false, href: '/', name: 'Examples' }}
                        isActive={pathname === '/'}
                    />
                    {examples.map((example) => (
                        <ExampleLink
                            example={example}
                            isActive={pathname?.startsWith(example.href) ?? false}
                            key={example.href}
                        />
                    ))}
                </div>
                <ScrollBar className="invisible" orientation="horizontal" />
            </ScrollArea>
        </div>
    )
}

function ExampleLink({ example, isActive }: { example: (typeof examples)[number]; isActive: boolean }) {
    if (example.hidden) {
        return null
    }

    return (
        <Link
            className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[active=true]:bg-muted data-[active=true]:text-primary"
            data-active={isActive}
            href={example.href}
            key={example.href}>
            {example.name}
        </Link>
    )
}
