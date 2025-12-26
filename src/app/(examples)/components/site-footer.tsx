import { siteConfig } from '@/config'

export function SiteFooter() {
    return (
        <footer className="border-grid border-t py-6 md:py-0">
            <div className="container-wrapper">
                <div className="container py-4">
                    <div className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by{' '}
                        <a
                            className="font-medium underline underline-offset-4"
                            href={siteConfig.links.twitter}
                            rel="noreferrer"
                            target="_blank">
                            shadcn
                        </a>
                        . The source code is available on{' '}
                        <a
                            className="font-medium underline underline-offset-4"
                            href={siteConfig.links.github}
                            rel="noreferrer"
                            target="_blank">
                            GitHub
                        </a>
                        .
                    </div>
                </div>
            </div>
        </footer>
    )
}
