import Link from "next/link";
import HeroSlideshow from "@/components/Slideshow";
import LatestNews from "@/components/LatestNews";
import { Truck, User, Container } from "lucide-react";

export default function HomePage() {
  return (
    <main className="bg-white pt-4 text-[#1f2238]">
      <section className="max-w-7xl mx-auto">
        <div className="text-5xl p-3 font-light">
          DEPENDABLE REFRIGERATED HAULING
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
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">
              OUR FLEET
            </h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Reliable equipment and experienced drivers powering every
              delivery.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Trucks */}
            <div className="border border-gray-200 rounded-xl p-8 text-center hover:shadow-md transition">
              <div className="flex justify-center mb-4">
                <Truck className="w-10 h-10 text-pink-700 stroke-[1.5]" />
              </div>
              <div className="text-4xl md:text-5xl font-light text-pink-700">
                35+
              </div>
              <p className="mt-3 text-gray-600 tracking-wide">Trucks</p>
            </div>

            {/* Drivers */}
            <div className="border border-gray-200 rounded-xl p-8 text-center hover:shadow-md transition">
              <div className="flex justify-center mb-4">
                <User className="w-10 h-10 text-pink-700 stroke-[1.5]" />
              </div>
              <div className="text-4xl md:text-5xl font-light text-pink-700">
                40+
              </div>
              <p className="mt-3 text-gray-600 tracking-wide">Drivers</p>
            </div>

            {/* Trailers */}
            <div className="border border-gray-200 rounded-xl p-8 text-center hover:shadow-md transition">
              <div className="flex justify-center mb-4">
                <Container className="w-10 h-10 text-pink-700 stroke-[1.5]" />
              </div>
              <div className="text-4xl md:text-5xl font-light text-pink-700">
                40+
              </div>
              <p className="mt-3 text-gray-600 tracking-wide">Trailers</p>
            </div>
          </div>
        </div>
      </section>
      <LatestNews />
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
