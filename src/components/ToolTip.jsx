import { FC, ReactNode, useRef } from "react";

const ToolTip = ({ children, tooltip }) => {
  const tooltipRef = useRef(null);
  const container = useRef(null);

  return (
    <div
      ref={container}
      className="group relative inline-block"
    >
      {children}
      {tooltip ? (
        <span
          ref={tooltipRef}
          className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-black text-white p-1 rounded absolute top-full mt-2 whitespace-nowrap"
        >
          {tooltip}
        </span>
      ) : null}
    </div>
  );
};

export default ToolTip;
