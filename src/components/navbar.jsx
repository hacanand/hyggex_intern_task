import React,{useState} from "react";


const Navbar = () => {
  const [activeItem, setActiveItem] = useState(false);
  const handleClick = () => {
    setActiveItem(!activeItem);
  };
  return (
    <nav className="flex relative justify-between py-5">
      <div className="pt-2">
        <img src="/Component 40.svg" alt="" className="max-sm:w-32" />
      </div>
      <div className="flex flex-end">
        <div className="flex sm:gap-5 max-sm:gap-2 justify-between items-center text-lg whitespace-nowrap text-neutral-700 max-md:flex-wrap capitalize">
          <div className="flex gap-5 justify-between self-stretch pr-5 my-auto max-md:hidden">
            <div>Home</div>
            <div>Flashcard</div>
            <div>Contact</div>
            <div>FAQ</div>
          </div>
          <div className="justify-center self-stretch px-8  py-2 font-medium bg-blue-800  text-white rounded-[32px] max-sm:px-3">
            Login
          </div>
          <div
            className="md:hidden  cursor-pointer relative"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 50 50"
            >
              <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
            </svg>
          </div>
        </div>
      </div>
    { activeItem&&<div className="absolute top-20 justify-center   w-full rounded self-center h-screen backdrop-blur-lg  flex transition-transform  ">
      <div className="flex flex-col gap-5 p-4 font-bold">
        <div>Home</div>
        <div>Flashcard</div>
        <div>Contact</div>
        <div>FAQ</div>
      </div>
    </div>}
    </nav>
  );
};

export default Navbar;
