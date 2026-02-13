import { usePageMeta } from '../hooks/usePageMeta';

export default function PrivacyPolicyPage() {
  usePageMeta({
    title: 'Privacy Policy - MagadhPrime',
    description: 'Privacy policy for MagadhPrime. Learn how we handle your personal information.',
  });

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              At MagadhPrime (operated by MAGADH FLOUR MILL), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our website or contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect only the information you voluntarily provide to us through our contact forms or when you reach out via WhatsApp or email. This may include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Your name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Messages or inquiries you send to us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use your personal information solely for the purpose of communication and customer support. Specifically, we use your data to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Respond to your inquiries and questions</li>
              <li>Process your orders and requests</li>
              <li>Provide customer support and assistance</li>
              <li>Communicate important updates about our products or services</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent for us to contact you</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or how we handle your data, please contact us at:
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Email: <a href="mailto:magadhprimeatta@gmail.com" className="text-primary hover:underline">magadhprimeatta@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <p className="text-sm text-muted-foreground mt-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </main>
  );
}
