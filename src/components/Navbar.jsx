import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotalQty,
  setCartState,
} from "../app/CartSlice";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const cartItemsTotalQty = useSelector(selectCartTotalQty);
  const dispatch = useDispatch();
  const onCartToggle = () => {
    dispatch(setCartState({ cartState: true }));
  };
  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${
          !navState
            ? "absolute top-7 left-0 right-0 opacity-100 z-50"
            : "fixed top-0 left-0 right-0 h-[9vh] z-[200] blur-effect-theme flex items-center justify-items-center"
        }`}
      >
        <nav className="nike-container flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo/img"
              className={` w-16 h-auto ${navState && "filter brightness-0"}`}
            />
          </div>
          <ul className="flex items-center justify-center gap-2">
            <li className="grid items-center">
              <MagnifyingGlassIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <HeartIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <button
                type="button"
                className="relative active:scale-110 transition-all duration-300"
                onClick={onCartToggle}
              >
                <ShoppingBagIcon
                  className={`icon-style ${
                    navState && "text-slate-900 transition-all duration-300"
                  }`}
                />
                <div
                  className={`absolute top-4 right-0  w-4 h-4 rounded-full text-[0.65rem] leading-tight font-medium flex items-center justify-center hover:scale-110 transition-all duration-300 ${
                    navState
                      ? "bg-black text-slate-100 shadow-slate-900"
                      : "bg-white text-slate-900 shadow shadow-slate-100"
                  }`}
                >
                  {cartItemsTotalQty}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
