import { reviews } from "../data/Review";

export default function ReviewSection() {
  const bracketStyle = {
    background:
      "linear-gradient(316.11deg, #FBD300 0.4%, #FFFFFF 110.43%) 0 0 / 5px 100% no-repeat, linear-gradient(316.11deg, #FBD300 0.4%, #FFFFFF 110.43%) 0 0 / 100% 5px no-repeat",
  };

  return (
    <section className="w-full max-w-[1728px] mx-auto bg-[#1b2316] text-white py-16">
      <div>
        <div className="mt-[76px] mx-auto flex items-center justify-center mb-[84px]">
          <h2 className="text-[55px] leading-[100%] font-semibold text-center font-['Inter'] relative inline-block">
            <span
              className="absolute bottom-0 left-[-60px] w-[55px] h-[55px] pointer-events-none rounded-bl-[15px]"
              style={{
                ...bracketStyle,
                backgroundPosition: "top left, bottom left",
              }}
            />
            <span
              className="absolute top-0 right-[-60px] w-[55px] h-[55px] pointer-events-none rounded-tr-[15px]"
              style={{
                ...bracketStyle,
                backgroundPosition: "top right, top right",
              }}
            />
            Customer Review
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-[33px] px-[45px]">
          {reviews.map((r, i) => (
            <div
              key={i}
              role="article"
              aria-label={`Review by ${r.name}`}
              className="flex-shrink relative w-[512px] h-[480px] hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
            >
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-20"
                preserveAspectRatio="none"
                style={{ overflow: "visible" }}
                viewBox="0 0 512 480"
              >
                <defs>
                  <linearGradient
                    id={`borderGradient-review-${i}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="6.68%" stopColor="rgba(255, 255, 255, 0.2)" />
                    <stop offset="51.71%" stopColor="rgba(0, 0, 0, 0)" />
                    <stop offset="93.27%" stopColor="rgba(255, 255, 255, 0.2)" />
                  </linearGradient>
                  <mask id={`blurMask-review-${i}`}>
                    <rect width="512" height="480" fill="black" />
                    <path
                      d="M 1 77 Q 1 38.5 19.75 19.75 Q 38.5 1 77 1 C 150 5, 200 25, 256 25 C 312 25, 362 5, 435 1 Q 473.5 1 492.25 19.75 Q 511 38.5 511 77 L 511 403 Q 511 441.5 492.25 460.25 Q 473.5 479 435 479 L 77 479 Q 38.5 479 19.75 460.25 Q 1 441.5 1 403 Z"
                      fill="white"
                    />
                  </mask>
                </defs>
                <path
                  d="M 1 77 Q 1 38.5 19.75 19.75 Q 38.5 1 77 1 C 150 5, 200 25, 256 25 C 312 25, 362 5, 435 1 Q 473.5 1 492.25 19.75 Q 511 38.5 511 77 L 511 403 Q 511 441.5 492.25 460.25 Q 473.5 479 435 479 L 77 479 Q 38.5 479 19.75 460.25 Q 1 441.5 1 403 Z"
                  fill="none"
                  stroke={`url(#borderGradient-review-${i})`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div
                className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-[77px] z-0"
                style={{
                  mask: `url(#blurMask-review-${i})`,
                  WebkitMask: `url(#blurMask-review-${i})`,
                  maskImage: `url(#blurMask-review-${i})`,
                }}
              />
              <img
                src={r.image}
                alt={`Profile of ${r.name}`}
                className="w-24 h-24 object-cover rounded-full absolute top-[91px] left-[58px] z-30"
              />
              <div className="absolute top-[98px] left-[184px] ml-[38px] z-40">
                <p className="text-[38px] font-semibold text-white">{r.name}</p>
                <div className="flex">
                  {[...Array(4)].map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-yellow-500"
                    >
                      <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.782 1.402 8.174L12 18.896l-7.336 3.871 1.402-8.174L.132 9.211l8.2-1.193z" />
                    </svg>
                  ))}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-yellow-500"
                  >
                    <defs>
                      <linearGradient id={`half-${i}`}>
                        <stop offset="50%" stopColor="currentColor" />
                        <stop offset="50%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                    <path
                      fill={`url(#half-${i})`}
                      d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.782 1.402 8.174L12 18.896l-7.336 3.871 1.402-8.174L.132 9.211l8.2-1.193z"
                    />
                  </svg>
                </div>
              </div>
              <p className="absolute top-[240px] left-[54px] right-[51px] font-['Inter'] font-normal text-[24px] text-gray-300 text-center z-40">
                "{r.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}