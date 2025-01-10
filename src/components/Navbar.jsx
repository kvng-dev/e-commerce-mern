import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const links = [
  { text: "Home", href: "/" },
  { text: "Collection", href: "/collection" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { search, setShowSearch, showSearch, setSearch } =
    useContext(ShopContext);
  return (
    <div className="flex items-center justify-between font-medium">
      <Link
        to={"/"}
        className="flex items-center justify-between py-5 font-medium"
      >
        {/* <img src={assets.logo} className="w-36" alt="logo" /> */}

        <div className="relative group">
          <h1 className="font-bold text-2xl praise-regular">FOREVER</h1>
          <div className="rounded-full w-4 h-4 absolute bg-pink-400 bottom-0 -right-4 hover:animate-bounce"></div>
        </div>
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {links.map((link, i) => (
          <NavLink
            to={link.href}
            key={i}
            className="flex flex-col items-center gap-1"
          >
            <p>{link.text}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        ))}
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt=""
          onClick={() => {
            setShowSearch(true);
          }}
        />

        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          alt=""
          onClick={() => setVisible(!visible)}
          className="w-5 sm:hidden cursor-pointer"
        />
      </div>

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(!visible)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <div className="mx-auto flex gap-8 items-center flex-col justify-center">
            {links.map((link, i) => (
              <NavLink
                to={link.href}
                key={i}
                className=""
                onClick={() => setVisible(!visible)}
              >
                <span className="text-2xl flex py-1 justify-center">
                  {link.text}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
