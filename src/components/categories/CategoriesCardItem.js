import React from "react";
import CartLogo from "../../assets/Cart without text.png";

function CategoriesCardItem({ categoryItem, handleCartInsert }) {
  const {
    id,
    slug,
    title,
    category,
    image,
    price,
    currency,
    availableQuantity,
  } = categoryItem;
  return (
    <div className="h-auto rounded-t-2xl bg-gray-background">
      <div>
        <img src={image} className="w-72 h-64  rounded-t-2xl" />
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
          <span className="w-6 h-6">
            <img src={CartLogo} className="ml-4" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default CategoriesCardItem;
