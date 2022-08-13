import React from "react";
import { useAppContext } from "../../context/AppContextContainer";
import CategoriesCardItem from "./CategoriesCardItem";
import { Grid } from "react-loader-spinner";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import useWindowSize from "../../hooks/useWindowsDimension";

function CategoriesList() {
  const { categoriesData, categoriesDataLoading } = useAppContext();
  const { isMobile } = useWindowSize();
  return (
    <div className="flex mt-10 w-full">
      {categoriesDataLoading ? (
        <div className="flex justify-center w-full">
          <Grid color="#FDC913" width={50} height={50} />
        </div>
      ) : (
        <OwlCarousel
          key={Math.random()}
          className="owl-height"
          margin={10}
          items={isMobile ? 1 : 4}
          autoWidth={false}
          lazyLoad
          autoHeightClass="auto"
        >
          {categoriesData?.map((data) => (
            <CategoriesCardItem key={data?.id} categoryItem={data} />
          ))}
        </OwlCarousel>
      )}
    </div>
  );
}

export default CategoriesList;
