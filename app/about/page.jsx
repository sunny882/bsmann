import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Team from "@/components/Team";

export default function AboutPage() {
  return (
    <main className="bg-[#d3deea] text-gray-800">
      {/* SECTION 1 - ABOUT CARD */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 bg-white shadow-md overflow-hidden">
          {/* LEFT DARK PANEL */}
          <div className="bg-[#2f3446] flex items-center justify-center min-h-[220px] md:min-h-[320px]">
            <h2 className="text-white text-3xl md:text-4xl font-medium tracking-wide">
              About us
            </h2>
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-[#f4f4f4] p-8 md:p-12 flex flex-col justify-center">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">
              Get to Know Us
            </h3>

            <p className="text-gray-600 text-[15px] leading-7 mb-4">
              BS Mann Trucking was started in 2021 by Harsimranjit Singh Mann,
              who had been driving trucks since 2017. After years on the road,
              he decided to take what he learned behind the wheel and build
              something of his own — a company that gets the job done right.
            </p>

            <p className="text-gray-600 text-[15px] leading-7 mb-4">
              We started small, with one truck and a lot of determination. By
              2023, things began to grow — more trucks, more routes, and more
              responsibility. Like any business, we’ve had ups and downs.
            </p>

            <p className="text-gray-600 text-[15px] leading-7">
              At BS Mann Trucking, we don’t overpromise. We make sure every load
              gets where it needs to be — safely, on time, and with care.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 - FOUNDER */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-0 bg-white shadow-md overflow-hidden">
          {/* IMAGE */}
          <div className="relative w-full h-[350px] md:h-[500px]">
            <Image
              src="/person.jpeg"
              alt="Founder"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* TEXT */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Harsimranjit Singh Mann
            </h2>
            <p className="text-blue-600 font-medium mb-4">
              Founder & President
            </p>

            <p className="text-gray-600 text-[15px] leading-7 mb-4">
              Starting his trucking career in 2017, Mann gained hands-on
              experience across the industry before launching BS Mann Trucking
              in 2021.
            </p>

            <p className="text-gray-600 text-[15px] leading-7">
              The company has grown through consistent operations, clear
              communication, and a focus on dependable service.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/officailharsimranMann"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="https://www.instagram.com/imharsimranmann/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - TEAM */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <Team />
      </section>

      {/* SECTION 4 - BRAND */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 bg-white shadow-md overflow-hidden">
          {/* IMAGE */}
          <div className="relative w-full h-[250px] md:h-[350px]">
            <Image
              src="/trucks.jpg"
              alt="Trucks"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="flex items-center justify-center p-10">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 text-center md:text-left leading-snug">
              Delivering trust,
              <br />
              mile after mile.
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}
