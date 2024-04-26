import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-5">
      <div>
        <img src="/Component 40.svg" alt="" />
      </div>
      <div className="flex flex-end">
        <div className="flex gap-5 justify-between items-center text-lg whitespace-nowrap text-neutral-700 max-md:flex-wrap  uppercase ">
          <div className="flex gap-5 justify-between self-stretch pr-5 my-auto">
            <div>Home</div>
            <div>Flashcard</div>
            <div>Contact</div>
            <div>FAQ</div>
          </div>
          <div className="justify-center self-stretch px-10 py-3 font-medium bg-blue-800  text-white rounded-[32px] max-md:px-5">
            Login
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
