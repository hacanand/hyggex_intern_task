import * as React from "react";

const equations = [
  {
    item: "9 + 6 + 7x - 2x - 3",
  },
  {
    item: "45x+ 3y - 2x + 5y - 3",
  },
  {
    item: "9x + 45y + 7x - 2x - 3",
  },
  {
    item: "10x+20y+ 7x - 2x - 3",
  },
  {
    item: "9y + 6x + 7x - 3",
  },
  {
    item: "23x + 6y + 45x - 2x - 100",
  },
  {
    item: "20x+ 6y + 7x - 2x - 3",
  },
  {
    item: "9x + 6y + 7x - 2x - 3",
  },
  {
    item: "9y + 10y + 7x - 2x - 3",
  },
  {
    item: "12 + 6x + 7x - 2x - 3y",
  },
];

function Icon({ src, alt, onClick }) {
  return (
    <img src={src} alt={alt} className="cursor-pointer max-sm:w-6" onClick={onClick} />
  );
}
function Equation({ children }) {
  return (
    <button className="self-center mt-28 mb-16 sm:text-4xl text-2xl  font-bold sm:tracking-wider text-center text-white max-md:my-10">
      {children}
    </button>
  );
}
function HeroContent() {
  const [itemIndex, setItemIndex] = React.useState(0);
  const icons = [
    {
      src: "/Vector (1).svg",
      alt: "",
      onClick: () => console.log("Icon 1 clicked"),
    },
    {
      src: "/Vector (4).svg ",
      alt: "",
      onClick: () => console.log("Icon 2 clicked"),
    },
  ];
  const handlePrevClick = () => {
    setItemIndex(
       
      (prevIndex) => {
        if (prevIndex === 0) {
          return prevIndex;
        }
        return (prevIndex - 1  );
      }
    );
  };
  const handleNextClick = () => {
    setItemIndex(
       
      (prevIndex) => {
        if (prevIndex === equations.length - 1) {
          return prevIndex;
        }
        return prevIndex + 1;
      }
    );
  };
  const resetHandler = () => {
     setItemIndex(0);
  };
  return (
    <div className="flex-col flex w-full items-center ">
      <div className="flex flex-col sm:pt-20 w-7/12 max-md:w-11/12 max-sm:w-full">
        <section className="flex flex-col px-9 pt-9 pb-20 mt-14 w-full justify-center rounded-[42.507px] max-md:px-5 max-md:mt-10 max-md:max-w-full bg-blue-700">
          <div className="flex md:gap-5 max-sm:gap-2 justify-between max-md:flex-wrap max-md:max-w-full">
            {icons.map((icon, index) => (
              <Icon
                key={index}
                src={icon.src}
                alt={icon.alt}
                className="shrink-0 aspect-square w-[34px] cursor-pointer"
                onClick={icon.onClick}
              />
            ))}
          </div>
          <Equation>{equations[itemIndex].item}</Equation>
        </section>
        <div className="flex md:gap-5 max-sm:gap-2 justify-between items-center self-center px-5 mt-8 w-full text-2xl font-bold text-gray-800 whitespace-nowrap    max-md:max-w-full">
          <Icon
            src="/Vector.svg"
            alt=""
            className="shrink-0 self-stretch my-auto aspect-square  w-[30px]"
            onClick={resetHandler}
          />
          <div className="flex md:gap-5 max-md:gap-2 justify-between ">
            <Icon
              src="/Vector (3).svg"
              alt=""
              className="aspect-square md:w-[50px] max-md:w-[30px]"
              onClick={handlePrevClick}
            />
            <span className="my-auto">
              {itemIndex + 1}/{equations.length}
            </span>
            <Icon
              src="/Vector (2).svg"
              alt=""
              className="aspect-square md:w-[50px] max-md:w-[30px]"
              onClick={handleNextClick}
            />
          </div>
          <Icon
            src="/Vector (5).svg"
            alt=""
            className="shrink-0 self-stretch my-auto aspect-square fill-[linear-gradient(180deg,)] w-[30px]"
            // onClick={ }
          />
        </div>
      </div>
      <div className="flex  justify-between w-full ">
        <img src="/Frame 41.svg" alt="" className="max-md:w-4/12" />
        <img src="/Frame 48.svg" alt="" className="max-md:w-5/12" />
      </div>
    </div>
  );
}
export default HeroContent;
