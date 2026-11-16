import { useState } from "react";

function Password() {
  const [open, setOpen] = useState(false);
  const onBulb =
    "https://www.w3schools.com/js/pic_bulbon.gif?utm_source=chatgpt.com";
  const offBulb =
    "https://www.w3schools.com/js/pic_bulboff.gif?utm_source=chatgpt.com";
  return (
    <div>
      <img
        style={{
          width: 200,
          height: 300,
        }}
        src={open ? onBulb : offBulb}
      />
      <input type={open ? "text" : "password"}></input>
      <button
        style={{
          backgroundColor: open ? "black" : "red",
          color: open ? "white" : "black",
        }}
        onClick={() => setOpen(!open)}
      >
        {open ? "hide" : "show"}
      </button>
    </div>
  );
}

export default Password;
