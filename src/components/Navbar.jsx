import Logo from "../assets/image/logo.png";
import bag from "../assets/image/bag.png";
import search from "../assets/image/search.png";
import Polygonone from "../assets/image/Polygonone.png";
import lineone from "../assets/image/lineone.png";
import linetwo from "../assets/image/linetwo.png";

export default function Navbar() {
  return (
    <nav className="w-full absolute top-0 left-0 z-50 bg-transparent">
      <div className="max-w-[1728px] w-full h-[112px] mx-auto relative">
        <div className="absolute left-[39px] top-[57px] w-[225px] h-[48px] flex items-center gap-3">
          <img
            src={Logo}
            alt="FloraVision Logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-[28px] font-black leading-[100%] tracking-[0em] text-white font-inter">
            FloraVision
          </h1>
        </div>
        <ul className="absolute left-[600px] top-[64px] w-[531px] h-[35px] flex items-center text-white font-indie text-[24px] font-normal leading-[100%] tracking-[0em]">
          <li className="cursor-pointer hover:text-green-400 transition">
            Home
          </li>
          <li className="ml-[71px] cursor-pointer hover:text-green-400 transition flex items-center gap-[20px]">
            Plants Type
            <img
              src={Polygonone}
              alt="Dropdown Arrow"
              className="w-[12px] h-[7px] object-contain"
            />
          </li>
          <li className="ml-[57px] cursor-pointer hover:text-green-400 transition">
            More
          </li>
          <li className="ml-[72px] cursor-pointer hover:text-green-400 transition">
            Contact
          </li>
        </ul>
        <img
          src={search}
          alt="Search"
          className="absolute left-[1487px] top-[68px] w-[26px] h-[26px] opacity-75 cursor-pointer"
        />
        <img
          src={bag}
          alt="Cart"
          className="absolute left-[1572px] top-[68px] w-[26px] h-[26px] opacity-75 cursor-pointer"
        />
        <img
          src={lineone}
          alt="Line One"
          className="absolute left-[1657px] top-[74px] w-[31px] h-auto cursor-pointer"
        />
        <img
          src={linetwo}
          alt="Line Two"
          className="absolute left-[1665px] top-[87px] w-[23px] h-auto cursor-pointer"
        />
      </div>
    </nav>
  );
}
