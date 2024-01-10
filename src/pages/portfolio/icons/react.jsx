import { useState } from "react";

export default function ReactIcon() {
  const [isPopoverVisible, setPopoverVisible] = useState(false);

  const togglePopover = () => {
    setPopoverVisible(!isPopoverVisible);
  };

  return (
    <div className="relative inline-block">
      <i
        onMouseEnter={togglePopover}
        onMouseLeave={togglePopover}
        className="fa-brands fa-react"
      ></i>
      {isPopoverVisible && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-1">
          <div className="border py-2 px-4 text-sm rounded-md font-light text-black bg-gray-100">
            React
          </div>
        </div>
      )}
    </div>
  );
}
