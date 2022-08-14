import React from "react";
import CartLogo from "../../assets/Cart without text.png";

function CategoriesCardItem({ categoryItem, handleCartInsert }) {
  const { title, image, price, currency } = categoryItem;
  return (
    <div className="h-auto rounded-2xl bg-gray-background text-gray-600 text-2xl">
      <div>
        <img
          src={image}
          className="w-72 h-64  rounded-t-2xl"
          alt={categoryItem?.id}
        />
      </div>
      <div className="px-3 py-3">
        <div>{title}</div>
        <div>
          <span className="text-yellow-primary">{currency}</span> {price}
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleCartInsert(categoryItem)}
        >
          <span>Add to cart</span>
          <span className="w-8 h-8">
            <img src={CartLogo} className="ml-4" alt="Cart Logo" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default CategoriesCardItem;
