import p1 from "../assets/image/p1.png";
import review from "../assets/image/r1.png";
import circle from "../assets/image/circle.png";
import play from "../assets/image/Polygontwo.png";
import ar from "../assets/image/arow.png";

export default function HeroSection() {
  return (
    <section>
      <div className="max-w-[1728px] mx-auto relative">
        <h1 className="absolute top-[252px] left-[43px] w-[798px] h-[143px] text-[118px] leading-tight font-bold text-white opacity-75">
          Earth's Exhale
        </h1>
        <p className="absolute top-[391px] left-[51px] w-[775px] text-[23px] leading-[100%] font-medium text-white opacity-75">
          "Earth Exhale" symbolizes the purity and vitality of the Earth's
          natural environment and its essential role in sustaining life.
        </p>

        <button className="absolute top-[466px] left-[39px] w-[217px] h-[64px] border-2 border-white text-white bg-transparent rounded-[12px] hover:bg-white/10 transition">
          <p className="font-[Inter] font-normal text-[28px] leading-[100%] tracking-[0]">
            Buy Now
          </p>
        </button>

        <div>
          <img
            src={circle}
            alt="Circle"
            className="absolute top-[462px] left-[277px] w-[70px] h-[70px]"
          />
          <img
            src={play}
            alt="Play Icon"
            className="absolute top-[480px] left-[299px] w-[34px] h-[34px] opacity-75 rounded-[3px]"
          />
        </div>
        <p className="absolute top-[485px] left-[366px] w-[119px] h-[36px] font-indie font-normal text-[25px] leading-[100%] text-white whitespace-nowrap text-center">
          Live Demo...
        </p>

        <div className="top-[705px] left-[43px] w-[409px] h-[237px] opacity-100 rounded-[45px] relative">
          <div className="relative w-[409px] h-[237px] opacity-100 shadow-2xl flex flex-col rounded-[45px]">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-20"
              preserveAspectRatio="none"
              style={{ overflow: "visible" }}
              viewBox="0 0 409 237"
            >
              <defs>
                <linearGradient
                  id="borderGradient-testimonial"
                  x1="25%"
                  y1="7%"
                  x2="75%"
                  y2="93%"
                >
                  <stop offset="6.85%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="50%" stopColor="rgba(255, 255, 255, 0.5)" />
                  <stop offset="94.86%" stopColor="#000000" stopOpacity="0.8" />
                </linearGradient>
                <mask id="blurMask-testimonial">
                  <rect width="409" height="237" fill="black" />
                  <rect
                    x="0"
                    y="0"
                    width="409"
                    height="237"
                    rx="45"
                    ry="45"
                    fill="white"
                  />
                </mask>
              </defs>
              <rect
                x="0.5"
                y="0.5"
                width="408"
                height="236"
                rx="45"
                ry="45"
                fill="none"
                stroke="url(#borderGradient-testimonial)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div
              className="absolute inset-0 bg-[#FFFFFF0D] backdrop-blur-[15px] z-0 rounded-[45px]"
              style={{
                mask: "url(#blurMask-testimonial)",
                WebkitMask: "url(#blurMask-testimonial)",
                maskImage: "url(#blurMask-testimonial)",
              }}
            />

            <div className="w-full h-full p-4 rounded-[45px] relative z-40">
              <div className="absolute top-[37px] left-[27px] flex gap-4 items-center">
                <img
                  src={review}
                  alt="Reviewer"
                  className="w-16 h-16 object-cover rounded-full shadow"
                />
                <div>
                  <p className="font-inter font-normal text-[22px] leading-[100%] text-white">
                    Ronnie Hamill
                  </p>
                  <div className="flex">
                    {[...Array(4)].map((_, idx) => (
                      <svg
                        key={idx}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-[15px] h-[15px] text-[#fff84e] mr-[9px]"
                      >
                        <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.782 1.402 8.174L12 18.896l-7.336 3.871 1.402-8.174L.132 9.211l8.2-1.193z" />
                      </svg>
                    ))}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-[15px] h-[15px] text-[#fff84e] mr-[9px]"
                    >
                      <defs>
                        <linearGradient id="half">
                          <stop offset="50%" stopColor="currentColor" />
                          <stop offset="50%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#half)"
                        d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.782 1.402 8.174L12 18.896l-7.336 3.871 1.402-8.174L.132 9.211l8.2-1.193z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="absolute font-[inter] left-[25px] top-[125px] text-gray-200 mt-2">
                I can't express how thrilled I am with my new natural plants!
                They bring such a fresh and vibrant energy to my home.
              </p>
            </div>
          </div>
        </div>

        <div
          className="absolute top-[194px] left-[1164px] w-[512px] h-[644px] opacity-100"
          style={{ overflow: "visible" }}
        >
          <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[459px] h-[459px] z-30">
            <img
              src={p1}
              alt="Aglaonema plant"
              className="w-full h-full object-cover"
              style={{ display: "block" }}
            />
          </div>

          <div className="relative w-[512px] h-[644px] opacity-100 shadow-2xl flex flex-col">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-20"
              preserveAspectRatio="none"
              style={{ overflow: "visible" }}
              viewBox="0 0 512 644"
            >
              <defs>
                <linearGradient
                  id="borderGradient"
                  x1="25%"
                  y1="7%"
                  x2="75%"
                  y2="93%"
                >
                  <stop offset="6.85%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="50%" stopColor="rgba(255, 255, 255, 0.5)" />
                  <stop offset="94.86%" stopColor="#000000" stopOpacity="0.8" />
                </linearGradient>
                <mask id="blurMask">
                  <rect width="512" height="644" fill="black" />
                  <path
                    d="M 0.5 77 Q 0.5 38.5 19.75 19.75 Q 38.5 1 77 1 C 150 5, 200 25, 256 25 C 312 25, 362 5, 435 1 Q 473.5 0.5 492.25 19.75 Q 511 38.5 511 77 L 511 567 Q 511 605.5 492.25 624.25 Q 473.5 643 435 643 L 77 643 Q 38.5 643 19.75 624.25 Q 0.5 605.5 0.5 567 Z"
                    fill="white"
                  />
                </mask>
              </defs>
              <path
                d="M 1 77 Q 1 38.5 19.75 19.75 Q 38.5 1 77 1 C 150 5, 200 25, 256 25 C 312 25, 362 5, 435 1 Q 473.5 1 492.25 19.75 Q 511 38.5 511 77 L 511 567 Q 511 605.5 492.25 624.25 Q 473.5 643 435 643 L 77 643 Q 38.5 643 19.75 624.25 Q 1 605.5 1 567 Z"
                fill="none"
                stroke="url(#borderGradient)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div
              className="absolute inset-0 bg-[#FFFFFF0D] backdrop-blur-[15px] z-0"
              style={{
                mask: "url(#blurMask)",
                WebkitMask: "url(#blurMask)",
                maskImage: "url(#blurMask)",
              }}
            />

            <div className="mt-[370px] ml-[81px] flex flex-col relative z-40">
              <h2 className="text-[23px] leading-[100%] font-normal mb-[5px] text-white font-['Inter']">
                Indoor Plant
              </h2>
              <div className="flex justify-between items-center">
                <p className="text-[38px] leading-[100%] font-normal mb-[15px] text-white font-['Inter'] opacity-[75%]">
                  Aglaonema plant
                </p>
                <img
                  src={ar}
                  alt="arrow"
                  className="w-[20px] h-[20px] mr-[24px]"
                />
              </div>
              <button className="mt-[20px] w-[217px] h-[64px] border-2 border-white bg-transparent text-white rounded-[12px] text-[28px]">
                Buy Now
              </button>
            </div>
            <div className="flex justify-center mt-[36px] relative z-40">
              <span className="w-[26px] h-[6px] bg-white rounded-md"></span>
              <span className="w-[6px] h-[6px] rounded-full bg-gray-400 ml-[12px]"></span>
              <span className="w-[6px] h-[6px] rounded-full bg-gray-400 ml-[12px]"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
