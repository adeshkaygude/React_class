import React, { useState } from "react";
import Dialog from "./Dialog";

const SampleParent = () => {
 
  const [open, setOpen] = useState(false);


  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      
      <button onClick={() => setOpen(true)}>Open</button>

      <hr />

   
      <Dialog open={open} onClose={onClose} />
    </div>
  );
};

export default SampleParent;
