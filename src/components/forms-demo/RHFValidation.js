import React from "react";
import { useForm } from "react-hook-form";
import { object, string, number, bool } from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

const userSchema = object({
  name: string()
    .min(2, "atleast 2 chars required!")
    .max(45, "Too long")
    .required("Name is required"),
  mobile: string().matches(/^[0-9]{10}/, "Mobile must be 10 digits "),
  email: string().min(5, "too short ").required("email is required"),
  city: string(),
});

const RHFValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      city: "",
    },
    resolver: yupResolver(userSchema),
  });

  const handleUser = (user) => {
    console.log("User:", user);
  };

  return (
    <section
      style={{
        width: 500,
        border: "2px solid #000",
        padding: 10,
        margin: "auto",
      }}
    >
      <h3>Basic React Hook Form</h3>

      <form onSubmit={handleSubmit(handleUser)}>
        <label htmlFor="uname">Name </label>
        <input
          type="text"
          id="uname"
          {...register("name", {
            required: { value: true, message: "Name Is Required" },
            minLength: { value: 2, message: "Atleast must 2 character" },
          })}
        />
        <p>{errors?.name?.message}</p>
        <br />
        <br />

        <label htmlFor="mobile">Mobile </label>
        <input
          type="text"
          id="mobile"
          {...register("mobile", {
            required: { value: true, message: "Mobile Is Required" },
            pattern: { value: /^[0-9]{10}$/, message: "Must have 10 digit" },
          })}
        />
        <p>{errors?.mobile?.message}</p>
        <br />
        <br />

        <label htmlFor="email">Email </label>
        <input type="email" id="email" {...register("email")} />
        <br />
        <br />

        <label htmlFor="city">City </label>
        <input type="text" id="city" {...register("city")} />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default RHFValidation;
