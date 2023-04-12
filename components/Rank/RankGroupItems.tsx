import GroupItem from "./GroupItem";

interface itemProps {
  clickedIndex: number | null;
  inventory: string;
  handleClick: (index: number) => void;
}

const RankGroupItems = ({clickedIndex, inventory, handleClick}: itemProps):JSX.Element => {
  return (
    <div className="grid grid-cols-2 rotate-45 justify-center items-center">
      {Array(4)
        .fill(0)
        .map((_, index) => <GroupItem index={ index } clickedIndex={ clickedIndex } inventory={ inventory } handleClick={ handleClick } />
          )}
    </div>
  )
}

export default RankGroupItems;