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
      className="px-10"
    >
      <div className="flex flex-col justify-center h-full w-2/3 px-20">
        <div className="mb-5">
          <p className="text-6xl font-semibold">
            Different Spice For A <br />
            Different Taste
          </p>
        </div>
        <div className="text-2xl">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, nulla <br />{" "}
          enim posuere quis consequat.
        </div>

        <span
          className={`bg-yellow-primary text-center w-48 rounded-lg py-3 mt-20`}
        >
          GET STARTED
        </span>
      </div>
    </div>
  );
}

export default Landing;
