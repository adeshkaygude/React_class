import { useState } from "react";
const onBulb =
  "https://www.w3schools.com/js/pic_bulbon.gif?utm_source=chatgpt.com";
const offBulb =
  "https://www.w3schools.com/js/pic_bulboff.gif?utm_source=chatgpt.com";

function ImageToggle() {
  const [flag, setfalg] = useState(false);

  const handleclick = () => setfalg(!flag);
  return (
    <div>
      <img src={flag ? onBulb : offBulb} style={{ height: 500, width: 400 }} />
      <button onClick={handleclick}>{flag ? "off" : "on"}</button>
    </div>
  );
}

export default ImageToggle;
