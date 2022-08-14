import React from "react";
import { useAppContext } from "../../context/AppContextContainer";
import CategoriesList from "./CategoriesList";
import CategoriesTab from "./CategoriesTab";

function Categories() {
  const { cartItems } = useAppContext();
  return (
    <div id="menu">
      <div className="mb-4 mt-28">
        <h1 className="text-4xl mb-3">Our Popular Menu</h1>
        <span className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet
          tempus <br /> dolor sed auctor. Volutpat facilisi in imperdiet quam
          penatibus ut.
        </span>
      </div>
      <CategoriesTab />
      <CategoriesList />
    </div>
  );
}

export default Categories;
