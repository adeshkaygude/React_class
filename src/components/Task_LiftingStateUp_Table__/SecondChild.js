import React from "react";

// Parent कडून Props receive केले
const SecondChild = ({ data, setdata }) => {
  // Input मधील value update करण्यासाठी function
  const handleChange = (event) => {
    // आधीचा Data तसाच ठेवून नवीन value update केली
    setdata({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  // Form Submit Function
  const submitdata = () => {
    console.log("User Data:", data);
  };

  return (
    <div>
      <h3>User Form</h3>

      {/* Name Input */}
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={data.name}
        onChange={handleChange}
      />

      <br />
      <br />

      {/* Mobile Input */}
      <input
        type="number"
        name="mobile"
        placeholder="Enter your mobile number"
        value={data.mobile}
        onChange={handleChange}
      />

      <br />
      <br />

      {/* Password Input */}
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={data.password}
        onChange={handleChange}
      />

      <br />
      <br />

      {/* Submit Button */}
      <button onClick={submitdata}>Submit Data</button>
    </div>
  );
};

export default SecondChild;
