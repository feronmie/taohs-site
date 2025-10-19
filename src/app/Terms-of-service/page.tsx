// FILE: src/app/terms-of-service/page.tsx
import type { Metadata } from 'next'
import Navbar from '../_components/Navbar'
import FooterNav from '../_components/FooterNav'

export const metadata: Metadata = {
  title: 'Terms of Service — The Art of High Society',
  description:
    'Read The Art of High Society’s Terms of Service to understand the conditions of using our website, content, and digital platforms.',
}

export default function TermsOfServicePage() {
  return (
    <main className="bg-[#003829] text-white font-sans">
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-24 sm:py-32 leading-relaxed">
        <h1 className="text-4xl sm:text-5xl font-serif text-[#B79E62] mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-white/70 mb-10">Last Updated September 30, 2025</p>

        <p className="text-white/80 mb-8">
          These Terms and Conditions (“Terms”) govern your access to and use of{' '}
          <strong>The Art of High Society</strong> (“TAOHS,” “we,” “our,” or “us”) website,
          publications, and related digital services (collectively, the “Services”). By accessing or
          using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do
          not agree, you must not use the Services.
        </p>

        <div className="space-y-8">
          <Section
            title="1. Governing Language"
            body={
              <p>
                The governing language of these Terms and all communications shall be English.
              </p>
            }
          />

          <Section
            title="2. Eligibility"
            body={
              <p>
                Our Services are intended for individuals aged 16 years and above. By using our
                Services, you represent that you meet this requirement.
              </p>
            }
          />

          <Section
            title="3. Content & Intellectual Property"
            body={
              <>
                <p>
                  All content on TAOHS, including text, graphics, video, design, and branding, is
                  owned by or licensed to us and is protected by intellectual property laws.
                </p>
                <p className="mt-3">
                  You are granted a limited, non-exclusive, revocable license to access and view our
                  content for personal, non-commercial purposes.
                </p>
                <p className="mt-3">
                  You may not reproduce, distribute, or adapt TAOHS content without our prior written
                  consent.
                </p>
              </>
            }
          />

          <Section
            title="4. User-Generated Content"
            body={
              <>
                <p>
                  If you submit content (comments, articles, media, or other contributions):
                </p>
                <ul className="list-disc list-inside mt-3 space-y-1 text-white/80">
                  <li>
                    You grant TAOHS a worldwide, royalty-free, perpetual license to use, publish, and
                    distribute your content in connection with our Services.
                  </li>
                  <li>
                    You represent that you own or have the necessary rights to submit such content.
                  </li>
                  <li>
                    You agree not to post unlawful, defamatory, or infringing material.
                  </li>
                  <li>
                    We reserve the right to review, edit, or remove user content at our discretion.
                  </li>
                </ul>
              </>
            }
          />

          <Section
            title="5. Community Guidelines"
            body={
              <>
                <p>When engaging with TAOHS, you agree to:</p>
                <ul className="list-disc list-inside mt-3 space-y-1 text-white/80">
                  <li>Respect others and avoid abusive, hateful, or discriminatory behavior.</li>
                  <li>
                    Not impersonate another person, misrepresent your affiliation, or use the
                    Services for spam or commercial solicitation.
                  </li>
                  <li>
                    Not upload malicious software or attempt to disrupt our platform.
                  </li>
                </ul>
              </>
            }
          />

          <Section
            title="6. Third-Party Links"
            body={
              <p>
                Our Services may include links to third-party websites or services. TAOHS is not
                responsible for the content, privacy, or practices of third parties.
              </p>
            }
          />

          <Section
            title="7. Disclaimer of Warranties"
            body={
              <p>
                The Services are provided on an “as is” and “as available” basis without warranties
                of any kind. We make no guarantees about the accuracy, reliability, or availability
                of our content or platform.
              </p>
            }
          />

          <Section
            title="8. Limitation of Liability"
            body={
              <p>
                To the fullest extent permitted by law, TAOHS shall not be liable for any indirect,
                incidental, consequential, or punitive damages, including lost profits, goodwill, or
                data, arising from your use of the Services.
              </p>
            }
          />

          <Section
            title="9. Indemnification"
            body={
              <p>
                You agree to indemnify and hold harmless TAOHS, its team members, and affiliates
                from claims, damages, or liabilities arising from your use of the Services or your
                submitted content.
              </p>
            }
          />

          <Section
            title="10. Termination"
            body={
              <p>
                We may suspend or terminate your access to the Services if you violate these Terms,
                applicable law, or our community guidelines.
              </p>
            }
          />

          <Section
            title="11. Modifications"
            body={
              <p>
                We may update these Terms from time to time. Updates will be posted on this page
                with a new “Last Updated” date. Your continued use of the Services after such updates
                constitutes acceptance.
              </p>
            }
          />

          <Section
            title="12. Governing Law"
            body={
              <p>
                These Terms are governed by the laws of England and Wales, and you submit to the
                jurisdiction of the courts located there.
              </p>
            }
          />

          <Section
            title="13. Contact Us"
            body={
              <>
                <p>
                  For questions, feedback, or concerns, please contact:
                </p>
                <p className="mt-4">
                  <strong>The Art of High Society (TAOHS)</strong>
                  <br />
                  📧 Email:{' '}
                  <a
                    href="mailto:contact@theartofhighsociety.com"
                    className="text-[#B79E62] hover:underline"
                  >
                   contact@theartofhighsociety.com
                  </a>
                  <br />
                  📍 Address: [Insert Address]
                  <br />
                  🕘 Hours: 9:00 AM – 6:00 PM (Mon – Fri)
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
