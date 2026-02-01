'use client'

import { ArrowRight, FileText } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function Hero() {
    return (
        <section className="relative border-b border-border bg-background overflow-hidden">
            {/* Background Image - City Aura */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/cta-bg-city.png"
                    alt=""
                    className="w-full h-full object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
            </div>

            {/* Grid Background Pattern - Subtle legal paper feel */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

                    {/* Content Column - "The Decree" */}
                    <div className="flex flex-col justify-center px-4 md:px-12 py-16 lg:py-0 border-l border-border relative z-10 bg-background/50">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 text-xs font-bold text-primary tracking-widest uppercase bg-primary/5">
                                <span className="w-1.5 h-1.5 bg-primary" />
                                مكتب محاماة شخصي
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
                                الدفاع القانوني <br />
                                <span className="text-muted-foreground font-light">بمعايير مهنية شخصية</span>
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground font-normal leading-relaxed max-w-xl border-r-2 border-accent pr-6">
                                {siteConfig.description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={siteConfig.links.phone}
                                    className="inline-flex items-center justify-center h-12 px-8 bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors"
                                >
                                    حجز موعد استشارة
                                    <ArrowRight className="w-4 h-4 mr-2" />
                                </a>
                                <a
                                    href="/about"
                                    className="inline-flex items-center justify-center h-12 px-8 border border-border text-foreground font-bold hover:bg-muted transition-colors"
                                >
                                    <FileText className="w-4 h-4 ml-2" />
                                    نبذة عني
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Image Column - "The Structure" */}
                    <div className="relative h-full min-h-[400px] lg:min-h-auto border-t lg:border-t-0 border-border bg-muted">
                        <div className="absolute inset-0 grayscale contrast-[1.1] mix-blend-multiply opacity-90">
                            {/* 
                  Using an architectural/abstract image or the lawyer image but strictly processed.
                  For now using the existing lawyer image but with CSS filters to look "newsprint/official".
               */}
                            <img
                                src="/lawyer.jpeg"
                                alt="Representative Legal Counsel"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Overlay grid lines for architectural feel */}
                        <div className="absolute inset-0 border-r border-border pointer-events-none" />

                        {/* Status Indicator Bottom Right */}
                        <div className="absolute bottom-0 right-0 p-6 bg-background border-t border-l border-border">
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">الحالة</span>
                                <span className="text-sm font-semibold flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                                    </span>
                                    متاح للاستشارات
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
