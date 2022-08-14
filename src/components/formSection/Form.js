import React from "react";
import { Formik } from "formik";
import { URL_SIGNUP } from "../../constants/constants";
import { signupValidationSchema } from "../../validationSchemas/signup";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

function Form() {
  const onSubmit = (values) => {
    fetch(URL_SIGNUP, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((res) => {
        res.error !== undefined
          ? alert(`Error: ${res.error}`)
          : alert(`Success ${res.message}`);
      });
  };

  return (
    <div className="mb-5">
      <h1 className="text-red-primary text-2xl font-semibold">
        Get Started for Free
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={signupValidationSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, handleChange, handleSubmit, isValid }) => (
          <form className="pr-10 mt-4" onSubmit={handleSubmit}>
            <Input
              placeholder={"Name"}
              type={"text"}
              name={"name"}
              defaultValue={values.name}
              onChange={handleChange}
            />
            {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
            <Input
              placeholder={"Email"}
              type={"email"}
              name={"email"}
              defaultValue={values.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
            <Input
              placeholder={"Password"}
              type={"password"}
              name={"password"}
              defaultValue={values.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password}</span>
            )}
            <Input
              type={"submit"}
              value={"GET STARTED"}
              containerStyles={
                "bg-yellow-primary rounded-md text-center py-2 font-extrabold w-3/4"
              }
              disabled={!isValid}
            />
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Form;

const Input = ({
  placeholder,
  type,
  containerStyles,
  name,
  value,
  onChange,
  defaultValue,
  disabled,
}) => {
  return (
    <fieldset className={`mb-4 ${containerStyles}`}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        disabled={disabled}
        className=" py-3 w-3/4 rounded-md focus:border-yellow-primary px-2"
      />
    </fieldset>
  );
};
