import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#dce8f3] text-[#1f2238] overflow-hidden">
      {/* TOP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 bg-white min-h-[650px]">
          {/* LEFT CONTENT */}
          <div className="px-6 sm:px-10 lg:px-16 py-10 sm:py-16 flex flex-col justify-center">
            <p className="text-xs tracking-[0.4em] uppercase text-slate-500 mb-5">
              Leadership
            </p>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light leading-[0.95]">
              Harsimranjit
              <br />
              Singh Mann
            </h1>

            <p className="mt-5 text-xl sm:text-3xl font-light">President</p>

            <div className="mt-8 space-y-5 text-base sm:text-lg leading-8 text-slate-700 max-w-xl">
              <p>
                Harsimranjit Singh Mann is the Founder and President of BS Mann
                Trucking Inc, a growing transportation company based in
                California.
              </p>

              <p>
                He began his trucking career in 2017, gaining firsthand
                experience on the road before launching his own company in 2021.
              </p>

              <p>
                Through discipline, reliability, and customer-first service, he
                has built the company through steady growth.
              </p>
            </div>

            <div className="flex gap-4 mt-10">
              <a className="w-12 h-12 rounded-full bg-[#1f2238] text-white flex items-center justify-center">
                f
              </a>
              <a className="w-12 h-12 rounded-full bg-[#1f2238] text-white flex items-center justify-center">
                ig
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[400px] lg:min-h-full">
            <Image
              src="/owner.jpg"
              alt="Founder"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative">
        {/* TOP GRID */}
        <div className="grid lg:grid-cols-2">
          {/* LEFT */}
          <div className="bg-[#5c5d69] text-white px-6 sm:px-10 lg:px-16 py-16 sm:py-24 flex items-center">
            <h2 className="text-5xl sm:text-7xl font-light">About us</h2>
          </div>

          {/* RIGHT */}
          <div className="bg-white px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
            <p className="text-xs tracking-[0.4em] uppercase text-slate-500 mb-6">
              Get to Know Us
            </p>

            <div className="space-y-5 text-base sm:text-lg leading-8 text-slate-700">
              <p>
                BS Mann Trucking started in 2021 with one truck and a clear
                mission: dependable service done right.
              </p>

              <p>
                Since then, the company has expanded with more trucks, more
                routes, and stronger operations.
              </p>

              <p>
                We focus on communication, timing, and trust — ensuring every
                shipment reaches safely and on schedule.
              </p>
            </div>
          </div>
        </div>

        {/* CURVED BOTTOM */}
        <div className="relative bg-[#1f2238] pt-24 sm:pt-32 pb-16">
          {/* curve */}
          <div className="absolute top-0 left-0 w-full -translate-y-full">
            <svg
              viewBox="0 0 1440 160"
              className="w-full h-[90px] sm:h-[130px]"
              preserveAspectRatio="none"
            >
              <path
                d="M0,160 C420,30 1020,30 1440,160 L1440,160 L0,160 Z"
                fill="#1f2238"
              />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* IMAGE */}
              <div className="relative h-[280px] sm:h-[360px] lg:col-span-1">
                <Image
                  src="/trucks.jpg"
                  alt="Fleet"
                  fill
                  className="object-cover"
                />
              </div>

              {/* TEXT CARD */}
              <div className="bg-white p-8 sm:p-12 lg:col-span-1">
                <h3 className="text-4xl sm:text-6xl font-light leading-tight">
                  Delivering trust,
                  <br />
                  mile after mile.
                </h3>
              </div>

              {/* EMPTY SPACE */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}