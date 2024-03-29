import React from "react";
import { TfiMenu } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";

function Logo({ isOpen, setIsOpen }) {
  return (
    <>
      <div className="Hero flex items-center justify-between pb-4 pl-6 pr-6 pt-4 text-neutral-white md:flex-1 md:justify-normal md:rounded-lg md:bg-tablet md:pb-6 md:pr-0 md:pt-[90px] lg:flex-none lg:bg-desktop lg:pt-[62px]">
        <div>
          <h2 className="text-[15px] md:text-xl">Frontend Mentor</h2>
          <h4 className="text-[13px] font-normal md:text-[15px] lg:text-lg">
            Feedback Board
          </h4>
        </div>
        <div className="md:hidden">
          {isOpen ? (
            <TfiClose
              color="#ffffff"
              strokeWidth="1"
              size={"20px"}
              onClick={() => setIsOpen((open) => !open)}
            />
          ) : (
            <TfiMenu
              color="#ffffff"
              size={"20px"}
              onClick={() => setIsOpen((open) => !open)}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Logo;
