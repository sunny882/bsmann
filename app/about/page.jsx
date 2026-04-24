import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="bg-[#d3deea]">
      {/* SECTION 1 - PROFILE */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          
          {/* LEFT TEXT */}
          <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Harsimranjit Singh Mann
            </h2>
            <p className="text-gray-500 mb-4">President</p>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Harsimranjit Singh Mann is the dynamic President and Founder of
              BS Mann Trucking Inc, a growing transportation company based in
              California. Starting his trucking career in 2017, he spent years
              on the road gaining firsthand experience in every part of the
              industry before launching his own company in 2021.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              With strong business sense and a drive for excellence, Mann has
              led BS Mann Trucking through steady growth — expanding the fleet,
              improving operations, and earning a reputation for reliability,
              communication, and on-time delivery.
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/officailharsimranMann"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="https://www.instagram.com/imharsimranmann/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src="/person.jpeg" // replace with actual image
              alt="Founder"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 - ABOUT */}
      <section className="max-w-7xl mx-auto px-4 pb-10">
        <div className="grid lg:grid-cols-2">
          
          {/* LEFT DARK BOX */}
          <div className="bg-[#2c2f3f] flex items-center justify-center min-h-[250px] md:min-h-[350px]">
            <h2 className="text-white text-3xl md:text-4xl font-medium">
              About us
            </h2>
          </div>

          {/* RIGHT TEXT */}
          <div className="bg-white p-8 md:p-12">
            <h3 className="font-semibold mb-4 text-lg">Get to Know Us</h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              BS Mann Trucking was started in 2021 by Harsimranjit Singh Mann,
              who had been driving trucks since 2017. After years on the road,
              he decided to take what he learned behind the wheel and build
              something of his own — a company that gets the job done right.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              We started small, with one truck and a lot of determination. By
              2023, things began to grow — more trucks, more routes, and more
              responsibility. Like any business, we’ve had our ups and downs.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              At BS Mann Trucking, we don’t overpromise. We just make sure every
              load gets where it needs to be — safely, on time, and with care.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - IMAGE + TAGLINE */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 items-center">
          
          {/* TRUCK IMAGE */}
          <div className="relative w-full h-[250px] md:h-[350px]">
            <Image
              src="/trucks.jpg" // replace with actual image
              alt="Trucks"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="bg-white flex items-center justify-center h-full p-8">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 text-center md:text-left">
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