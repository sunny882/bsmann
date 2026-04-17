import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#d8e4f0] text-[#1f2238]">
      {/* Founder Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid md:grid-cols-2 bg-white overflow-hidden">
          {/* Left */}
          <div className="p-10 md:p-16">
            <h1 className="text-5xl font-light">Harsimranjit Singh Mann</h1>
            <p className="mt-3 text-2xl">President</p>

            <div className="mt-10 space-y-6 text-lg leading-8 text-slate-700">
              <p>
                Harsimranjit Singh Mann is the dynamic President and Founder of
                BS Mann Trucking Inc, a growing transportation company based in
                California.
              </p>

              <p>
                Starting his trucking career in 2017, he spent years on the
                road gaining firsthand experience in every part of the
                industry before launching his own company in 2021.
              </p>

              <p>
                With strong business sense and a drive for excellence, he has
                built BS Mann Trucking through steady growth, reliability, and
                customer-focused service.
              </p>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-10">
              <a className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                f
              </a>
              <a className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                ig
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative min-h-[500px]">
            <Image
              src="/owner.jpg"
              alt="Founder"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Middle About Section */}
      <section className="grid md:grid-cols-2">
        {/* Dark Block */}
        <div className="bg-[#1f2238] text-white flex items-center justify-center min-h-[420px]">
          <h2 className="text-6xl font-light">About us</h2>
        </div>

        {/* Text */}
        <div className="bg-white px-10 md:px-16 py-16">
          <p className="text-xl mb-8">Get to Know Us</p>

          <div className="space-y-6 text-lg leading-8 text-slate-700">
            <p>
              BS Mann Trucking was started in 2021 with one truck and a clear
              goal: dependable service done right.
            </p>

            <p>
              Since then, the company has grown with more trucks, routes, and
              responsibilities through discipline and consistency.
            </p>

            <p>
              We focus on communication, timing, and trust — making sure every
              shipment gets where it needs to be safely and on time.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Visual Section */}
      <section className="grid md:grid-cols-4">
        <div className="bg-[#d8e4f0] min-h-[320px]" />

        <div className="relative min-h-[320px]">
          <Image
            src="/trucks.jpg"
            alt="Fleet"
            fill
            className="object-cover"
          />
        </div>

        <div className="bg-white flex items-center px-10">
          <h3 className="text-5xl font-light leading-tight">
            Delivering trust,
            <br />
            mile after mile.
          </h3>
        </div>

        <div className="bg-[#d8e4f0] min-h-[320px]" />
      </section>
    </main>
  );
}