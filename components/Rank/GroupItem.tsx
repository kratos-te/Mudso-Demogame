import Inventory from '../../pages/inventory/index';

interface itemProps {
    index: number;
    clickedIndex: number | null;
    inventory: string;
    handleClick: (index: number) => void;
}
const GroupItem = ({index, clickedIndex, inventory, handleClick}: itemProps):JSX.Element => {
    return (
      clickedIndex == index ? (<div className="flex justify-center items-center w-[60px] aspect-square"><div className="rounded-lg justify-center items-center bg-orangeBack aspect-square laptop:w-[20px] ipad:w-[15px] mobile:w-[60px] overflow-hidden" onClick={() => handleClick(index)}><img src={inventory} className="w-full aspect-square rotate-[315deg]"/></div></div>) : (<div className="flex w-[60px] aspect-square justify-center items-center "><div className="rounded-lg border-[1px] border-black aspect-square bg-greyBack laptop:min-w-[20px] ipad:min-w-[15px] mobile:w-[50px] " onClick={() => handleClick(index)}></div></div>)
  )
}
export default GroupItem;
