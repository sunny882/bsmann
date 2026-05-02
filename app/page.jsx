import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "@/components/Slideshow";

export default function HomePage() {
  return (
    <main className="bg-white pt-4 text-[#1f2238]">
      <section className="max-w-7xl mx-auto">
        <div className="text-5xl p-3 font-light">
          Test Dev REFRIGERATED HAULING
        </div>
        <HeroSlideshow />
        <div className="p-2 font-sans text-lg">
          <p className="py-2">
            BS MANN TRUCKING INC specializes in hauling refrigerated products
            and provides dispatcher services with fuel cards. We have been
            providing the best services to San Francisco and surrounding areas
            since 2000. Fair prices, superior quality and exceptional customer
            service are guaranteed when you work with us.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-4xl bg-pink-700 text-white font-medium hover:bg-amber-50 border border-pink-600 hover:text-pink-600 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
      <section className="bg-[#5f616b] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* TOP CONTENT */}
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-6">
              MORE ABOUT OUR SERVICES
            </h2>

            <p className="text-gray-200 leading-relaxed text-base md:text-lg">
              At BS MANN TRUCKING INC, we pride ourselves on providing the
              highest level of professionalism and efficiency. Our team is up
              for every job, managing projects with the skill and experience our
              clients have come to expect. We offer top-notch hauling services
              for refrigerated products, as well as dispatcher services with
              fuel cards. Please get in touch to learn more about our team, our
              company or for details about the services we provide.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-white/30 my-10"></div>

          {/* BOTTOM RIGHT CONTENT */}
          <div className="flex justify-end">
            <div className="max-w-md text-right">
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                At BS MANN TRUCKING INC, we pride ourselves on providing the
                highest level of professionalism and efficiency. Our team is up
                for every job, managing projects with the skill and experience
                our clients have come to expect. We offer top-notch hauling
                services for refrigerated products, as well as dispatcher
                services with fuel cards.
              </p>

              <Link
                href="/about"
                className="inline-block px-6 py-3 rounded-4xl bg-pink-700 text-white font-medium hover:bg-amber-50 border border-pink-600 hover:text-pink-600 transition"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
