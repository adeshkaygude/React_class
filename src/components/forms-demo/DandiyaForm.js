import React from "react";
import { useForm } from "react-hook-form";
const DandiyaForm = () => {
  const { register, handleSubmit } = useForm();

  const handleUser = (user) => {
    console.log("User: ", user);
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
      <h3>Basic Dandiya Form</h3>
      <form onSubmit={handleSubmit(handleUser)}>
        <label htmlFor="uname">Name</label>
        <input type="text" id="uname" {...register("name")} />
        <br />

        <label htmlFor="mobile">Mobile</label>
        <input type="text" id="mobile" {...register("mobile")} />
        <br />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        <br />

        <label htmlFor="city">City</label>
        <input type="text" id="city" {...register("city")} />
        <br />

        <label htmlFor="gender">Gender</label>
        <input type="text" id="gender" {...register("gender")} />
        <br />

        <label htmlFor="age">Age</label>
        <input type="number" id="age" {...register("age")} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default DandiyaForm;
