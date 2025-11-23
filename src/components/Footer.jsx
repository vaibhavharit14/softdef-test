import logo from "../assets/image/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#1b2316] text-white w-full">
      <div className="flex flex-row flex-wrap justify-between gap-10 px-[75px] pt-[260px]">
        <div className="flex flex-col max-w-[650px]">
          <div className="flex items-center mb-5">
            <img
              src={logo}
              className="w-[94px] h-[94px] object-contain mr-3"
              alt="FloraVision Logo opacity-75"
            />
            <h3 className="font-inter font-black text-[45px] leading-none tracking-normal opacity-75">
              FloraVision
            </h3>
          </div>

          <p className="font-inter font-medium text-[28px] leading-tight tracking-normal pt-[43px]">
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment".
          </p>

          <div className="mt-[119px] flex items-center gap-6">
            {["FB", "TW", "LI"].map((label) => (
              <a
                key={label}
                href="/"
                className="font-inter font-extrabold text-[28px] hover:underline"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <nav aria-label="Footer Navigation" className="flex flex-col max-w-[300px]">
          <h3 className="font-inter font-extrabold text-[28px] mb-[46px]">
            Quick Links
          </h3>
          <ul className="font-inter font-medium text-[24px] space-y-[26px]">
            {["Home", "Types of Plants", "Contact", "Privacy"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="underline underline-offset-2 focus:outline-none focus:ring-1 focus:ring-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col justify-between max-w-[400px]">
          <div>
            <h3 className="font-inter font-extrabold text-[28px] mb-[50px]">
              For Every Update
            </h3>
            <form
              className="flex flex-row items-center gap-3 border p-1 rounded-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                required
                className="flex-grow px-4 py-2 rounded text-black bg-transparent focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <button
                type="submit"
                className="bg-white text-green-900 font-bold px-4 py-2 rounded hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-white"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

          <p className="font-inter font-medium text-[24px] text-gray-400 mt-[205px]">
            FloraVision © All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}