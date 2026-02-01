'use client'

import Link from 'next/link'
import { Phone, MessageSquare } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Firm Info - The Seal */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">م</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {siteConfig.name}
              </h3>
            </div>
            <p className="text-muted-foreground font-normal text-sm leading-relaxed max-w-xs">
              خدمات قانونية متكاملة وفق أعلى معايير المهنية والاحترافية، برؤية قانونية شخصية ومباشرة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-6">
              المكتب
            </h4>
            <ul className="space-y-4">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground font-medium text-sm transition-colors block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-6">
              القطاعات
            </h4>
            <ul className="space-y-4">
              {[
                'القطاع التجاري',
                'القطاع العمالي',
                'النزاعات القضائية',
                'الاستثمار الأجنبي',
              ].map((area) => (
                <li key={area}>
                  <span className="text-muted-foreground font-normal text-sm block">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-6">
              قنوات الاتصال
            </h4>
            <div className="space-y-4">
              <a
                href={siteConfig.links.phone}
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
                dir="ltr"
              >
                <div className="w-8 h-8 border border-border flex items-center justify-center group-hover:border-accent transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">{siteConfig.contact.phone}</span>
              </a>
              <a
                href={siteConfig.links.whatsapp()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
              >
                <div className="w-8 h-8 border border-border flex items-center justify-center group-hover:border-accent transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">واتس آب</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground font-normal text-xs">
            © {new Date().getFullYear()} {siteConfig.name}. جميع الحقوق محفوظة وفق الأنظمة.
          </p>
          <div className="flex gap-6">
            <span className="text-muted-foreground font-normal text-xs">سياسة الخصوصية</span>
            <span className="text-muted-foreground font-normal text-xs">شروط الاستخدام</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
