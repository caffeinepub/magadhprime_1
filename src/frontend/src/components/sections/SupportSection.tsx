import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { submitToGoogleForms } from '../../lib/googleFormsSubmit';
import { useActor } from '../../hooks/useActor';
import { checkRateLimit } from '../../lib/rateLimit';
import { Loader2, CheckCircle2 } from 'lucide-react';

export default function SupportSection() {
  const { actor } = useActor();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all fields.');
      return;
    }

    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      setStatus('error');
      setErrorMessage('Please enter a valid phone number.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Check rate limit before submitting
    const rateLimitResult = await checkRateLimit(actor, 'support');

    if (!rateLimitResult.allowed) {
      setStatus('error');
      setErrorMessage(rateLimitResult.error || 'Please wait a moment before trying again.');
      return;
    }

    // Proceed with form submission
    const result = await submitToGoogleForms(formData);

    if (result.success) {
      setStatus('success');
      setFormData({ name: '', phone: '', message: '' });
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Something went wrong. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  return (
    <section id="support" className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-primary">
            Need Support?
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Have questions or need assistance? Fill out the form below and our team will get back to you shortly.
          </p>

          {status === 'success' ? (
            <div className="bg-success-light border-2 border-success rounded-lg p-8 text-center">
              <CheckCircle2 className="h-16 w-16 text-success mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-success-dark">Thank You!</h3>
              <p className="text-muted-foreground">
                Our team will contact you shortly.
              </p>
              <Button
                onClick={() => setStatus('idle')}
                variant="outline"
                className="mt-6"
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-base">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="mt-2"
                  disabled={status === 'loading'}
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-base">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="mt-2"
                  disabled={status === 'loading'}
                  required
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-base">Message / Requirement *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  className="mt-2 min-h-[120px]"
                  disabled={status === 'loading'}
                  required
                />
              </div>

              {status === 'error' && (
                <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded-lg">
                  {errorMessage}
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Request'
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
