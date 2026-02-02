import { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  const goToAdmin = () => {
    window.location.href = "https://admin.foreverbuy.in/login";
    // OR if localhost:
    // window.location.href = "http://localhost:5174/login";
  };

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <div className="flex items-center justify-between py-5 font-medium">
        {/* Logo */}
        <Link to="/">
          <img src={assets.logo} className="w-36" alt="logo" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden sm:flex gap-6 text-gray-700">
          {["/", "/collection", "/about", "/contact"].map((path, i) => (
            <NavLink
              key={i}
              to={path}
              className="flex flex-col items-center gap-1 no-underline text-gray-900"
            >
              <p>
                {path === "/"
                  ? "HOME"
                  : path.replace("/", "").toUpperCase()}
              </p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            className="w-5 cursor-pointer"
            alt=""
          />

          {/* Profile */}
          <div className="group relative">
            <img
              onClick={() => (token ? null : navigate("/login"))}
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt=""
            />
            {token && (
              <div className="group-hover:block hidden absolute right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                  <p className="cursor-pointer hover:text-black">
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("/orders")}
                    className="cursor-pointer hover:text-black"
                  >
                    Orders
                  </p>
                  <p
                    onClick={logout}
                    className="cursor-pointer hover:text-black"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5" alt="" />
            <p className="absolute -right-1 -bottom-1 w-4 text-center bg-black text-white rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>

          {/* Admin Button (Desktop) */}
          <button
            onClick={goToAdmin}
            className="hidden sm:block px-3 py-[3px] text-xs border border-gray-400 
                       rounded-full text-gray-700 hover:bg-black hover:text-white transition"
          >
            Admin
          </button>

          {/* Mobile Menu Icon */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt=""
          />
        </div>
      </div>

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`fixed top-0 right-0 h-screen bg-[#fafafa] z-50 transition-all duration-300 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        {visible && (
          <div className="flex flex-col h-full">
            {/* Header */}
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-4 border-b bg-white cursor-pointer"
            >
              <img
                src={assets.dropdown_icon}
                className="h-4 rotate-180"
                alt=""
              />
              <p className="font-medium">Menu</p>
            </div>

            {/* Links */}
            <div className="flex flex-col text-gray-700">
              {[
                { name: "Home", path: "/" },
                { name: "Collection", path: "/collection" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item, i) => (
                <NavLink
                  key={i}
                  to={item.path}
                  onClick={() => setVisible(false)}
                  className="py-3 px-6 border-b no-underline"
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Admin Button (Mobile) */}
              <button
                onClick={goToAdmin}
                className="mx-6 mt-6 py-2 text-sm border rounded-lg 
                           hover:bg-black hover:text-white transition"
              >
                Admin Panel
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
