import RankGroupItems from "@/components/Rank/RankGroupItems";
import { useState } from "react";
const Rank = () => {
  const [clickedIndex, setClickedIndex] = useState(-1);
  
  const handleClick = (index:number) => {
    setClickedIndex(index);
    console.log(index);
  };
  return (
    <div className="w-screen overflow-y-auto">
        <div className="flex items-center mobile:flex-col justify-between w-full mx-auto  min-h-screen">
        <div className="flex laptop:w-4/5 ipad:w-full flex-col mobile:flex-row mobile:justify-center mobile:w-[90%] mobile:mb-5 mobile:items-center">
                <img src='character.png' className=' laptop:min-w-[300px] ipad:min-w-[280px]  mobile:mt-[7vh] mobile:w-1/2 mobile:m-0' />
                <div className="mobile:ml-3">
                  <RankGroupItems inventory='leaf.svg' handleClick={handleClick} clickedIndex={clickedIndex} />
                </div>
          </div>      
        </div>
    </div>
  )
}

export default Rank;