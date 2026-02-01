'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { PRACTICE_AREAS } from '@/lib/data'
import { CtaBanner } from '@/components/sections/cta-banner'

export default function PracticeAreas() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 lg:px-12 py-20 border-b border-border overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/cta-bg-city.png"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 border border-foreground/10 text-xs font-bold tracking-widest text-foreground uppercase">
            مجالات الاختصاص
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight max-w-4xl">
            نطاق الخدمات القانونية
          </h1>
          <p className="text-xl text-muted-foreground font-normal leading-relaxed max-w-2xl">
            تغطي خدماتنا مختلف القطاعات الحيوية، مع التركيز على الدقة النظامية وحماية المصالح وفق أحدث الأنظمة القضائية.
          </p>
        </div>
      </section>

      {/* The Registry - Full List */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto border-x border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {PRACTICE_AREAS.map((area, index) => (
              <div
                key={index}
                className="group border-b border-border even:border-l-0 md:odd:border-l lg:border-l lg:[&:nth-child(3n)]:border-l-0 p-10 hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-baseline justify-between mb-8">
                  <span className="text-6xl font-thin text-foreground/5 group-hover:text-accent/20 transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="h-px w-12 bg-border group-hover:bg-accent transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground font-normal leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
            {/* Filler cells to complete the grid lines if needed, or just let CSS grid handle it. CSS Grid 'border-collapse' isn't a thing but negative margins or specific borders work. The current 'border' logic above is a bit manual. 
                   Let's stick to a simpler uniform border approach.
               */}
          </div>
        </div>
      </section>

      {/* Footer CTA already integrated manually or via component */}
      <div className="border-t border-border">
        <CtaBanner />
      </div>

      <Footer />
    </main>
  )
}
