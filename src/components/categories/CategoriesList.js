import React from "react";
import { useAppContext } from "../../context/AppContextContainer";
import CategoriesCardItem from "./CategoriesCardItem";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import useWindowSize from "../../hooks/useWindowsDimension";
import Loader from "../loader/Loader";

function CategoriesList() {
  const { categoriesData, categoriesDataLoading, addToCart, cartItems } =
    useAppContext();
  const { isMobile } = useWindowSize();

  const handleCartInsert = (state) => {
    console.log(state, "llllll");
    addToCart(state);
  };
  return (
    <div className="flex mt-10 w-full">
      {categoriesDataLoading ? (
        <Loader />
      ) : (
        <>
          <OwlCarousel
            key={Math.random()}
            className="owl-height"
            margin={10}
            items={isMobile ? 1 : 4}
            autoWidth={false}
            lazyLoad
            autoHeightClass="1000px"
          >
            {categoriesData?.map((data) => (
              <CategoriesCardItem
                key={data?.id}
                categoryItem={data}
                handleCartInsert={handleCartInsert}
              />
            ))}
          </OwlCarousel>
        </>
      )}
    </div>
  );
}

export default CategoriesList;
