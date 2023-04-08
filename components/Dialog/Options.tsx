import { useState, useEffect } from "react";

import Clock from "./Clock";
type Props = {
  elements: string[];
};

const ButtonSequence: React.FC<Props> = ({ elements }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // prevIndex < elements.length - 1 ? prevIndex + 1 : 0
        prevIndex++;
        if (prevIndex === elements.length) {
          clearInterval(intervalId);
        }
        return prevIndex;
       }
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, [elements]);

  return (
    <>
      {elements.map((element, index) => (
        <button
          key={index} className="flex relative w-full border-2 rounded-lg border-dodgerBlue hover:border-black  bg-greyBack text-dodgerBlue text-[3vh] text-center hover:text-black hover:text-[2vh] justify-center items-center"
        >
          <div className="absolute left-2">
            {currentIndex === index ? <Clock />: '' }
          </div>
          {element}
        </button>
      ))}
    </>
  );
};

export default ButtonSequence;