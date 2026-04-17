import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-white text-[#1f2238]">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-20">
        <h1 className="text-5xl md:text-8xl font-light leading-tight uppercase max-w-5xl">
          Dependable Refrigerated Hauling
        </h1>

        {/* Hero Image */}
        <div className="relative mt-10 w-full h-[420px] md:h-[560px] overflow-hidden">
          <Image
            src="/hero-trucks.jpg"
            alt="BS Mann Trucking"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Intro Text */}
        <div className="max-w-3xl mt-8">
          <p className="text-lg md:text-xl leading-8 text-slate-600">
            BS Mann Trucking Inc specializes in hauling refrigerated products
            and providing dispatch services with fuel cards. We focus on fair
            pricing, dependable timing, and exceptional customer service.
          </p>

          <Link
            href="/services"
            className="inline-block mt-8 bg-pink-700 hover:bg-pink-800 text-white px-8 py-4 rounded-full text-sm tracking-wide transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="bg-[#666773] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24">
          <h2 className="text-5xl md:text-7xl font-light uppercase max-w-5xl leading-tight">
            More About Our Services
          </h2>

          <div className="grid md:grid-cols-2 gap-20 mt-16">
            {/* Left */}
            <p className="text-2xl leading-relaxed text-white/95">
              At BS Mann Trucking Inc, we pride ourselves on professionalism,
              efficiency, and reliability. Our team is prepared for every load,
              every route, and every client requirement.
            </p>

            {/* Right */}
            <div>
              <div className="border-t border-white/60 pt-10">
                <p className="text-lg leading-8 text-white/90">
                  We offer refrigerated freight hauling, dispatcher services,
                  route coordination, and dependable support. Contact us to
                  learn more about our team and available services.
                </p>

                <Link
                  href="/contact"
                  className="inline-block mt-10 bg-pink-700 hover:bg-pink-800 text-white px-8 py-4 rounded-full text-sm tracking-wide transition"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}