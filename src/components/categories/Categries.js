import React from "react";
import CategoriesList from "./CategoriesList";
import CategoriesTab from "./CategoriesTab";

function Categories() {
  return (
    <div id="menu">
      <div className="mb-4 mt-28" style={{ fontFamily: "Manrope" }}>
        <h1 className="text-6xl font-extrabold mb-3">Our Popular Menu</h1>
        <span className="mt-5 text-xl text-gray-500">
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
