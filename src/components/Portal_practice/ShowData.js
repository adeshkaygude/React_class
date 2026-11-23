import React, { useState } from "react";
import DialogPortal from "./DialogPortal";

const ShowData = () => {
  // Dialog_Portal open किंवा close करण्यासाठी State
  const [open, setOpen] = useState(false);

  // Dialog_Portal open करण्यासाठी
  const handleOpen = () => {
    setOpen(true);
  };

  // Dialog_Portal close करण्यासाठी
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Open Button */}
      <button onClick={handleOpen}>Open Dialog_Portal</button>

      {/* Dialog_Portal Component ला Props पाठवले */}
      <DialogPortal open={open} handleClose={handleClose} />
    </div>
  );
};

export default ShowData;
