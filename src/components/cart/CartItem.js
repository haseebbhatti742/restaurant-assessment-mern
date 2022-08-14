import React, { useState } from "react";
import { useAppContext } from "../../context/AppContextContainer";

function CartItem({ item }) {
  const { handleIncrementQuantity, handleDecrementQuantity, removeFromCart } =
    useAppContext();
  return (
    <div className="mb-3 flex items-center ">
      <div>
        <img src={item?.image} className="w-20  h-20" />
        <span
          className="text-red-primary underline text-sm cursor-pointer"
          onClick={() => removeFromCart(item)}
        >
          Remove
        </span>
      </div>
      <div className="ml-3">
        <div>
          <h1>{item?.title}</h1>
        </div>
        <div className="flex cursor-pointer justify-around mt-2">
          <div onClick={() => handleDecrementQuantity(item)}>
            <span className="p-1 px-2 rounded-full text-white bg-gray-300">
              -
            </span>
          </div>
          <div className="mx-10">{item?.quantity}</div>
          <div onClick={() => handleIncrementQuantity(item)}>
            <span className="p-1 px-2 rounded-full text-white bg-gray-300">
              +
            </span>
          </div>
          <div className="ml-10">$ {item?.price}</div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
