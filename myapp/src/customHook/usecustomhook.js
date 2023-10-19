import React from "react";
import useDeviceDetect from "./createhook";

function Course() {
  const { isMobile } = useDeviceDetect();



  return (
    <>
      {!isMobile && <div>my name veera</div>}
      
    </>
  );
}
export default Course;