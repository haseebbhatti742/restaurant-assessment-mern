import React from "react";
import CartLogo from "../../assets/Cart without text.png";

function CategoriesCardItem({ categoryItem }) {
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
    <div className="h-60 rounded-t-2xl bg-gray-background">
      <div>
        <img src={image} className="w-72 h-64 rounded-t-2xl" />
      </div>
      <div className="px-3 py-3">
        <div>{title}</div>
        <div>
          <span className="text-yellow-primary">{currency}</span> {price}
        </div>
        <div className="flex items-center">
          <span>Add to cart</span>
          <img src={CartLogo} className="w-9 h-9 " />
        </div>
      </div>
    </div>
  );
}

export default CategoriesCardItem;
