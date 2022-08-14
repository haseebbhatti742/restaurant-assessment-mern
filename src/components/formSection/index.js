import React from "react";
import Form from "./Form";
import TextSection from "./TextSection";

function FormSection() {
  return (
    <div
      className="flex flex-col md:flex-row bg-gray-background rounded-2xl justify-between py-2"
      style={{ fontFamily: "Manrope" }}
      id="form"
    >
      <div className="w-full md:w-3/5 flex items-center">
        <TextSection />
      </div>
      <div className="w-full  md:w-2/5 mt-5 md:mt-0">
        <Form />
      </div>
    </div>
  );
}

export default FormSection;
