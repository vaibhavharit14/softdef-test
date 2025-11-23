import { products } from "../data/TopSelling";
import bag from "../assets/image/bag.png";

export default function TopSellingPlants() {
  const bracketStyle = {
    background:
      "linear-gradient(316.11deg, #FBD300 0.4%, #FFFFFF 110.43%) 0 0 / 5px 100% no-repeat, linear-gradient(316.11deg, #FBD300 0.4%, #FFFFFF 110.43%) 0 0 / 100% 5px no-repeat",
  };

  return (
    <section className="w-full bg-[#1b2316] text-white py-16">
      <div className="max-w-[1728px] mx-auto">
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
            Our Top Selling Plant
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-[49px] px-[47px]">
          {products.map((p) => (
            <div
              key={p.id}
              className="relative flex-shrink w-[512px] h-[664px] flex flex-col items-center mb-[65px]"
            >
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-20"
                preserveAspectRatio="none"
                style={{ overflow: "visible" }}
                viewBox="0 0 512 664" 
              >
                <defs>
                  <linearGradient
                    id={`borderGradient-${p.id}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="6.68%" stopColor="rgba(255, 255, 255, 0.2)" />
                    <stop offset="51.71%" stopColor="rgba(0, 0, 0, 0)" />
                    <stop offset="93.27%" stopColor="rgba(255, 255, 255, 0.2)" />
                  </linearGradient>
                  <mask id={`blurMask-${p.id}`}>
                    <rect width="512" height="664" fill="black" />
                    <path
                      d="M 0.5 77 Q 0.5 38.5 19.75 19.75 Q 38.5 1 77 1 C 150 5, 200 25, 256 25 C 312 25, 362 5, 435 1 Q 473.5 0.5 492.25 19.75 Q 511 38.5 511 77 L 511 587 Q 511 625.5 492.25 644.25 Q 473.5 663 435 663 L 77 663 Q 38.5 663 19.75 644.25 Q 0.5 625.5 0.5 587 Z"
                      fill="white"
                    />
                  </mask>
                </defs>
                <path
                  d="M 0.5 77 Q 0.5 38.5 19.75 19.75 Q 38.5 1 77 1 C 150 5, 200 25, 256 25 C 312 25, 362 5, 435 1 Q 473.5 0.5 492.25 19.75 Q 511 38.5 511 77 L 511 587 Q 511 625.5 492.25 644.25 Q 473.5 663 435 663 L 77 663 Q 38.5 663 19.75 644.25 Q 0.5 625.5 0.5 587 Z"
                  fill="none"
                  stroke={`url(#borderGradient-${p.id})`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div
                className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-[77px] z-0"
                style={{
                  mask: `url(#blurMask-${p.id})`,
                  WebkitMask: `url(#blurMask-${p.id})`,
                  maskImage: `url(#blurMask-${p.id})`,
                }}
              />
              <div className="-mt-32 mb-8 relative z-30">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-[459px] h-[459px] object-contain rounded-xl mx-auto"
                />
              </div>
<div className="flex flex-col w-full pl-[66px] pr-[74px] relative z-40">
  <h3 className="text-[38px] font-normal mb-2">{p.name}</h3>
  <p className="text-[24px] font-normal mb-4 line-clamp-3">{p.description}</p>
  <div className="mt-auto h-[80px] flex items-center justify-between">
    <p className="text-[38px] font-normal leading-none">Rs. {p.price}/-</p>
    <button className="w-[64px] h-[64px] border-[2px] border-white rounded-[12px] flex items-center justify-center hover:bg-white hover:text-black transition">
      <img src={bag} alt="Add to bag" className="w-[34px] h-[34px]" />
    </button>
  </div>
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}