import React from "react";
import plantImage from "../assets/image/t1.png";

const OxygenPlantPromo = () => {
  return (
    <section className="relative bg-[#1b2316] text-white py-16">
      <div className="relative max-w-[1728px] mx-auto">
        <div className="mt-[76px] mx-auto flex items-center justify-center mb-[84px]">
          <h2 className="text-[55px] leading-[100%] font-semibold text-center font-['Inter'] relative inline-block">
            <span
              className="absolute bottom-0 left-[-55px] w-[55px] h-[55px] pointer-events-none rounded-bl-[15px]"
              style={{
                background:
                  "linear-gradient(316.11deg, #FBD300 0.4%, #FFFFFF 110.43%) 0 0 / 5px 100% no-repeat, linear-gradient(316.11deg, #FBD300 0.4%, #FFFFFF 110.43%) 0 0 / 100% 5px no-repeat",
                backgroundPosition: "top left, bottom left",
              }}
            />
            <span
              className="absolute top-0 right-[-55px] w-[55px] h-[55px] pointer-events-none rounded-tr-[15px]"
              style={{
                background:
                  "linear-gradient(316.11deg, #FBD300 0.4%, #FFFFFF 110.43%) 0 0 / 5px 100% no-repeat, linear-gradient(316.11deg, #FBD300 0.4%, #FFFFFF 110.43%) 0 0 / 100% 5px no-repeat",
                backgroundPosition: "top right, top right",
              }}
            />
            Our Best o2
          </h2>
        </div>
        <div
          className="mt-[242px] ml-[88px] mr-[42px] w-[1600px] h-[755px] rounded-[92px] flex flex-col md:flex-row items-center md:items-start gap-6 relative"
          style={{ opacity: 1 }}
        >
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
            preserveAspectRatio="none"
            style={{ overflow: "visible" }}
            viewBox="0 0 1600 755"
          >
            <defs>
              <linearGradient
                id="borderGradient-oxygen"
                x1="25%"
                y1="7%"
                x2="75%"
                y2="93%"
              >
                <stop offset="6.85%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.5)" />
                <stop offset="94.86%" stopColor="#000000" stopOpacity="0.8" />
              </linearGradient>
              <mask id="blurMask-oxygen">
                <rect width="1600" height="755" fill="black" />
                <rect
                  x="0"
                  y="0"
                  width="1600"
                  height="755"
                  rx="92"
                  ry="92"
                  fill="white"
                />
              </mask>
            </defs>
            <rect
              x="0.5"
              y="0.5"
              width="1599"
              height="754"
              rx="92"
              ry="92"
              fill="none"
              stroke="url(#borderGradient-oxygen)"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.7"  
            />
          </svg>
          <div
            className="absolute inset-0 bg-white/5 backdrop-blur-md z-0 rounded-[92px]"
            style={{
              mask: "url(#blurMask-oxygen)",
              WebkitMask: "url(#blurMask-oxygen)",
              maskImage: "url(#blurMask-oxygen)",
            }}
          />
          <div className="absolute left-[-78px] bottom-0 w-[877px] h-[877px] shrink-0 z-20">
            <img
              src={plantImage}
              alt="O2 Plant"
              className="w-full h-full object-contain "
            />
          </div>
          <div className="absolute top-[135px] right-[4px] text-white text-center md:text-left md:w-1/2 px-8 opacity-75">
            <h3 className="font-semibold text-[38px] leading-[100%] tracking-[0] mb-[42px]">
              We Have Small And Best O₂ Plants Collection’s
            </h3>

            <div className="space-y-4 mb-4">
              <p className="font-semibold text-[28px] leading-[100%] tracking-[0] text-gray-300 mb-[42px]">
                Oxygen-producing plants, often referred to as “O₂ plants,” are
                those that release oxygen into the atmosphere through the
                process of photosynthesis.
              </p>
              <p className="font-semibold text-[28px] leading-[100%] tracking-[0] text-gray-300">
                Many plants can help filter out pollutants and toxins from the
                air, such as formaldehyde, benzene, and trichloroethylene. This
                makes the air cleaner and healthier to breathe.
              </p>
            </div>

            <div className="flex justify-center md:justify-between items-center">
              <button
                className="w-[217px] h-[64px] text-[28px] font-medium text-white border-2 border-white rounded-[12px] hover:bg-white hover:text-black transition duration-300 ease-in-out"
                aria-label="Explore this plant"
              >
                Explore
              </button>
              <div className="mt-4 font-inter font-bold leading-none tracking-normal text-white flex items-center gap-[43px]">
                <svg
                  className="w-[24px] h-[24px] opacity-[0.35]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="flex items-end gap-1 leading-none">
                  <span className="text-[20px]">01/</span>
                  <span className="text-[15px]">04</span>
                </span>
                <svg
                  className="w-[24px] h-[24px] opacity-[0.75]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[133px] opacity-75">
          <span className="w-[31px] h-[11px] bg-white rounded-md"></span>
          <span className="w-[11px] h-[11px] rounded-full bg-gray-400 ml-[12px]"></span>
          <span className="w-[11px] h-[11px] rounded-full bg-gray-400 ml-[12px]"></span>
        </div>
      </div>
    </section>
  );
};

export default OxygenPlantPromo;