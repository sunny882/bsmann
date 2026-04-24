"use client";

import { FiPhone, FiMail } from "react-icons/fi";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSuccess(true);
      form.reset();
    }

    setLoading(false);
  }

  return (
    <main className="bg-white text-[#1f2238]">
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-2 gap-20">
          
          {/* Left Side */}
          <div>
            <div className="mb-14 space-y-6">

              <a href="tel:+16618995563" className="flex items-center gap-4 group">
                <div className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-300 group-hover:border-[#1f2238] transition">
                  <FiPhone size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase">Call</p>
                  <p className="text-base md:text-lg">+1 (661) 899 5563</p>
                </div>
              </a>

              <a href="mailto:bsmanntrucking@gmail.com" className="flex items-center gap-4 group">
                <div className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-300 group-hover:border-[#1f2238] transition">
                  <FiMail size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase">Email</p>
                  <p className="text-base md:text-lg">bsmanntrucking@gmail.com</p>
                </div>
              </a>

            </div>

            <h1 className="text-5xl md:text-7xl font-light uppercase tracking-tight">
              Contact Us
            </h1>

            <div className="mt-16">
              <h2 className="text-2xl font-light">Get in Touch</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600 max-w-md">
                If you have any questions, comments, or requests, please do not hesitate to contact us.
              </p>
            </div>
          </div>

          {/* Right Side Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-10">
              
              <input name="firstName" placeholder="First Name *" required className="w-full border-b py-3 outline-none bg-transparent" />
              <input name="lastName" placeholder="Last Name *" required className="w-full border-b py-3 outline-none bg-transparent" />
              <input name="email" type="email" placeholder="Email Address *" required className="w-full border-b py-3 outline-none bg-transparent" />
              <input name="phone" placeholder="Phone Number" className="w-full border-b py-3 outline-none bg-transparent" />
              <input name="subject" placeholder="Subject *" required className="w-full border-b py-3 outline-none bg-transparent" />

              <textarea name="message" placeholder="Message" rows={5} className="w-full border-b py-3 outline-none bg-transparent" />

              <div className="flex items-start gap-3 text-xs text-slate-600">
                <input type="checkbox" required className="mt-1" />
                <p>
                  By checking this box, you agree to receive conversational SMS messages from BS MANN TRUCKING INC related to appointment reminders and Follow-up messages. You may reply STOP to opt-out at any time. Reply HELP to +1 (661) 8995563 for assistance. Messages and data rates may apply. Message frequency will vary. Learn more on our privacy policy page and <a href="/terms" className="underline font-bold">terms & conditions</a>
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-pink-700 hover:bg-pink-800 text-white py-4 rounded-full transition"
              >
                {loading ? "Sending..." : "Send"}
              </button>

              {success && (
                <p className="text-green-600 text-sm">
                  Message sent successfully.
                </p>
              )}

            </form>
          </div>

        </div>
      </section>
    </main>
  );
}