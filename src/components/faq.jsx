import React, { useState } from "react";

const items = [
    {
        title: "Can education be used for all age groups?",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sunt, dolorum velit ab deserunt error vitae maxime incidunt sapiente recusandae, tempora libero blanditiis, quos pariatur reprehenderit quis aperiam. Qui, temporibus?"
    },
    {
        title: "How do education flashcards work?",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sunt, dolorum velit ab deserunt error vitae maxime incidunt sapiente recusandae, tempora libero blanditiis, quos pariatur reprehenderit quis aperiam. Qui, temporibus?"
    },
    {
        title: "Can education be used for all age groups?",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sunt, dolorum velit ab deserunt error vitae maxime incidunt sapiente recusandae, tempora libero blanditiis, quos pariatur reprehenderit quis aperiam. Qui, temporibus?"
    },
  // ... more items
];

const AccordionItem = ({ title, content, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="bg-white border  rounded-md border-blue-400 my-2 shadow-lg">
      <h2
        onClick={handleClick}
        className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
      >
        <span>{title}</span>
        <svg
          className={`fill-current text-gray-700 h-6 w-6 transform transition-transform duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
        </svg>
      </h2>
      <div
        className={` overflow-hidden max-h-0 duration-500 transition-all  ${
          isOpen ? `max-h-fit` : ""
        }`}
      >
        <p className="p-3 text-gray-900">{content}</p>
      </div>
    </li>
  );
};

const Faq = () => {
  return (
    <div className="flex items-start m-2 py-20">
      <div className="w-full sm:w-10/12 md:w-2/3 my-1">
        <h2 className=" font-bold text-3xl text-blue-800 mb-2">
          FAQ 
        </h2>
        <ul className="flex flex-col">
          {items.map((item, index) => (
            <AccordionItem key={index} index={index} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faq;
