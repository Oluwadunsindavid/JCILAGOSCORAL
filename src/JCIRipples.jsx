import React from "react";

const JCIRipples = ({
  positionClasses = "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  sizeClasses = "w-56 sm:w-96 h-56 sm:h-96",
  rotation = "rotate-[15deg]",
  opacity = "opacity-12",
  borderColor = "border-white",
}) => {
  return (
    <div
      className={`absolute ${positionClasses} ${sizeClasses} ${rotation} ${opacity} pointer-events-none`}
    >
      <div
        className={`absolute inset-0 border-4 ${borderColor} rounded-full`}
      ></div>
      <div
        className={`absolute inset-8 border-4 ${borderColor} rounded-full`}
      ></div>
      <div
        className={`absolute inset-16 border-4 ${borderColor} rounded-full`}
      ></div>
      <div
        className={`absolute inset-24 border-4 ${borderColor} rounded-full`}
      ></div>
    </div>
  );
};

export default JCIRipples;
