export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-background to-about-bg">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            About MagadhPrime
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              MagadhPrime is produced by <strong className="text-foreground">MAGADH FLOUR MILL</strong> using advanced machinery, ensuring hygienic processing, consistent texture, and high-quality wheat flour for families who value health and purity.
            </p>
            <p>
              We combine responsible sourcing with modern production standards while maintaining natural nutrition — without chemicals or preservatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
