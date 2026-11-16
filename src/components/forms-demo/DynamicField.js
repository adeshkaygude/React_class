import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const DynamicField = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      mobiles: [{ value: "" }],
      email: "",
      city: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "mobiles",
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
      <h3>Dynamic Mobile Fields</h3>

      <form onSubmit={handleSubmit(handleUser)}>
        <label htmlFor="uname">Name</label>
        <input id="uname" {...register("name")} />

        {fields.map((field, i) => (
          <div key={field.id}>
            <label htmlFor={`mobile-${i}`}>Mobile {i + 1}</label>

            <input
              type="text"
              id={`mobile-${i}`}
              {...register(`mobiles.${i}.value`)}
            />

            {fields.length > 1 && (
              <button type="button" onClick={() => remove(i)}>
                X
              </button>
            )}
          </div>
        ))}

        {fields.length < 5 && (
          <button type="button" onClick={() => append({ value: "" })}>
            +
          </button>
        )}

        <br />
        <br />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register("email")} />

        <br />
        <br />

        <label htmlFor="city">City</label>
        <input id="city" {...register("city")} />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default DynamicField;
