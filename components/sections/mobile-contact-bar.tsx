'use client'

import { Phone, MessageSquare } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function MobileContactBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border">
            <div className="grid grid-cols-2 divide-x divide-x-reverse divide-border">
                <a
                    href={siteConfig.links.phone}
                    className="flex flex-col items-center justify-center p-4 active:bg-muted transition-colors text-foreground"
                >
                    <Phone className="w-5 h-5 mb-1" />
                    <span className="text-xs font-bold">اتصال</span>
                </a>
                <a
                    href={siteConfig.links.whatsapp()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 active:bg-muted transition-colors text-foreground"
                >
                    <MessageSquare className="w-5 h-5 mb-1" />
                    <span className="text-xs font-bold">واتس آب</span>
                </a>
            </div>
        </div>
    )
}
