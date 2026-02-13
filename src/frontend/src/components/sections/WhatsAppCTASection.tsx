import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MARKETING_CONFIG } from '../../config/marketing';
import { useActor } from '../../hooks/useActor';
import { checkRateLimit } from '../../lib/rateLimit';
import { Loader2 } from 'lucide-react';

export default function WhatsAppCTASection() {
  const { actor } = useActor();
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleWhatsAppClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsChecking(true);
    setError(null);

    const result = await checkRateLimit(actor, 'whatsapp');

    if (result.allowed) {
      // Open WhatsApp in new tab
      window.open(MARKETING_CONFIG.whatsapp.link, '_blank', 'noopener,noreferrer');
      setIsChecking(false);
    } else {
      // Show error message
      setError(result.error || 'Unable to proceed. Please try again later.');
      setIsChecking(false);
      // Clear error after 5 seconds
      setTimeout(() => setError(null), 5000);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-cta-gradient">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            Want to Order MagadhPrime?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Simply message us on WhatsApp and our team will assist you directly.
          </p>
          <div className="flex flex-col items-center gap-3">
            <Button
              onClick={handleWhatsAppClick}
              disabled={isChecking}
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp-dark text-white text-xl px-12 py-8 h-auto shadow-xl"
            >
              {isChecking ? (
                <>
                  <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                  Checking...
                </>
              ) : (
                'Order on WhatsApp'
              )}
            </Button>
            {error && (
              <div className="bg-destructive text-white px-4 py-2 rounded-lg text-sm max-w-md">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
