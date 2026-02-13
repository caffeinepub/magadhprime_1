import ImageWithFallback from '../common/ImageWithFallback';

const images = [
  {
    src: 'https://i.postimg.cc/DfNT4zDB/IMG-20260214-041839.png',
    alt: 'Modern flour mill machinery in operation',
    caption: 'Advanced automated milling machinery ensuring consistent quality and hygiene',
  },
  {
    src: 'https://i.postimg.cc/K81SGhQW/1771014909125.jpg',
    alt: 'Premium wheat selection process',
    caption: 'Careful selection of premium organic wheat grains from trusted sources',
  },
  {
    src: 'https://i.postimg.cc/tTt8SqCX/IMG-20260214-021154.jpg',
    alt: 'Wheat cleaning and grading facility',
    caption: 'Thorough cleaning and grading process to remove impurities and ensure purity',
  },
  {
    src: 'https://i.postimg.cc/XYfKyp2n/IMG-20260214-021212.jpg',
    alt: 'Hygienic handling and processing',
    caption: 'Hygienic handling with strict quality controls throughout the production line',
  },
  {
    src: 'https://i.postimg.cc/TPvmdfff/IMG-20260214-021100.jpg',
    alt: 'Quality inspection and testing',
    caption: 'Rigorous quality checks and testing to maintain our premium standards',
  },
  {
    src: 'https://i.postimg.cc/kMHyrr6n/IMG-20260214-043956.jpg',
    alt: 'Automated packaging facility',
    caption: 'State-of-the-art automated packaging ensuring freshness and safety',
  },
];

export default function VisualTrustSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-about-bg to-background">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-primary">
          Our Production Process
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          From field to flour, we maintain the highest standards of quality and hygiene using modern processing technology.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow aspect-[3/2]">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  fallbackClassName="w-full h-full"
                />
              </div>
              <p className="mt-3 text-sm text-center text-muted-foreground px-2">
                {image.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
