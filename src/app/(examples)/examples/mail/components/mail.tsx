'use client'

import {
    AlertCircle,
    Archive,
    ArchiveX,
    File,
    Inbox,
    MessagesSquare,
    Search,
    Send,
    ShoppingCart,
    Trash2,
    Users2
} from 'lucide-react'
import * as React from 'react'

import { Input } from '@/components/ui/input'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TooltipProvider } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

import { type Mail } from '../data'
import { useMail } from '../use-mail'
import { AccountSwitcher } from './account-switcher'
import { MailDisplay } from './mail-display'
import { MailList } from './mail-list'
import { Nav } from './nav'

interface MailProps {
    accounts: {
        label: string
        icon: React.ReactNode
        email: string
    }[]
    mails: Mail[]
    defaultLayout: number[] | undefined
    defaultCollapsed?: boolean
    navCollapsedSize: number
}

// biome-ignore lint/suspicious/noRedeclare: 类型定义跟组件名称不冲突
export function Mail({
    accounts,
    mails,
    defaultLayout = [20, 32, 48],
    defaultCollapsed = false,
    navCollapsedSize
}: MailProps) {
    const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)
    const [mail] = useMail()

    return (
        <TooltipProvider delayDuration={0}>
            <ResizablePanelGroup
                className="h-full max-h-[800px] items-stretch"
                direction="horizontal"
                onLayout={(sizes: number[]) => {
                    document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(sizes)}`
                }}>
                <ResizablePanel
                    className={cn(isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out')}
                    collapsedSize={navCollapsedSize}
                    collapsible={true}
                    defaultSize={defaultLayout[0]}
                    maxSize={20}
                    minSize={15}
                    onCollapse={() => {
                        setIsCollapsed(true)
                        document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`
                    }}
                    onResize={() => {
                        setIsCollapsed(false)
                        document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`
                    }}>
                    <div className={cn('flex h-[52px] items-center justify-center', isCollapsed ? 'h-[52px]' : 'px-2')}>
                        <AccountSwitcher accounts={accounts} isCollapsed={isCollapsed} />
                    </div>
                    <Separator />
                    <Nav
                        isCollapsed={isCollapsed}
                        links={[
                            {
                                icon: Inbox,
                                label: '128',
                                title: 'Inbox',
                                variant: 'default'
                            },
                            {
                                icon: File,
                                label: '9',
                                title: 'Drafts',
                                variant: 'ghost'
                            },
                            {
                                icon: Send,
                                label: '',
                                title: 'Sent',
                                variant: 'ghost'
                            },
                            {
                                icon: ArchiveX,
                                label: '23',
                                title: 'Junk',
                                variant: 'ghost'
                            },
                            {
                                icon: Trash2,
                                label: '',
                                title: 'Trash',
                                variant: 'ghost'
                            },
                            {
                                icon: Archive,
                                label: '',
                                title: 'Archive',
                                variant: 'ghost'
                            }
                        ]}
                    />
                    <Separator />
                    <Nav
                        isCollapsed={isCollapsed}
                        links={[
                            {
                                icon: Users2,
                                label: '972',
                                title: 'Social',
                                variant: 'ghost'
                            },
                            {
                                icon: AlertCircle,
                                label: '342',
                                title: 'Updates',
                                variant: 'ghost'
                            },
                            {
                                icon: MessagesSquare,
                                label: '128',
                                title: 'Forums',
                                variant: 'ghost'
                            },
                            {
                                icon: ShoppingCart,
                                label: '8',
                                title: 'Shopping',
                                variant: 'ghost'
                            },
                            {
                                icon: Archive,
                                label: '21',
                                title: 'Promotions',
                                variant: 'ghost'
                            }
                        ]}
                    />
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
                    <Tabs defaultValue="all">
                        <div className="flex items-center px-4 py-2">
                            <h1 className="text-xl font-bold">Inbox</h1>
                            <TabsList className="ml-auto">
                                <TabsTrigger className="text-zinc-600 dark:text-zinc-200" value="all">
                                    All mail
                                </TabsTrigger>
                                <TabsTrigger className="text-zinc-600 dark:text-zinc-200" value="unread">
                                    Unread
                                </TabsTrigger>
                            </TabsList>
                        </div>
                        <Separator />
                        <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                            <form>
                                <div className="relative">
                                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input className="pl-8" placeholder="Search" />
                                </div>
                            </form>
                        </div>
                        <TabsContent className="m-0" value="all">
                            <MailList items={mails} />
                        </TabsContent>
                        <TabsContent className="m-0" value="unread">
                            <MailList items={mails.filter((item) => !item.read)} />
                        </TabsContent>
                    </Tabs>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={defaultLayout[2]} minSize={30}>
                    <MailDisplay mail={mails.find((item) => item.id === mail.selected) || null} />
                </ResizablePanel>
            </ResizablePanelGroup>
        </TooltipProvider>
    )
}
