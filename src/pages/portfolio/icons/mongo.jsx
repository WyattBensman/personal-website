import { useState } from "react";

export default function MongoIcon() {
  const [isPopoverVisible, setPopoverVisible] = useState(false);

  const togglePopover = () => {
    setPopoverVisible(!isPopoverVisible);
  };

  return (
    <div className="relative inline-block">
      <img
        onMouseEnter={togglePopover}
        onMouseLeave={togglePopover}
        src="/images/mongodb-svgrepo-com.png"
        className="w-[36px]"
      />
      {isPopoverVisible && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
          <div className="border py-2 px-4 text-sm rounded-md font-light text-black bg-gray-100">
            MongoDB
          </div>
        </div>
      )}
    </div>
  );
}
