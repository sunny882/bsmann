export default function PrivacyPage() {
  return (
    <main className="bg-white text-[#1f2238]">
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-medium mb-4">
          Privacy Policy
        </h1>

        <p className="text-sm text-slate-500 mb-10">Last Updated: April 2026</p>

        {/* Intro */}
        <p className="text-slate-600 mb-10 leading-relaxed">
          BS Mann Trucking Inc (“Company,” “we,” “our,” “us”) respects your
          privacy. This Privacy Policy explains how we collect and use
          information when you use our website.
        </p>

        <div className="space-y-10">
          {/* Information Collection */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              Information We Collect
            </h2>

            <p className="text-slate-600 mb-4">
              We only collect personal information that you voluntarily provide
              through our contact forms or direct communication.
            </p>

            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Any message or information you choose to provide</li>
            </ul>
          </section>

          {/* SMS */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              SMS and Phone Numbers
            </h2>

            <p className="text-slate-600">
              Phone numbers provided for SMS communication are used only for
              service-related messaging and are not shared with third parties
              for marketing purposes.
            </p>
          </section>

          {/* Usage */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              How We Use Your Information
            </h2>

            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>To respond to inquiries</li>
              <li>To provide service-related communication</li>
              <li>To follow up on requests or appointments</li>
            </ul>
          </section>

          {/* Sharing */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              Sharing of Information
            </h2>

            <p className="text-slate-600">
              We do not sell or rent your personal information. Information may
              only be shared if required by law or to protect our rights.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Data Security</h2>

            <p className="text-slate-600">
              We take reasonable measures to protect your information. However,
              no method of transmission over the internet is completely secure.
            </p>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              Changes to This Policy
            </h2>

            <p className="text-slate-600">
              We may update this Privacy Policy from time to time. Updates will
              be posted on this page with a revised date.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>

            <p className="text-slate-600">
              If you have any questions, contact us at:
              <br />
              Email:{" "}
              <a
                href="mailto:bsmanntrucking@gmail.com"
                className="text-blue-600 underline"
              >
                bsmanntrucking@gmail.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+16618995563" className="text-blue-600 underline">
                +1 (661) 899-5563
              </a>
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
