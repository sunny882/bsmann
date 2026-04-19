"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSlideshow() {
  const images = [
    "/slide1.jpeg",
    "/slide2.jpeg",
    "/slide3.jpeg",
    "/slide4.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="w-full flex justify-center p-1">
      <div
        className="
          relative w-full overflow-hidden
          aspect-[4/3]
          md:aspect-[19/9]
          max-w-screen-2xl
        "
      >
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}