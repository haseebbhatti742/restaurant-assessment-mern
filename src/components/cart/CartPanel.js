import React from "react";
import { useAppContext } from "../../context/AppContextContainer";
import CartItem from "./CartItem";

function CartPanel() {
  const { cartItems } = useAppContext();

  const getTotalPrice = () =>
    cartItems.reduce((acc, item) => (acc += item?.quantity * item?.price), 0);

  return (
    <div className="h-loose w-96 bg-white absolute left-0 md:left-1/2 mt-14 backdrop-blur-md rounded-xl z-20 shadow-md p-6">
      <div>
        <h1
          className="text-3xl font-extrabold mb-4"
          style={{ fontFamily: "Manrope" }}
        >
          CART
        </h1>
      </div>
      <div className="flex flex-col h-96">
        <div className="h-72 overflow-auto">
          {cartItems.map((item) => (
            <CartItem key={item?.id} item={item} />
          ))}
        </div>
        <div className="mt-auto">
          <div className="bg-yellow-primary rounded-full text-white w-full py-3 flex justify-between px-7">
            <span>CheckOut</span>
            <span>$ {getTotalPrice().toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPanel;
