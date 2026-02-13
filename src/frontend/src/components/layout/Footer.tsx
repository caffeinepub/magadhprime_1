import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { SiFacebook, SiInstagram } from 'react-icons/si';
import { Mail, MapPin, Heart, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MARKETING_CONFIG } from '../../config/marketing';
import { useActor } from '../../hooks/useActor';
import { checkRateLimit } from '../../lib/rateLimit';

export default function Footer() {
  const { actor } = useActor();
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname || 'magadhprime')
    : 'magadhprime';

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
    <footer className="bg-footer-dark text-footer-light">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">MAGADH FLOUR MILL</h3>
            <p className="text-footer-muted mb-4 leading-relaxed">
              Premium quality wheat flour processed with advanced milling technology for families who value health and purity.
            </p>
            <div className="flex items-start space-x-2 text-footer-muted mb-2">
              <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <a href={`mailto:${MARKETING_CONFIG.email}`} className="hover:text-primary transition-colors">
                {MARKETING_CONFIG.email}
              </a>
            </div>
            <div className="flex items-start space-x-2 text-footer-muted">
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <p className="text-sm">{MARKETING_CONFIG.address}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-footer-muted hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-footer-muted hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-footer-muted hover:text-primary transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href={MARKETING_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-footer-muted hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="h-6 w-6" />
              </a>
              <a
                href={MARKETING_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-footer-muted hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="h-6 w-6" />
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <Button
                onClick={handleWhatsAppClick}
                disabled={isChecking}
                className="w-full sm:w-auto bg-whatsapp hover:bg-whatsapp-dark text-white"
              >
                {isChecking ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Checking...
                  </>
                ) : (
                  'Contact on WhatsApp'
                )}
              </Button>
              {error && (
                <div className="bg-destructive text-white px-3 py-2 rounded text-xs">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-white">Visit Us</h3>
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.8!2d84.99!3d24.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQxJzI0LjAiTiA4NMKwNTknMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MAGADH FLOUR MILL Location"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-footer-border pt-6 text-center text-sm text-footer-muted">
          <p className="flex items-center justify-center flex-wrap gap-1">
            <span>© {new Date().getFullYear()} MAGADH FLOUR MILL. All rights reserved.</span>
          </p>
          <p className="mt-2 flex items-center justify-center flex-wrap gap-1">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 inline" />
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
