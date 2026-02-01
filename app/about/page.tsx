'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { CheckCircle2 } from 'lucide-react'

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Strict Layout */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="pt-8">
              <span className="inline-block px-3 py-1 mb-6 border border-primary/20 text-xs font-bold tracking-widest text-primary uppercase bg-primary/5">
                نبذة عني
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                محامٍ ومستشار قانوني<br />برؤية وطنية راسخة
              </h1>
              <p className="text-xl text-muted-foreground font-normal leading-relaxed mb-10 pl-8 border-l-2 border-accent">
                أقدم خدمات قانونية متكاملة وفق أعلى معايير الحوكمة والأنظمة العدلية في المملكة، مع التزام تام بالمسؤولية المهنية.
              </p>
            </div>
            {/* Architectural Image Mask - No border radius */}
            <div className="relative h-[500px] bg-muted w-full border border-border">
              {/* Placeholder filter for institutional look */}
              <div className="absolute inset-0 grayscale contrast-[1.1] mix-blend-multiply opacity-90">
                <img
                  src="/office-detail.jpg"
                  alt="مقر المؤسسة"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Grid overlay */}
              <div className="absolute inset-0 border-l border-border pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Grid - The "Qualifications" */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-border border-x border-border">
            {[
              'ترخيص وزارة العدل',
              'عضوية الهيئة القانونية',
              'خبرة في القضاء التجاري',
              'تصنيف مهني متقدم',
            ].map((item, i) => (
              <div key={i} className="p-8 flex items-center justify-center text-center bg-background hover:bg-muted/30 transition-colors group">
                <div className="flex flex-col items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-foreground/20 group-hover:text-accent transition-colors" />
                  <span className="text-sm font-bold text-foreground">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Profile Content */}
      <section className="py-24 px-4 md:px-8 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            {/* Sidebar Title */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-4 sticky top-24">
                الرؤية والمنهجية
              </h2>
            </div>

            {/* Content Body */}
            <div className="md:col-span-2 space-y-12">
              <div className="prose prose-lg text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  نؤمن بأن العمل القانوني ليس مجرد إجراءات، بل هو منظومة متكاملة من القيم والمبادئ التي تهدف إلى إحقاق الحق وحماية المصالح. تأسست مؤسستنا على مبدأ "الاحترافية المطلقة"، حيث ندمج بين الخبرة القضائية العميقة والفهم الدقيق لبيئة الأعمال المتسارعة في المملكة.
                </p>
              </div>

              {/* Values Grid - Strict Borders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
                {[
                  { title: 'الالتزام (Commitment)', desc: 'حرص تام على مصلحة الموكل بأمانة مطلقة.' },
                  { title: 'الدقة (Precision)', desc: 'عناية فائقة بالتفاصيل القانونية والإجرائية.' },
                  { title: 'السرية (Privacy)', desc: 'قدسية تامة لمعلومات وبيانات الموكلين.' },
                  { title: 'الاستدامة (Sustainability)', desc: 'بناء علاقات مهنية طويلة الأمد.' },
                ].map((val, idx) => (
                  <div key={idx} className="bg-background p-8 hover:bg-muted/30 transition-colors">
                    <h3 className="text-base font-bold text-foreground mb-2">{val.title}</h3>
                    <p className="text-sm text-muted-foreground">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
