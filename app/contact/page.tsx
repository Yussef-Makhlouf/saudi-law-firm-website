'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Phone, MessageSquare, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero: "Official Request" */}
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

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            قنوات الاتصال المباشرة
          </h1>
          <p className="text-xl text-muted-foreground font-normal max-w-2xl mx-auto leading-relaxed">
            يمكن للعملاء والمراجعين التواصل معي مباشرة عبر القنوات الرسمية التالية لطلب الاستشارات أو متابعة القضايا.
          </p>
        </div>
      </section>

      {/* Contact Grid - "The Directory" */}
      <section className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-border">

            {/* Phone */}
            <div className="p-10 flex flex-col items-center text-center hover:bg-muted/30 transition-colors group">
              <div className="w-12 h-12 border border-border flex items-center justify-center mb-6 group-hover:border-accent transition-colors">
                <Phone className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">الهاتف الموحد</h3>
              <p className="text-muted-foreground font-normal text-sm mb-4">للاستفسارات العاجلة</p>
              <a href="tel:+966500152437" dir="ltr" className="text-lg font-bold text-foreground hover:text-accent transition-colors">
                0500152437
              </a>
            </div>

            {/* WhatsApp */}
            <div className="p-10 flex flex-col items-center text-center hover:bg-muted/30 transition-colors group">
              <div className="w-12 h-12 border border-border flex items-center justify-center mb-6 group-hover:border-accent transition-colors">
                <MessageSquare className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">المراسلة الفورية</h3>
              <p className="text-muted-foreground font-normal text-sm mb-4">طلبات الاستشارة المبدئية</p>
              <a href="https://wa.me/966500152437" className="text-lg font-bold text-foreground hover:text-accent transition-colors">
                بدء المحادثة
              </a>
            </div>

            {/* Address */}
            <div className="p-10 flex flex-col items-center text-center hover:bg-muted/30 transition-colors group">
              <div className="w-12 h-12 border border-border flex items-center justify-center mb-6 group-hover:border-accent transition-colors">
                <MapPin className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">المقر الرئيسي</h3>
              <p className="text-lg font-bold text-foreground mb-1">الرياض</p>
              <p className="text-muted-foreground font-normal text-sm">المملكة العربية السعودية</p>
            </div>

            {/* Hours */}
            <div className="p-10 flex flex-col items-center text-center hover:bg-muted/30 transition-colors group">
              <div className="w-12 h-12 border border-border flex items-center justify-center mb-6 group-hover:border-accent transition-colors">
                <Clock className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">ساعات العمل</h3>
              <div className="text-sm font-normal text-muted-foreground space-y-1">
                <p>الأحد - الخميس</p>
                <p className="text-foreground font-bold">9:00 ص - 6:00 م</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Information Block */}
      <section className="py-24 px-4 md:px-8 lg:px-12 bg-muted/20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-2xl font-bold text-foreground">
            ملاحظات وإخلاء مسؤولية
          </h2>
          <div className="p-8 border border-border bg-background text-right prose prose-sm max-w-none text-muted-foreground">
            <p>
              <strong>أولاً:</strong> التواصل عبر القنوات الإلكترونية لا يشكل علاقة محاماة رسمية ما لم يتم توقيع عقد اتعاب وتوكيل شرعي.
            </p>
            <p>
              <strong>ثانياً:</strong> جميع البيانات المرسلة عبر الموقع أو الواتساب تخضع لسياسة خصوصية صارمة ولا يتم مشاركتها مع أي طرف ثالث إلا بموجب أمر قضائي.
            </p>
            <p>
              <strong>ثالثاً:</strong> الرد على الاستفسارات العامة لا يعتبر استشارة قانونية مكتملة الأركان، حيث تتطلب الفتوى القانونية دراسة كافة الوثائق والممستندات.
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            جميع الحقوق محفوظة © {new Date().getFullYear()}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
