import * as React from "react";
import edit from "../Assests/edit.svg";
export default function Suggestions() {
  const [open, setOpen] = React.useState(false);
  function handleOpen() {
    setOpen(!open);
  }
  return (
    <div className="Navbar flex justify-between p-5 md:rounded-lg md:mt-10 lg:mt-0 lg:ml-6 lg:w-11/12 bg-white md:w-screen ">
      <div className="md:flex hidden ">
        <img src={edit} alt="" srcset="" />
        <p className="font-bold mx-3">0 Suggestions</p>
      </div>
      <div className="flex items-center">
        <p className="md:mx-3">Sort by : </p>
        <button onClick={handleOpen} className="flex items-center">
          <span className="font-bold mr-3">Most Upvotes</span>
        </button>
        {open && (
          <div className=" absolute top-48 md:top-80 lg:top-20 md:right-80  w-60 h-48 z-40 bg-white font-semibold text-left text-[#647196]  shadow-md p-5 rounded-lg">
            <option
              className="hover:text-[#AD1FEA] hover:font-bold border-b-2 my-2"
              value="Most Upvotes"
            >
              Most Upvotes
              <img src={Tick} alt="Tick image" />
            </option>
            <option
              className="hover:text-[#AD1FEA] hover:font-bold border-b-2"
              value="Least Upvotes"
            >
              Least Upvotes
            </option>
            <option
              className="hover:text-[#AD1FEA] hover:font-bold border-b-2 my-2"
              value="Most Comments"
            >
              Most Comments
            </option>
            <option
              className="hover:text-[#AD1FEA] hover:font-bold border-b-2"
              value="Least Comments"
            >
              Least Comments
            </option>
          </div>
        )}
      </div>

      <button className="BTN w-36 h-10 text-white hover:bg-[#C75AF6]">
        + Add Feedback
      </button>
    </div>
  );
}
