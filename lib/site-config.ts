export const siteConfig = {
    name: 'المحامي فلان الفلاني', // Placeholder, user can update name
    description: 'محام قانوني معتمد متخصص في الخدمات القانونية المتقدمة للأفراد والشركات. معتمد من وزارة العدل بخبرة عملية واسعة.',
    url: 'https://legal-counsel.com',
    contact: {
        phone: '+966500152437',
        whatsapp: '966500152437', // format for wa.me
        email: 'info@legal-counsel.com', // Placeholder, update if real one exists
        location: 'الرياض، المملكة العربية السعودية',
    },
    links: {
        whatsapp: (text = 'السلام عليكم ورحمة الله وبركاته') =>
            `https://wa.me/966500152437?text=${encodeURIComponent(text)}`,
        phone: 'tel:+966500152437',
    },
    nav: [
        { label: 'الرئيسية', href: '/' },
        { label: 'نبذة عني', href: '/about' },
        { label: 'التخصصات', href: '/practice-areas' },
        { label: 'تواصل معي', href: '/contact' },
    ]
}
