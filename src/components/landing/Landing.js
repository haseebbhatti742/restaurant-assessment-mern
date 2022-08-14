import React from "react";
import BG from "../../assets/slider-food-image.png";

function Landing() {
  return (
    <div
      style={{
        backgroundImage: `url('${BG}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        height: "470px",
      }}
      className="pl-20"
    >
      <div className="flex flex-col justify-center h-full w-2/3">
        <div className="mb-5 mt-24">
          <p
            className="text-6xl leading-tight font-semibold"
            style={{ fontFamily: "Martel" }}
          >
            Different Spice For A <br />
            Different Taste
          </p>
        </div>
        <div className="text-2xl font-sans text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, nulla <br />{" "}
          enim posuere quis consequat.
        </div>

        <span
          className={`bg-yellow-primary text-center w-56 rounded-2xl py-3 font-semibold mt-20`}
        >
          GET STARTED
        </span>
      </div>
    </div>
  );
}

export default Landing;
