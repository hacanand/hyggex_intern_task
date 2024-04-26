import * as React from "react";

function IconWithText({ src, text, onClick }) {
  return (
    <button
      className="flex gap-0 items-center font-medium whitespace-nowrap text-zinc-500"
      onClick={onClick}
    >
      <img
        loading="lazy"
        src={src}
        alt=""
        className="shrink-0 sm:w-6 max-sm:w-4 aspect-square"
      />
      <div className="max-md:text-xs">{text}</div>
    </button>
  );
}

function BreadCrumb() {
  const handleFlashcardClick = () => {
    console.log("Flashcard clicked");
  };

  const handleMathematicsClick = () => {
    console.log("Mathematics clicked");
  };

  const handleRelationAndFunctionClick = () => {
    console.log("Relation and Function clicked");
  };

  return (
    <div className="flex  gap-0 sm:text-lg text-center max-md:flex-wrap">
      <button
        className="flex gap-0 items-center font-medium whitespace-nowrap text-zinc-500"
        onClick={handleFlashcardClick}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa79f2a6be98768deb6946ac9a8bde734d9a286b6cb87cdfcb46e0678efec65b?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&"
          alt=""
          className="aspect-square  sm:w-[30px] max-sm:w-[20px] shrink-0"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2a1d01218a1978c48b354696e34b2e896845efcefceae26d0436a1a5ac18a2a?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&"
          alt=""
          className="shrink-0 self-stretch my-auto sm:w-6 max-sm:w-4 aspect-square"
        />
        <div className="self-stretch my-auto max-md:text-xs">Flashcard</div>
      </button>
      <div className="flex my-auto">
        <IconWithText
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/20a030871d5b9379c6b8c17539b316003547b190b396f1930c15789d3925f0f3?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&"
          text="Mathematics"
          onClick={handleMathematicsClick}
        />
        <div className="flex gap-0 font-semibold text-blue-950">
          <IconWithText
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/20a030871d5b9379c6b8c17539b316003547b190b396f1930c15789d3925f0f3?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&"
            text="Relation and Function"
            onClick={handleRelationAndFunctionClick}
          />
        </div>
      </div>
    </div>
  );
}

export default BreadCrumb;