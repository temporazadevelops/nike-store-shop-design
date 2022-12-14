import React from "react";
import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setCartState } from "../../app/CartSlice";

const Item = ({
  ifExists,
  id,
  title,
  text,
  rating,
  btn,
  img,
  price,
  color,
  shadow,
}) => {
  const dispatch = useDispatch();
  const onCartToggle = () => {
    dispatch(setCartState({ cartState: true }));
  };
  const onAddItemToCart = () => {
    dispatch(
      setAddItemToCart({
        id,
        title,
        text,
        img,
        price,
        color,
        shadow,
      })
    );
  };
  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
          ifExists ? "justify-items-start" : "justify-items-center"
        } rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div
          className={`grid items-center ${
            ifExists ? "justify-items-start" : "justify-items-center"
          }`}
        >
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h1>
          <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
            {text}
          </p>
          <div className="flex items-center justify-between w-28 my-2">
            <div className="bg-white/80 px-1 rounded  blur-effect-theme shadow shadow-sky-200">
              <h1 className="text-sm text-black font-medium">${price}</h1>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="icon-style w-5 h-5 md:w-5 md:h-5" />
              <h1 className="text-slate-100 font-normal md:text-sm">
                {rating}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
              onClick={onAddItemToCart}
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-black text-sm"
              onClick={() => {
                onAddItemToCart();
                onCartToggle();
              }}
            >
              {btn}
            </button>
          </div>
        </div>
        <div
          className={`flex items-center ${
            ifExists ? "absolute top-5 right-1" : "justify-items-center"
          }`}
        >
          <img
            src={img}
            alt={`img/item-img/${id}`}
            className={`${
              ifExists
                ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
                : "h-36 w-64"
            } transitions-theme hover:-rotate-12`}
          />
        </div>
      </div>
    </>
  );
};

export default Item;
