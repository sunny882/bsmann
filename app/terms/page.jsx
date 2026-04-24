export default function TermsPage() {
  return (
    <main className="bg-white text-[#1f2238]">
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-medium mb-4">
          Terms and Conditions
        </h1>

        <p className="text-sm text-slate-500 mb-10">
          Last Updated: Apr 24, 2026
        </p>

        <p className="text-slate-600 mb-10 leading-relaxed">
          Welcome to the website of BS Mann Trucking Inc (“Company,” “we,” “our,” “us”).
          By accessing or using our website or providing consent for communication,
          you agree to these Terms and Conditions.
        </p>

        {/* SECTION */}
        <div className="space-y-8">

          <section>
            <h2 className="font-semibold mb-2">1. Use of Website</h2>
            <p className="text-slate-600">
              This site provides general information about our trucking and freight services.
              You agree to use it only for lawful purposes and not disrupt or misuse any part of it.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2">2. Services</h2>
            <p className="text-slate-600">
              Our transportation and logistics services are subject to individual agreements.
              Website content is for informational purposes only and does not create a binding contract.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2">3. Intellectual Property</h2>
            <p className="text-slate-600">
              All content including text, logos, graphics, and images is the property of
              BS Mann Trucking Inc or used with permission. Unauthorized use is prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2">4. Limitation of Liability</h2>
            <p className="text-slate-600">
              We make reasonable efforts to keep information accurate but do not guarantee completeness.
              We are not liable for any loss or damage resulting from use of this website.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2">5. Third-Party Links</h2>
            <p className="text-slate-600">
              Our website may contain links to external sites. We are not responsible for their content
              or practices.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2">6. Privacy</h2>
            <p className="text-slate-600">
              Please review our Privacy Policy to understand how we collect and use information.
            </p>
          </section>

        </div>

        {/* Divider */}
        <div className="border-t my-12"></div>

        {/* SMS TERMS */}
        <h2 className="text-2xl font-medium mb-6">
          SMS Terms & Conditions
        </h2>

        <div className="space-y-8">

          <section>
            <h3 className="font-semibold mb-2">1. SMS Consent Communication</h3>
            <p className="text-slate-600">
              Phone numbers collected for SMS communication will not be shared with third parties
              for marketing purposes.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">2. Types of SMS Communications</h3>
            <p className="text-slate-600 mb-2">
              If you provide consent, messages may include:
            </p>
            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>Appointment reminders</li>
              <li>Follow-up notifications</li>
              <li>Service updates or confirmations</li>
            </ul>

            <p className="text-slate-500 mt-3 text-sm italic">
              Example: “Hello, this is a reminder of your upcoming appointment with BS Mann Trucking Inc. Reply STOP to opt out at any time.”
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">3. Message Frequency</h3>
            <p className="text-slate-600">
              Message frequency may vary. You may receive up to 60 messages per week depending on services.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">4. Fees</h3>
            <p className="text-slate-600">
              Standard message and data rates may apply based on your carrier and plan.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">5. Opt-In Method</h3>
            <p className="text-slate-600">
              You may opt in by checking the consent box on our forms.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">6. Opt-Out Method</h3>
            <p className="text-slate-600">
              You can opt out anytime by replying “STOP” or contacting us directly.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">7. Help</h3>
            <p className="text-slate-600">
              Reply “HELP” to any message or visit our website:
              <br />
              <a
                href="https://www.bsmanntrucking.com"
                className="text-blue-600 underline"
              >
                https://www.bsmanntrucking.com
              </a>
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">8. Standard Disclosures</h3>
            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>Message and data rates may apply</li>
              <li>Reply STOP to opt out</li>
              <li>Reply HELP for assistance</li>
              <li>Message frequency may vary</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold mb-2">9. Governing Law</h3>
            <p className="text-slate-600">
              These Terms are governed by the laws of California, USA.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">10. Contact Us</h3>
            <p className="text-slate-600">
              BS Mann Trucking Inc <br />
              Email:{" "}
              <a
                href="mailto:bsmanntrucking@gmail.com"
                className="text-blue-600 underline"
              >
                bsmanntrucking@gmail.com
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:+16618995563"
                className="text-blue-600 underline"
              >
                +1 (661) 899-5563
              </a>
              <br />
              Address: 10106 Breitenbush Ave, Bakersfield, CA 93311
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}