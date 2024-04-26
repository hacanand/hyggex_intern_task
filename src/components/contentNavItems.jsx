import * as React from "react";
import { useState } from "react";

function ActiveNavItem({ children }) {
  return (
    <button className={`flex flex-col justify-center px-3 pb-3.5 text-xl font-bold text-blue-950 whitespace-nowrap`}>
      {children}
    </button>
  );
}

function ContentNavItems() {
  const [activeItem, setActiveItem] = useState("Study");

  function NavItem({ item, activeItem }) {
    return (
      <button
        className={`flex flex-col justify-center px-3 pb-3.5 text-xl font-medium  whitespace-nowrap ${
          activeItem == item ? "text-blue-800 border-b-2 border-blue-800 rounded-md" : "text-zinc-500"
          }`}
        onClick={() => handleItemClick(item)}
      >
        {item}
      </button>
    );
  }

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  console.log(activeItem)
  const navItems = ["Study","Quiz", "Test", "Game", "Others"];
  return (
    <nav className="flex gap-5 mt-12 justify-center max-md:flex-wrap">
      {/* <ActiveNavItem children={activeItem}/>  */}
      {navItems.map((item) => (
        <NavItem
          key={item}
          item={item}
          activeItem={activeItem}        
        />
      ))}
    </nav>
  );
}
export default ContentNavItems;
