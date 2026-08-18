export default function PrivacyPage() {
  const lastUpdated = "August 2026";

  return (
    <main className="bg-white text-[#1f2238]">
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-medium mb-4">
          Privacy Policy
        </h1>

        <p className="text-sm text-slate-500 mb-10">
          Last Updated: {lastUpdated}
        </p>

        {/* Introduction */}
        <p className="text-slate-600 mb-10 leading-relaxed">
          BS Mann Trucking Inc {`("we", "us", "our")`} is committed to
          protecting the privacy and security of the information provided by our
          clients. This Privacy Policy explains how we collect, use, and
          safeguard personal information submitted through our website and
          electronic communications.
        </p>

        <div className="space-y-10">
          {/* Information We Collect */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              Information We Collect
            </h2>

            <p className="text-slate-600 mb-4">
              We may collect the following types of information when you submit
              data electronically:
            </p>

            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Mailing Address</li>
              <li>
                Email messages, text messages, attachments, or any other
                correspondence sent to us
              </li>
            </ul>
          </section>

          {/* How We Use */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              How We Use Your Information
            </h2>

            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>To respond to inquiries and provide requested services</li>
              <li>To communicate regarding appointments or service updates</li>
              <li>To maintain internal records</li>
              <li>To comply with legal and regulatory requirements</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              Data Security & Protection
            </h2>

            <p className="text-slate-600 mb-4">
              We prioritize the security of your personal information through
              the following measures:
            </p>

            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>
                Encryption: Electronic transmissions are secured using
                industry-standard encryption methods
              </li>
              <li>
                Secure Storage: Data is stored in encrypted systems with
                restricted access
              </li>
              <li>
                Access Controls: Only authorized personnel can access sensitive
                information
              </li>
              <li>
                Regular Monitoring: Systems are monitored for vulnerabilities
                and unauthorized access
              </li>
            </ul>
          </section>

          {/* Sharing */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              Sharing Your Information
            </h2>

            <p className="text-slate-600 mb-4">
              We do not sell, rent, or trade your personal information. We may
              share your information only in the following circumstances:
            </p>

            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>With your explicit consent</li>
              <li>
                With trusted service providers that assist in delivering our
                services
              </li>
              <li>When required by law, regulation, or government request</li>
            </ul>

            <p className="text-slate-600 mt-4">
              <strong>SMS Privacy:</strong> Phone numbers collected for SMS
              communication are not shared with third parties or affiliates for
              marketing purposes.
            </p>
          </section>

          {/* Rights */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Your Rights</h2>

            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>Access, review, and update your personal information</li>
              <li>
                Request deletion of your data (subject to legal retention
                requirements)
              </li>
            </ul>
          </section>

          {/* Retention */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              Retention of Information
            </h2>

            <p className="text-slate-600">
              We retain personal information only as long as necessary to
              provide services, comply with legal obligations, and maintain
              accurate business records.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>

            <p className="text-slate-600">
              If you have any questions or wish to exercise your privacy rights,
              please contact us:
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

          {/* Updates */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Policy Updates</h2>

            <p className="text-slate-600">
              We may update this Privacy Policy to reflect changes in legal or
              operational requirements. Significant updates will be communicated
              appropriately.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
