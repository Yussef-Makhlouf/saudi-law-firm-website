'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { PRACTICE_AREAS } from '@/lib/data'

export function PracticeAreas() {
    return (
        <section className="py-24 px-4 md:px-8 lg:px-12 bg-background border-b border-border">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-border pb-8">
                    <div>
                        <span className="text-xs font-bold tracking-widest text-accent uppercase mb-2 block">
                            دليل الخدمات
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                            مجالات الاختصاص
                        </h2>
                    </div>
                    <Link
                        href="/practice-areas"
                        className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <span>تصفح الدليل الكامل</span>
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    </Link>
                </div>

                {/* The Registry Grid - Strict, Divider-based */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
                    {PRACTICE_AREAS.slice(0, 6).map((item, i) => (
                        <div
                            key={i}
                            className="group relative p-8 border-r border-b border-border bg-background hover:bg-muted/30 transition-colors"
                        >
                            {/* Numbering - Architectural style */}
                            <span className="block text-4xl font-light text-border mb-6 group-hover:text-accent/50 transition-colors">
                                {String(i + 1).padStart(2, '0')}
                            </span>

                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-muted-foreground font-normal leading-relaxed text-sm mb-6 line-clamp-3">
                                {item.shortDesc}
                            </p>

                            <div className="absolute bottom-8 left-8 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                <ArrowLeft className="w-5 h-5 text-accent" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
