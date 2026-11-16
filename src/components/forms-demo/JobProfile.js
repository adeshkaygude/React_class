
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const JobProfile = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      city: "",
      exp: 0,
      skills: [{ skill: "", exp: 0 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
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
      <h3>React Hook Form - Job Profile</h3>

      <form onSubmit={handleSubmit(handleUser)}>
        <label htmlFor="uname">Name</label>
        <input id="uname" type="text" {...register("name")} />
        <br />

        <label htmlFor="mob">Mobile</label>
        <input id="mob" type="text" {...register("mobile")} />
        <br />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register("email")} />
        <br />

        <label htmlFor="city">City</label>
        <input id="city" type="text" {...register("city")} />
        <br />

        <label htmlFor="exp">Experience</label>
        <input
          id="exp"
          type="number"
          {...register("exp", { valueAsNumber: true })}
        />
        <br />

        <h4>Skills</h4>

        {fields.map((field, i) => (
          <div key={field.id}>
            <input
              type="text"
              placeholder="Skill name"
              {...register(`skills.${i}.skill`)}
            />

            <input
              type="number"
              placeholder="Experience (years)"
              {...register(`skills.${i}.exp`, {
                valueAsNumber: true,
              })}
            />

            {fields.length > 1 && (
              <button type="button" onClick={() => remove(i)}>
                X
              </button>
            )}

            <br />
          </div>
        ))}

        {fields.length < 10 && (
          <button
            type="button"
            onClick={() => append({ skill: "", exp: 0 })}
          >
            +
          </button>
        )}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default JobProfile;
