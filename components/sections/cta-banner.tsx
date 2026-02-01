'use client'

import { MessageSquare, ArrowRight, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function CtaBanner() {
    return (
        <section className="py-24 px-4 md:px-8 lg:px-12 border-t border-border bg-background">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-block px-4 py-1 mb-6 border border-primary/20 bg-primary/5">
                    <span className="text-xs font-bold tracking-widest text-primary uppercase">
                        طلب خدمات قانونية
                    </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                    هل تحتاج إلى استشارة قانونية؟
                </h2>

                <p className="text-lg text-muted-foreground font-normal mb-10 leading-relaxed max-w-2xl mx-auto">
                    يمكنك التواصل المباشر معي لترتيب موعد استشارة أو مناقشة تفاصيل قضيتك، وأضمن لك السرية التامة والاهتمام الشخصي.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href={siteConfig.links.whatsapp('أود استشارة قانونية متخصصة')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 bg-foreground text-background font-medium hover:bg-foreground/90 transition-all inline-flex items-center justify-center gap-2"
                    >
                        <MessageSquare className="w-5 h-5" />
                        بدء محادثة واتس آب
                        <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                        href={siteConfig.links.phone}
                        className="w-full sm:w-auto px-8 py-4 border border-border text-foreground hover:bg-muted font-medium transition-all inline-flex items-center justify-center gap-2"
                    >
                        <Phone className="w-5 h-5" />
                        اتصال هاتفي
                    </a>
                </div>
            </div>
        </section>
    )
}
