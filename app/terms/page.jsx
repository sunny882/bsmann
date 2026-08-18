export default function TermsPage() {
  const lastUpdated = "August 2026";

  return (
    <main className="bg-white text-[#1f2238]">
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-medium mb-4">
          Terms and Conditions
        </h1>

        <p className="text-sm text-slate-500 mb-10">
          Last Updated: {lastUpdated}
        </p>

        <p className="text-slate-600 mb-10 leading-relaxed">
          Welcome to the website of BS Mann Trucking Inc ({`"we"`}, {`"us"`},{" "}
          {`"our"`}). By accessing or using our website or providing consent for
          communication, you agree to these Terms and Conditions.
        </p>

        {/* MAIN TERMS */}
        <div className="space-y-8">
          <section>
            <h2 className="font-semibold mb-2">1. Use of Website</h2>
            <p className="text-slate-600">
              This site provides general information about our trucking and
              freight services. You agree to use it only for lawful purposes and
              not misuse, disrupt, or interfere with the functionality of the
              website.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2">2. Services</h2>
            <p className="text-slate-600">
              Our transportation and logistics services are subject to separate
              agreements. Content on this website is for informational purposes
              only and does not constitute a binding contract.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2">3. Intellectual Property</h2>
            <p className="text-slate-600">
              All content including text, logos, graphics, and images is the
              property of BS Mann Trucking Inc or used with permission.
              Unauthorized use, reproduction, or distribution is prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2">4. Limitation of Liability</h2>
            <p className="text-slate-600">
              We make reasonable efforts to ensure the accuracy of information
              but do not guarantee completeness or reliability. We are not
              liable for any loss or damage resulting from use of this website.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2">5. Third-Party Links</h2>
            <p className="text-slate-600">
              Our website may contain links to third-party websites. We are not
              responsible for the content, policies, or practices of those
              external sites.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2">6. Privacy</h2>
            <p className="text-slate-600">
              Please review our Privacy Policy to understand how we collect,
              use, and protect your information.
            </p>
          </section>
        </div>

        {/* Divider */}
        <div className="border-t my-12"></div>

        {/* SMS TERMS */}
        <h2 className="text-2xl font-medium mb-6">SMS Terms & Conditions</h2>

        <div className="space-y-8">
          <section>
            <h3 className="font-semibold mb-2">1. SMS Consent & Privacy</h3>
            <p className="text-slate-600">
              Phone numbers obtained through our SMS consent process will not be
              shared with third parties or affiliates for marketing or
              promotional purposes. All other categories exclude text messaging
              originator opt-in data and consent; this information will not be
              shared with any third parties.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">
              2. Types of SMS Communications
            </h3>
            <p className="text-slate-600 mb-2">
              By consenting to receive text messages from BS Mann Trucking Inc,
              you may receive messages regarding:
            </p>
            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>Appointment reminders</li>
              <li>Service updates or confirmations</li>
              <li>Follow-up communications</li>
              <li>
                General conversational messages{" "}
                {`(e.g., "Hello, we received your
                message. Please let us know a good time to call you.")`}
              </li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold mb-2">3. Message Frequency</h3>
            <p className="text-slate-600">
              Message frequency varies based on your needs and service
              requirements. We only send messages necessary to provide our
              services.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">4. Opt-In Method</h3>
            <p className="text-slate-600">
              You may opt in by checking the consent box on our website forms at{" "}
              <a
                href="https://www.bsmanntrucking.com"
                className="text-blue-600 underline"
              >
                https://www.bsmanntrucking.com
              </a>
              . By opting in, you confirm that you have read and agreed to these
              terms.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">5. Opting Out</h3>
            <p className="text-slate-600">
              You may opt out of SMS communications at any time.
              <br />
              To opt out: Reply {`"STOP"`} to any message.
              <br />
              Alternatively, contact us directly to be removed from our list.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">6. Help and Support</h3>
            <p className="text-slate-600">
              If you need assistance:
              <br />
              Reply {`"HELP"`} to any message.
              <br />
              Visit{" "}
              <a
                href="https://www.bsmanntrucking.com"
                className="text-blue-600 underline"
              >
                https://www.bsmanntrucking.com
              </a>
              <br />
              Call us at{" "}
              <a href="tel:+16618995563" className="text-blue-600 underline">
                +1 (661) 899-5563
              </a>
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">7. Potential Fees</h3>
            <p className="text-slate-600">
              BS Mann Trucking Inc does not charge fees for SMS messages.
              However, standard message and data rates may apply depending on
              your mobile carrier’s plan.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">8. Data Security</h3>
            <p className="text-slate-600">
              We implement reasonable safeguards to protect your data. However,
              no transmission over mobile networks can be guaranteed to be fully
              secure.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">9. Limitation of Liability</h3>
            <p className="text-slate-600">
              BS Mann Trucking Inc is not responsible for delayed or undelivered
              messages due to carrier or network issues. By opting in, you agree
              to hold us harmless from claims related to SMS communications.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <p className="text-slate-600">
              BS Mann Trucking Inc
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
              <br />
              Address: 10106 Breitenbush Ave, Bakersfield, CA 93311
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
