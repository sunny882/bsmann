export default function ServicesPage() {
  const services = [
    {
      title: "Refrigerated Transport",
      tag: "Expert Service",
    },
    {
      title: "Regional and Long Hauls",
      tag: "We Are Here to Help",
    },
  ];

  return (
    <main className="bg-[#f3f3f3] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-[#1f2238] uppercase">
          Our Services
        </h1>

        {/* Intro */}
        <div className="mt-16 max-w-4xl">
          <p className="text-xl text-[#1f2238]">Meeting Your Needs</p>

          <p className="mt-12 text-2xl leading-relaxed text-[#1f2238]">
            At BS MANN TRUCKING INC, we are committed to surpassing all of your
            transportation needs and requirements. Discover the range of
            services we offer below, and let us know if you need more
            information about any of our offerings.
          </p>
        </div>

        {/* Service Rows */}
        <div className="mt-20 border-t border-[#1f2238]">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-6 items-center py-10 border-b border-[#1f2238]"
            >
              <h2 className="text-4xl md:text-5xl font-light text-[#1f2238]">
                {service.title}
              </h2>

              <p className="text-lg text-[#1f2238] md:text-center">
                {service.tag}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-14">
          <a
            href="/contact"
            className="bg-pink-700 hover:bg-pink-800 text-white px-10 py-4 tracking-wide text-sm uppercase transition"
          >
            Get in touch
          </a>
        </div>
      </section>
    </main>
  );
}