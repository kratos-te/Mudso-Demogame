
import React, { useState } from 'react'

// const [clickedIndex, setClickedIndex] = useState(-1);
// const handleClick = (index:number) => {
//   setClickedIndex(index);
//   console.log(index);
//   };
interface InventoryProps {
    clickedIndex: number | null;
    inventoryArray: string[];
    handleClick: (index: number) => void;
};

const InventoryBoxes = ({inventoryArray, clickedIndex, handleClick}: InventoryProps):JSX.Element => {
    return (
        <>
        {Array(20)
          .fill(0)
          .map((_, index) =>
            inventoryArray[index] ? (
              <div key={index} className={`flex justify-center items-center aspect-square min-w-[60%] max-w-[100%]  bg-greyBack border-[1px] border-gray-600 overflow-hidden rounded-xl ml-[2px] mb-[1px] ${clickedIndex === index ? 'border-[2px] border-[black]' : ''}`} onClick={() => handleClick(index)}>
                <img className="max-w-full min-w-full" src={inventoryArray[index]} alt={`image-${index}`} />
              </div>
            ) : (
              <div className={`aspect-square min-w-[60%] max-w-[100%]  bg-greyBack border-[1px] border-gray-600 rounded-xl ml-[2px] mb-[1px] ${clickedIndex === index ? 'border-[2px] border-[black]' : ''}`} onClick={() => handleClick(index)} key={index}></div>
            )
          )}
      </>
    );
    }

export default InventoryBoxes;