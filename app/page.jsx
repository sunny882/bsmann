import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "@/components/Slideshow";

export default function HomePage() {
  return (
    <main className="bg-white text-[#1f2238]">
      <section className="max-w-7xl mx-auto">
        <div className="text-5xl p-3 font-light">DEPENDABLE REFRIGERATED HAULING</div>
        <HeroSlideshow />
        <div className="p-2 font-sans text-lg">
          <p className="py-2">BS MANN TRUCKING INC specializes in hauling refrigerated products and provides dispatcher services with fuel cards. We have been providing the best services to San Francisco and surrounding areas since 2000. Fair prices, superior quality and exceptional customer service are guaranteed when you work with us.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-4xl bg-pink-700 text-white font-medium hover:bg-amber-50 border border-pink-600 hover:text-pink-600 transition"
            >
               Contact Us
          </Link>
        </div>
        </section>
    </main>
  );
}