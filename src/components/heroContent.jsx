import * as React from "react";
function Icon({ src, alt, className, onClick }) {
  return (
    <img src={src} alt={alt} className="cursor-pointer" onClick={onClick} />
  );
}
function Equation({ children }) {
  return (
    <button className="self-center mt-28 mb-16 text-4xl  font-bold tracking-wider text-center text-white max-md:my-10">
     
      {children} 
    </button>
  );
}
function HeroContent() {
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
    console.log("Previous button clicked");
  };
  const handleNextClick = () => {
    console.log("Next button clicked");
  };
    return (
      <div className="flex-col flex w-full items-center ">
        <div className="flex flex-col pt-20 w-7/12 ">
          <section className="flex flex-col px-9 pt-9 pb-20 mt-14 w-full justify-center rounded-[42.507px] max-md:px-5 max-md:mt-10 max-md:max-w-full bg-blue-700">
            <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
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
            <Equation>9 + 6 + 7x - 2x - 3</Equation>
          </section>
          <div className="flex gap-5 justify-between items-center self-center px-5 mt-8 w-full text-2xl font-bold text-gray-800 whitespace-nowrap max-w-[652px] max-md:flex-wrap max-md:max-w-full">
            <Icon
              src="/Vector.svg"
              alt=""
              className="shrink-0 self-stretch my-auto aspect-square fill-[linear-gradient(180deg,)] w-[30px]"
              onClick={handlePrevClick}
            />
            <div className="flex gap-5 justify-between self-stretch">
              <Icon
                src="/Vector (2).svg"
                alt=""
                className="shrink-0 aspect-square fill-[linear-gradient(180deg,)] w-[50px]"
                onClick={handlePrevClick}
              />
              <button className="my-auto">01/10</button>
              <Icon
                src="/Vector (3).svg"
                alt=""
                className="shrink-0 aspect-square fill-[linear-gradient(180deg,)]  w-[55px]"
                onClick={handleNextClick}
              />
            </div>
            <Icon
              src="/Vector (5).svg"
              alt=""
              className="shrink-0 self-stretch my-auto aspect-square fill-[linear-gradient(180deg,)] w-[30px]"
              onClick={handleNextClick}
            />
          </div>
        </div>
        <div className="flex justify-between w-full  ">
          <img src="/Frame 41.svg" alt="" />
          <img src="/Frame 48.svg" alt="" />
        </div>
      </div>
    );
}
export default HeroContent;
