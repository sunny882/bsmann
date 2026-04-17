export default function ContactPage() {
  return (
    <main className="bg-white text-[#1f2238]">
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Left Side */}
          <div>
            <h1 className="text-5xl md:text-7xl font-light uppercase tracking-tight">
              Contact Us
            </h1>

            <div className="mt-16">
              <h2 className="text-2xl font-light">Get in Touch</h2>

              <p className="mt-6 text-lg leading-8 text-slate-600 max-w-md">
                If you have any questions, comments, or requests, please do not
                hesitate to contact us via email or phone.
              </p>
            </div>
          </div>

          {/* Right Side Form */}
          <div>
            <form className="space-y-10">
              {/* Inputs */}
              {[
                "First Name *",
                "Last Name *",
                "Email Address *",
                "Phone Number",
                "Subject *",
              ].map((field) => (
                <div key={field}>
                  <label className="block text-sm mb-3">{field}</label>
                  <input
                    type="text"
                    className="w-full border-b border-[#1f2238] py-3 outline-none bg-transparent"
                  />
                </div>
              ))}

              {/* Message */}
              <div>
                <label className="block text-sm mb-3">Message</label>
                <textarea
                  rows="5"
                  className="w-full border-b border-[#1f2238] py-3 outline-none resize-none bg-transparent"
                />
              </div>

              {/* Consent */}
              <div className="flex items-start gap-3 text-xs text-slate-600 leading-5">
                <input type="checkbox" className="mt-1" />

                <p>
                  By checking this box, you agree to receive conversational SMS
                  messages from BS Mann Trucking Inc related to appointments,
                  reminders, and follow-up messages. Reply STOP to opt out.
                </p>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-pink-700 hover:bg-pink-800 text-white py-4 rounded-full tracking-wide transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}