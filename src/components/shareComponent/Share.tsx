import React, { useState } from "react";
import { SharePopover } from "../popover";
import { ShareBtn } from "../ShareBtn";

interface ShareProps {}

export const Share = ({}: ShareProps) => {
  const [openSharePopover, setOpenSharePopover] = useState(false);

  const clickShareBtn = () => {
    console.log(openSharePopover, "hahah");
    setOpenSharePopover(true);
  };

  return (
    <>
      <ShareBtn onClick={clickShareBtn} label="Share" />
      <SharePopover
        sharePopoverVisibility={openSharePopover}
        sharePopoverOnClose={() => setOpenSharePopover(false)}
      />
    </>
  );
};
