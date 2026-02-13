import { usePageMeta } from '../hooks/usePageMeta';

export default function TermsOfUsePage() {
  usePageMeta({
    title: 'Terms of Use - MagadhPrime',
    description: 'Terms of use for MagadhPrime. Read our terms and conditions.',
  });

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary">Terms of Use</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the MagadhPrime website (operated by MAGADH FLOUR MILL), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Use of Website</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website is provided for informational purposes about our wheat flour products and to facilitate communication between you and MAGADH FLOUR MILL. You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Product Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We strive to provide accurate information about our products. However, we do not warrant that product descriptions, images, or other content on this website are accurate, complete, reliable, current, or error-free. Product specifications and availability are subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Orders and Communication</h2>
            <p className="text-muted-foreground leading-relaxed">
              When you contact us through our website, WhatsApp, or email to inquire about or order products, you agree to provide accurate and complete information. All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this website, including text, images, logos, and design elements, is the property of MAGADH FLOUR MILL and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or use any content without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your use of this website is also governed by our Privacy Policy. We collect and use your personal information only for communication and customer support purposes. Please review our Privacy Policy to understand how we handle your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              MAGADH FLOUR MILL shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of this website or our products. Our total liability shall not exceed the amount paid by you for the products, if any.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites (such as social media platforms). We are not responsible for the content, privacy practices, or terms of use of these external sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to this website. Your continued use of the website after changes are posted constitutes your acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Use, please contact us at:
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Email: <a href="mailto:magadhprimeatta@gmail.com" className="text-primary hover:underline">magadhprimeatta@gmail.com</a>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Address: At plot 302, behind hotel imperial, Baiju bigha, musatpura, Bodhgaya, Bihar
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
