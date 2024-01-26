import { React, Link } from "react";
import EmptyImage from "../Assests/image.svg";

const Suggestion = () => {
  return (
    <div className="FEED bg-white rounded-lg flex-col items-center justify-center md:mx-0 mb-6">
      <div className="mt-10 ml-36 pt-10 ">
        <img src={EmptyImage} alt="" srcset="" />
      </div>
      <h1 className="mt-10 font-bold">There is no feedback yet.</h1>
      <p className="m-10 md:w-1/2">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <div className="pb-10">
        <button class="BTN w-36 h-10 text-white hover:bg-[#C75AF6] ">
          Add Feedback
        </button>
      </div>
    </div>
  );
};

export default Suggestion;
