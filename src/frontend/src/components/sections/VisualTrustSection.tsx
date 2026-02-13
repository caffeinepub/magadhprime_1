import { getGeneratedAssetUrl } from '../../lib/assetUrl';
import ImageWithFallback from '../common/ImageWithFallback';

const images = [
  {
    filename: 'trust-modern-milling-machinery.dim_1600x1067.webp',
    alt: 'Modern flour mill machinery in operation',
  },
  {
    filename: 'trust-farmers-harvest.dim_1600x1067.webp',
    alt: 'Farmers in golden wheat fields during harvest',
  },
  {
    filename: 'trust-wheat-grains-closeup.dim_1600x1067.webp',
    alt: 'High-quality wheat grains close-up',
  },
  {
    filename: 'trust-hygienic-workers-safety.dim_1600x1067.webp',
    alt: 'Hygienic production process with safety gear',
  },
  {
    filename: 'trust-automated-packing.dim_1600x1067.webp',
    alt: 'Automated flour packing machinery',
  },
  {
    filename: 'trust-wheat-landscape-wide.dim_1600x1067.webp',
    alt: 'Wide agricultural wheat landscape',
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
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow aspect-[3/2]"
            >
              <ImageWithFallback
                src={getGeneratedAssetUrl(image.filename)}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover"
                fallbackClassName="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
