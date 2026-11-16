import React, { useEffect, useState } from "react";
const ErrorMsg = ({ children }) => <p style={{ color: "red" }}>{children}</p>;
const BasicForm = () => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e?.target;
    setData({ ...data, [name]: value });
  };
  const handleGender = (value) => {
    setData({ ...data, gender: value });
  };
  const handleSubmit = () => {
    console.log("User:", data);
  };
  const validate = () => {
    const errors = {};
    if (data?.name && data?.name?.length < 2) {
      errors.name = "Name must be at least 2 chars long ";
    }
    if (!/^[0-9]{10}$/.test(data?.mobile))
      errors.mobile = "Mobile must be 10 digits only";
    setErrors(errors);
  };
  useEffect(() => {
    // validate;
    validate();
  }, [data]);
  return (
    <section
      style={{
        width: 500,
        margin: "auto",
        padding: 20,
        border: "2px solid #009",
      }}
    >
      <h3> Basic form</h3>
      <label htmlFor="uname"> Name</label>
      <input type="text" name="name" id="uname" onChange={handleChange} />
      <ErrorMsg> {errors?.name}</ErrorMsg>

      <br />
      <label htmlFor="mobile"> Mobile</label>
      <input type="text" name="mobile" id="mobile" onChange={handleChange} />
      <ErrorMsg> {errors?.mobile}</ErrorMsg>

      <br />
      <label htmlFor="email"> Email</label>
      <input type="text" name="email" id="email" onChange={handleChange} />
      <ErrorMsg> {errors?.email}</ErrorMsg>

      <br />
      <label> Gender</label>
      <input
        type="radio"
        name="gender"
        id="male"
        onChange={() => handleGender("male")}
      />
      <label htmlFor="male"> Male</label>
      <br />
      <input
        type="radio"
        name="gender"
        id="female"
        onChange={() => handleGender("female")}
      />
      <label htmlFor="female"> Female</label>
      <br />
      <input
        type="radio"
        name="gender"
        id="other"
        onChange={() => handleGender("other")}
      />
      <label htmlFor="other"> Other</label>
      <br />
      <button onClick={handleSubmit}>Submit </button>
    </section>
  );
};
export default BasicForm;
