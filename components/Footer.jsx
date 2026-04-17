export default function Footer() {
  return (
    <footer className="bg-[#1f2238] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        {/* Top Line */}
        <div className="border-t border-white/60 mb-8"></div>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Left */}
          <div>
            <h3 className="text-2xl md:text-3xl font-light uppercase leading-tight">
              BS Mann Trucking Inc
            </h3>

            <p className="mt-4 text-lg">Mc 1342703</p>
            <p className="mt-1 text-lg">Dot 3766152</p>
          </div>

          {/* Middle */}
          <div className="text-base leading-8 md:justify-self-center">
            <p>+1 (661) 899 5563</p>
            <p>bsmanntrucking@gmail.com</p>
          </div>

          {/* Right */}
          <div className="text-base leading-8 md:text-right md:justify-self-end">
            <p>10106 Breitenbush Ave</p>
            <p>Bakersfield CA 93311</p>

            <div className="mt-6 space-y-1">
              <a
                href="/terms"
                className="block underline underline-offset-4 hover:opacity-80"
              >
                Terms and Conditions
              </a>

              <a
                href="/privacy-policy"
                className="block underline underline-offset-4 hover:opacity-80"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}