export function Features() {
    return (
        <section className="py-24 px-4 md:px-8 lg:px-12 bg-muted border-t border-border">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
                    {/* Feature 1 */}
                    <div className="p-10 bg-background hover:bg-muted/50 transition-colors">
                        <span className="block text-4xl font-light text-accent/20 mb-6">01</span>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            معتمد وموثوق
                        </h3>
                        <p className="text-muted-foreground font-normal leading-relaxed text-sm">
                            محام مرخص من وزارة العدل السعودية. نلتزم بأعلى معايير المهنية والمصداقية في جميع تعاملاتنا القانونية.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-10 bg-background hover:bg-muted/50 transition-colors">
                        <span className="block text-4xl font-light text-accent/20 mb-6">02</span>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            خبرة شخصية
                        </h3>
                        <p className="text-muted-foreground font-normal leading-relaxed text-sm">
                            سنوات من الخبرة العملية المباشرة في الترافع أمام المحاكم السعودية، مما يضمن فهماً دقيقاً لمسار قضيتك.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="p-10 bg-background hover:bg-muted/50 transition-colors">
                        <span className="block text-4xl font-light text-accent/20 mb-6">03</span>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            عناية مباشرة
                        </h3>
                        <p className="text-muted-foreground font-normal leading-relaxed text-sm">
                            أتولى بنفسي دراسة ملفك وحماية معلوماتك، مع تطبيق صارم لأعلى معايير السرية المهنية.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
