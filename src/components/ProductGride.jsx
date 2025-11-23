import { products } from "../data/Products";
import bag from "../assets/image/bag.png";

export default function ProductGrid() {
  const bracketStyle = {
    background:
      "linear-gradient(316.11deg, #FBD300 0.4%, #FFFFFF 110.43%) 0 0 / 5px 100% no-repeat, linear-gradient(316.11deg, #FBD300 0.4%, #FFFFFF 110.43%) 0 0 / 100% 5px no-repeat",
  };

  return (
    <section className="relative px-8 py-12 bg-transparent">
      <h2 className="absolute top-[800px] left-[617px] w-[492px] h-[67px] text-[55px] leading-[100%] font-bold text-white text-center font-['Inter'] flex items-center justify-center">
        <span
          className="absolute bottom-0 left-[-55px] w-[55px] h-[55px] pointer-events-none rounded-bl-[15px]"
          style={{
            ...bracketStyle,
            backgroundPosition: "top left, bottom left",
          }}
        />
        <span
          className="absolute top-0 right-[-55px] w-[55px] h-[55px] pointer-events-none rounded-tr-[15px]"
          style={{
            ...bracketStyle,
            backgroundPosition: "top right, top right",
          }}
        />
        Our Selling Plants
      </h2>

      <div className="absolute top-[950px] left-0 right-0 mx-auto flex flex-col gap-[127px]">
        {products.map((p, index) => (
          <div
            key={p.id}
            className="relative w-[1619px] h-[526px] left-[54px] rounded-[150px] flex items-center p-12"
          >
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-20"
              preserveAspectRatio="none"
              viewBox="0 0 1619 526"
            >
              <defs>
                <linearGradient
                  id={`borderGradient-${p.id}`}
                  x1="25%"
                  y1="7%"
                  x2="75%"
                  y2="93%"
                >
                  <stop offset="6.85%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="50%" stopColor="rgba(255, 255, 255, 0.5)" />
                  <stop offset="94.86%" stopColor="#000000" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <rect
                x="0.5"
                y="0.5"
                width="1618"
                height="525"
                rx="150"
                ry="150"
                fill="none"
                stroke={`url(#borderGradient-${p.id})`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity="0.5" 
              />
            </svg>
            <div className="absolute inset-0 bg-white/5 backdrop-blur-md z-0 rounded-[150px]" />
            <img
              src={p.image}
              alt={p.name}
              className={`absolute z-20 w-[601px] h-[732px] object-contain rounded-[30px] ${
                index % 2 === 0
                  ? "top-[30%] left-[72px] -translate-y-[50%]"
                  : "top-[30%] right-[72px] -translate-y-[50%]"
              }`}
            />
            <div
              className={`relative z-10 text-white text-left max-w-[700px] ${
                index % 2 === 0
                  ? "ml-[calc(601px+169px)]"
                  : "mr-[calc(601px+169px)]"
              }`}
            >
              <h3 className="text-[38px] leading-[100%] font-semibold">
                {p.name}
              </h3>
              <p className="mt-[34px] mb-[24px] text-[20px] leading-[100%] font-semibold">
                {p.description}
              </p>
              <p className="text-[38px] leading-[100%] font-semibold">
                Rs. {p.price}/-
              </p>
              <div className="flex gap-4 flex-wrap mt-[24px]">
                <button
                  className="w-[217px] h-[64px] text-[28px] font-medium text-white border-2 border-white rounded-[12px] hover:bg-white hover:text-black transition duration-300 ease-in-out"
                  aria-label="Explore this plant"
                >
                  Explore
                </button>
                <button className="w-[64px] h-[64px] border-[2px] border-white rounded-[12px] flex items-center justify-center">
                  <img
                    src={bag}
                    alt="Add to bag"
                    className="w-[34px] h-[34px]"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}