import React from "react";
import { useForm } from "react-hook-form";

const CollegeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      city: "",
      tenthPercentage: "",
      twelfthPercentage: "",
      age: "",
      dob: "",
      addhar_card: "",
      tenthMarksheet: "",
      twelfthMarksheet: "",
    },
  });

  const handleUser = (user) => {
    console.log("User:", user);
    alert("Form submitted successfully!");
    reset();
  };

  return (
    <section
      style={{
        width: "min(600px, 90%)",
        height: "",
        border: "2px solid #000",
        padding: 20,
        margin: "30px auto",
        borderRadius: 8,
      }}
    >
      <h3
        style={{
          textAlign: "center",
          fontSize: 30,
          backgroundColor: "rgba(12, 11, 12, 0.74)",
          padding: 10,
          color: "rgb(241, 238, 238)",
          fontWeight: "bold",
          border: "2px solid #000",
        }}
      >
        College Form
      </h3>

      <form onSubmit={handleSubmit(handleUser)} noValidate>
        {/* Name */}
        <label htmlFor="uname">
          <b>Name</b>
        </label>
        <input
          id="uname"
          type="text"
          maxLength={50}
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name must contain at least 2 characters",
            },
            maxLength: {
              value: 50,
              message: "Name cannot exceed 50 characters",
            },
            pattern: {
              value: /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/,
              message:
                "Enter a valid name using letters, spaces, apostrophes or hyphens",
            },
          })}
        />
        <p className="error">{errors.name?.message}</p>

        {/* Mobile */}
        <label htmlFor="mobile">
          <b>Mobile</b>
        </label>
        <input
          id="mobile"
          type="tel"
          inputMode="numeric"
          maxLength={10}
          {...register("mobile", {
            required: "Mobile number is required",
            pattern: {
              value: /^[6-9][0-9]{9}$/,
              message:
                "Enter a valid 10-digit Indian mobile number starting with 6–9",
            },
          })}
        />
        <p className="error">{errors.mobile?.message}</p>

        {/* Email */}
        <label htmlFor="email">
          <b>Eamil</b>
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            maxLength: {
              value: 254,
              message: "Email cannot exceed 254 characters",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
        />
        <p className="error">{errors.email?.message}</p>

        {/* City */}
        <label htmlFor="city">
          <b>City</b>
        </label>
        <input
          id="city"
          type="text"
          maxLength={50}
          {...register("city", {
            required: "City is required",
            minLength: {
              value: 2,
              message: "City must contain at least 2 characters",
            },
            maxLength: {
              value: 50,
              message: "City cannot exceed 50 characters",
            },
            pattern: {
              value: /^[A-Za-z]+(?:[ .'-][A-Za-z]+)*$/,
              message: "Enter a valid city name",
            },
          })}
        />
        <p className="error">{errors.city?.message}</p>

        {/* 10th Percentage */}
        <label htmlFor="tenthPercentage">
          <b>10th Percentage (%)</b>
        </label>
        <input
          id="tenthPercentage"
          type="text"
          step="0.01"
          min="0"
          max="100"
          placeholder="Enter 10th percentage"
          {...register("tenthPercentage", {
            required: "10th percentage is required",
            valueAsNumber: true,
            min: {
              value: 0,
              message: "Percentage cannot be less than 0",
            },
            max: {
              value: 100,
              message: "Percentage cannot exceed 100",
            },
            validate: (value) =>
              Number.isFinite(value) || "Please enter a valid percentage",
          })}
        />
        <p className="error">{errors.tenthPercentage?.message}</p>

        {/* 12th Percentage */}
        <label htmlFor="twelfthPercentage">
          <b>12th Percentage (%)</b>
        </label>
        <input
          id="twelfthPercentage"
          type="text"
          step="0.01"
          min="0"
          max="100"
          placeholder="Enter 12th percentage"
          {...register("twelfthPercentage", {
            required: "12th percentage is required",
            valueAsNumber: true,
            min: {
              value: 0,
              message: "Percentage cannot be less than 0",
            },
            max: {
              value: 100,
              message: "Percentage cannot exceed 100",
            },
            validate: (value) =>
              Number.isFinite(value) || "Please enter a valid percentage",
          })}
        />
        <p className="error">{errors.twelfthPercentage?.message}</p>
        {/* age */}
        <label htmlFor="age">
          <b>Age</b>
        </label>
        <input
          type="number"
          id="age"
          {...register("age", { required: "Age is required" })}
        />
        <p className="error">{errors.age?.message}</p>
        {/* dob */}
        <label htmlFor="dob">
          <b> Date of Birth</b>
        </label>
        <input
          type="date"
          id="dob"
          {...register("dob", { required: "date of birth is mandotary" })}
        />
        <p className="error">{errors?.dob?.message}</p>
        {/* profile photo */}
        <label htmlFor="photo">
          {" "}
          <b>Profile Photo</b>
        </label>
        <input
          type="file"
          id="photo"
          {...register("photo", { required: " Profile Photo is required " })}
        />
        <p className="error"> {errors?.photo?.message}</p>
        {/* upload addhar card photo */}
        <label htmlFor="addhar_card">
          <b>Upload Addhar card</b>
        </label>
        <input
          type="file"
          id="addhar_card"
          {...register("addhar_card", { required: "addhar card is required" })}
        />
        <p className="addhar_card"> {errors?.addhar_card?.message}</p>
        {/* upload 10th marksheet */}
        {/* upload 12th marksheet */}
        <button type="submit">
          <b>Submit</b>
        </button>
      </form>

      <style>{`
        form {
          display: flex;
          flex-direction: column;
          gap: 6px;
        //   background:#5151;
          
        }

        input {
          padding: 10px;
          border: 1px solid #888;
          border-radius: 4px;
          font-size: 16px;
        }

        input:focus {
          outline: 2px solid #2563eb;
          outline-offset: 1px;
        }

        .error {
          color: #dc2626;
          font-size: 13px;
          margin: 0 0 10px;
          min-height: 16px;
        }

        button {
          padding: 10px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }
      `}</style>
    </section>
  );
};

export default CollegeForm;
