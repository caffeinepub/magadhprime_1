import { Wheat, Leaf, ShieldCheck, Award } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const benefits = [
  {
    icon: Wheat,
    title: 'Organic Wheat Selection',
    description: 'Carefully selected organic wheat grains for superior quality and nutrition.',
  },
  {
    icon: Leaf,
    title: 'Added Bran (Chokar) – Rich in Fiber',
    description: 'Enhanced with natural bran to provide essential dietary fiber for better health.',
  },
  {
    icon: ShieldCheck,
    title: 'No Chemicals or Preservatives Added',
    description: 'Pure and natural flour without any artificial additives or preservatives.',
  },
  {
    icon: Award,
    title: 'Premium Quality & Hygiene',
    description: 'Processed in hygienic conditions with modern machinery for consistent excellence.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-primary">
          Why Choose MagadhPrime?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
