import React from "react";

function Form() {
  return (
    <div>
      <h1 className="text-red-primary text-2xl font-semibold">
        Get Started for Free
      </h1>
      <form className="pr-10 mt-4">
        <Input placeholder={"Name"} />
        <Input placeholder={"Email"} />
        <Input placeholder={"Password"} />
        <Input
          type={"submit"}
          containerStyles="bg-yellow-primary rounded-md text-center py-2"
        />
      </form>
    </div>
  );
}

export default Form;

const Input = ({ placeholder, type, containerStyles }) => {
  return (
    <fieldset className={`mb-4 ${containerStyles}`}>
      <input
        type={type}
        placeholder={placeholder}
        className=" py-3 w-full rounded-md focus:border-yellow-primary px-2"
      />
    </fieldset>
  );
};
