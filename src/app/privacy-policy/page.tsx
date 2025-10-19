// FILE: src/app/privacy-policy/page.tsx
import type { Metadata } from 'next'
import Navbar from '../_components/Navbar'
import FooterNav from '../_components/FooterNav'

export const metadata: Metadata = {
  title: 'Privacy Policy — The Art of High Society',
  description:
    'Read The Art of High Society’s Privacy Policy to learn how we collect, use, and protect your personal data under UK and EU GDPR.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#003829] text-white font-sans">
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-24 sm:py-32 leading-relaxed">
        <h1 className="text-4xl sm:text-5xl font-serif text-[#B79E62] mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-white/70 mb-10">Last Updated September 30, 2025</p>

        <p className="text-white/80 mb-8">
          This Privacy Policy explains how <strong>The Art of High Society</strong> (“TAOHS,” “we,”
          “our,” or “us”) collects, uses, and protects your personal data when you visit our website,
          engage with our publications, or interact with us. We are committed to protecting your
          privacy and complying with the UK General Data Protection Regulation (UK GDPR) and, where
          applicable, the EU GDPR.
        </p>

        <div className="space-y-8">
          <Section
            title="1. Personal Data We Collect"
            body={
              <>
                <p>
                  We may collect the following types of personal data:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-1 text-white/80">
                  <li>Contact details (such as name, email address) if you subscribe to newsletters or contact us directly.</li>
                  <li>Content you provide (such as comments, article submissions, or other contributions).</li>
                  <li>Technical information (such as IP address, browser type, device information, and cookies).</li>
                  <li>Communications (emails or messages you send to us).</li>
                </ul>
                <p className="mt-3">We do not require you to create an account to access our website.</p>
              </>
            }
          />

          <Section
            title="2. How We Collect Your Data"
            body={
              <ul className="list-disc list-inside space-y-1 text-white/80">
                <li>When you subscribe to newsletters or updates.</li>
                <li>When you submit content or contact us directly.</li>
                <li>When you visit our website (through cookies and analytics).</li>
                <li>When you interact with us via third-party platforms (e.g., Instagram, YouTube, or TikTok).</li>
              </ul>
            }
          />

          <Section
            title="3. Lawful Bases for Processing"
            body={
              <ul className="list-disc list-inside space-y-1 text-white/80">
                <li><strong>Consent</strong> – e.g., when you subscribe to our newsletter or accept cookies.</li>
                <li><strong>Legitimate interests</strong> – e.g., to improve our website, ensure security, and manage editorial contributions.</li>
                <li><strong>Legal obligations</strong> – e.g., to comply with regulatory requirements.</li>
              </ul>
            }
          />

          <Section
            title="4. How We Use Your Data"
            body={
              <ul className="list-disc list-inside space-y-1 text-white/80">
                <li>Provide and improve our website and editorial content.</li>
                <li>Send newsletters and updates (where you have opted in).</li>
                <li>Respond to your questions, submissions, or feedback.</li>
                <li>Analyze website traffic and user engagement through cookies and analytics.</li>
                <li>Protect the integrity and security of our platform.</li>
              </ul>
            }
          />

          <Section
            title="5. Cookies and Tracking"
            body={
              <p>
                We use cookies and similar technologies to improve your browsing experience and
                analyze traffic. You can control or disable cookies via your browser settings. Please
                see our Cookies Notice for more information.
              </p>
            }
          />

          <Section
            title="6. Data Sharing"
            body={
              <>
                <p>We may share your personal data with:</p>
                <ul className="list-disc list-inside mt-3 space-y-1 text-white/80">
                  <li>Service providers (such as email newsletter platforms, analytics providers, hosting providers).</li>
                  <li>Regulators or authorities if required by law.</li>
                </ul>
                <p className="mt-3">We do not sell or rent your personal data.</p>
              </>
            }
          />

          <Section
            title="7. International Transfers"
            body={
              <p>
                If we transfer personal data outside the UK/EU, we ensure appropriate safeguards are
                in place, such as Standard Contractual Clauses (SCCs) or adequacy decisions.
              </p>
            }
          />

          <Section
            title="8. Data Retention"
            body={
              <>
                <p>We only keep personal data as long as necessary for the purposes outlined in this policy. For example:</p>
                <ul className="list-disc list-inside mt-3 space-y-1 text-white/80">
                  <li>Newsletter subscriptions: until you unsubscribe.</li>
                  <li>Analytics data: typically up to 26 months.</li>
                  <li>Communications: retained as needed to handle your inquiry.</li>
                </ul>
              </>
            }
          />

          <Section
            title="9. Your Rights"
            body={
              <>
                <p>You have rights under GDPR, including:</p>
                <ul className="list-disc list-inside mt-3 space-y-1 text-white/80">
                  <li>Access to your personal data.</li>
                  <li>Rectification of inaccurate data.</li>
                  <li>Erasure (“right to be forgotten”).</li>
                  <li>Restriction of processing.</li>
                  <li>Data portability in a machine-readable format.</li>
                  <li>Objection to certain processing (including direct marketing).</li>
                  <li>Withdrawal of consent at any time (where processing is based on consent).</li>
                </ul>
                <p className="mt-3">
                  To exercise your rights, email us at <strong>privacy@taohs.co</strong>.
                </p>
                <p className="mt-3">
                  You also have the right to lodge a complaint with the Information Commissioner’s Office (ICO) in the UK or with your local supervisory authority.
                </p>
              </>
            }
          />

          <Section
            title="10. Security"
            body={
              <p>
                We use appropriate technical and organizational measures to protect your personal
                data. However, no system is completely secure, and we cannot guarantee absolute
                protection.
              </p>
            }
          />

          <Section
            title="11. Children’s Privacy"
            body={
              <p>
                Our Services are not intended for children under 16. We do not knowingly collect
                personal data from minors.
              </p>
            }
          />

          <Section
            title="12. Changes to this Policy"
            body={
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on
                this page with an updated “Last Updated” date.
              </p>
            }
          />

          <Section
            title="13. Contact Us"
            body={
              <>
                <p>If you have any questions or concerns about this Privacy Policy or how we handle your personal data, contact us at:</p>
                <p className="mt-4">
                  <strong>The Art of High Society (TAOHS)</strong><br />
                  📧 Email: <a href="mailto:privacy@theartofhighsociety.com" className="text-[#B79E62] hover:underline">privacy@theartofhighsociety.com</a><br />
                  📍 Address: [Insert Address]
                </p>
              </>
            }
          />
        </div>
      </section>

      <FooterNav />
    </main>
  )
}

function Section({ title, body }: { title: string; body: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-serif text-[#B79E62] mb-3">{title}</h2>
      <div className="text-white/85 text-base sm:text-lg">{body}</div>
    </div>
  )
}
